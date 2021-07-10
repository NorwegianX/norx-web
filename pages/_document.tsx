import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const gtag = 'GTM-MSGT5BZ';
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/norx.ico" type="image/x-icon" />

          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.15.3/css/duotone.css"
            integrity="sha384-nuPd13VLdsw5iBtqelv9tQ6l6+CteSUrmoT5enzHVJodx7WdNUYXNwgVpA7bgsXn"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.15.3/css/fontawesome.css"
            integrity="sha384-DHjwMcq12OEB4DQ+qulZDDroaXZqm7h9V6AjiP/RuUF8NhxUa8x6UWdv1AeZS+90"
            crossOrigin="anonymous"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',${gtag});`,
            }}
          ></script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtag}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
