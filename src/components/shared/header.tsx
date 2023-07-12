import Head from "next/head";

export const Header: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <Head>
      <title>{`${title ? title + " | " : ""}SpeakEz`}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta
        property="og:title"
        content={`${title ? title + " | " : ""}SpeakEz`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://speakez.vercel.app" />
      <meta property="og:description" content="Catchphrase" />
      <meta name="description" content="Catchphrase" />
    </Head>
  );
};
