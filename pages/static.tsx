import Link from "next/link";

const StaticPage = () => {
  return (
    <div>
      <h2>Static page</h2>
      <Link href="/">Back home</Link>
    </div>
  );
};

export const getStaticProps = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  return { props: {} };
};

export default StaticPage;
