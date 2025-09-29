import { useState } from "react";

export default function TrustAccordion({
  items,
}: { items: { title: string; content: React.ReactNode }[] }) {
  return (
    <div className="divide-y rounded-xl border bg-white">
      {items.map((it, i) => (
        <AccordionItem key={i} title={it.title}>
          {it.content}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-gray-900"
      >
        <span>{title}</span>
        <span className={`ml-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && <div className="px-5 pb-5 text-gray-700">{children}</div>}
    </div>
  );
}
