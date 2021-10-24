import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

const Document = () => {
  return (
    <Html>
      <Head>
        <ColorModeScript initialColorMode="dark" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6Q70MBNQHR" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6Q70MBNQHR');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
