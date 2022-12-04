import Link from "next/link";

const DynamicPage = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
    cache: "no-store",
  });

  return (
    <div>
      <h2>Dynamic page</h2>
      <Link href="/app">Back home</Link>
    </div>
  );
};

export default DynamicPage;
