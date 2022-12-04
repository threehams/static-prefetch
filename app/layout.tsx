import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <h1>App directory</h1>
        {children}
        <Link href="/">Switch to pages directory</Link>
      </body>
    </html>
  );
}
