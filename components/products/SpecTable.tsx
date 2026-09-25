import type { ProductSpecification } from "@/types/product";

export function SpecTable({ specifications }: { specifications: ProductSpecification[] }) {
  return (
    <div className="overflow-hidden border border-steel-200">
      <table className="w-full border-collapse text-left text-sm">
        <tbody>
          {specifications.map((spec, i) => (
            <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-steel-100/60"}>
              <th
                scope="row"
                className="w-1/3 border-r border-steel-200 px-5 py-4 font-mono text-xs font-medium uppercase tracking-wide text-steel-600"
              >
                {spec.label}
              </th>
              <td className="px-5 py-4 text-navy-900">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
