import Link from "next/link";

const StaticPage = () => {
  // await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
  //   cache: "force-cache",
  // });

  return (
    <div>
      <h2>Static page</h2>
      <Link href="/app">Back home</Link>
    </div>
  );
};

export default StaticPage;
