import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1>Pages directory</h1>
      <Component {...pageProps} />
    </div>
  );
}
