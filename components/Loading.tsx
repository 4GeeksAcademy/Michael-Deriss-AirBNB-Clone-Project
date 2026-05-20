export default function Loading({ t = {} }: { t?: Record<string, string> }) {
  return <div className="text-center py-8 text-gray-400">{t.loading || "Loading..."}</div>;
}
