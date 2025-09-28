// pages/vendors.tsx (top)
import JsonLd from "../components/JsonLd";
const ld = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Truvern TPRM",
  applicationCategory: "BusinessApplication",
  description: "Vendor risk assessments with auto-scoring and remediation.",
  url: "https://www.truvern.com/vendors",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};
export default function Vendors() {
  return (
    <>
      <JsonLd data={ld} />
      {/* …your existing page */}
    </>
  );
}
