import '../styles/globals.css'; // Adjust path if needed
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TPRM Website',
  description: 'Your site description here',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

