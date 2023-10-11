import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon-32x32.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
