import Link from "next/link";

const DynamicPage = () => {
  return (
    <div>
      <h2>Dynamic page</h2>
      <Link href="/">Back home</Link>
    </div>
  );
};

export const getServerSideProps = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  return { props: {} };
};

export default DynamicPage;
