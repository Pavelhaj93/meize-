import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon/kelimek.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <meta property="og:image" content="/icons/kelimek.png " />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />

        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Mulish:wght@400;900&family=Work+Sans:wght@800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
