export default function Trust() {
  return (
    <main style={{padding: 40, fontFamily: "system-ui"}}>
      <h1 style={{fontSize: 32, fontWeight: 800, color: "#111827"}}>Trust Center</h1>
      <p style={{marginTop: 12, color: "#374151"}}>
        Security, privacy, and reliability at Truvern.
      </p>
      <ul style={{marginTop: 16, lineHeight: 1.6, color: "#374151"}}>
        <li>Encryption in transit & at rest</li>
        <li>Least-privilege access</li>
        <li>Audit logging</li>
      </ul>
    </main>
  );
}
