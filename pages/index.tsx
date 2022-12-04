import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/static">Static page</Link>
      <Link href="/dynamic">Dynamic page</Link>

      <Link href="/app">Switch to app directory</Link>
    </div>
  );
}
