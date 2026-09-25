/**
 * Minimal in-memory rate limiter keyed by IP address.
 *
 * Suitable for a single-instance deployment. If the application runs on
 * multiple serverless instances or containers behind a load balancer,
 * replace this with a shared store (e.g. Redis / Upstash) so limits are
 * enforced consistently across instances.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const MAX_REQUESTS = Number(process.env.ENQUIRY_RATE_LIMIT_MAX ?? 5);
const WINDOW_MS = Number(process.env.ENQUIRY_RATE_LIMIT_WINDOW ?? 600) * 1000;

export function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

// Periodically clear stale buckets so the map doesn't grow unbounded.
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(key);
    }
  }, WINDOW_MS).unref?.();
}
