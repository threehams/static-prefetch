import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/app/static">Static page</Link>
      <Link href="/app/dynamic">Dynamic page</Link>
    </div>
  );
}
