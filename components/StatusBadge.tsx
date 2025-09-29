export default function StatusBadge({
  label,
  state = "operational",
}: { label: string; state?: "operational" | "partial" | "outage" }) {
  const color =
    state === "operational" ? "bg-green-100 text-green-700"
    : state === "partial" ? "bg-yellow-100 text-yellow-800"
    : "bg-red-100 text-red-700";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${color}`}>
      <span className="h-2 w-2 rounded-full bg-current/60" />
      {label}
    </span>
  );
}
