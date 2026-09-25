import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-40">
      <div className="absolute inset-0 bg-blueprint-dark opacity-50" />
      <div className="container-content relative text-center">
        <p className="eyebrow-light">Error 404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-steel-300">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
