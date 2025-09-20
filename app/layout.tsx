import "@/styles/globals.css";

export const metadata = {
  title: "TPRM Website",
  description: "Third-Party Risk Assessment site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
