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

          <script
            defer
            src="https://pro.fontawesome.com/releases/v5.15.3/js/duotone.js"
            integrity="sha384-rutYU6OuFfIS5MmBE4wrpMhP633bNlRHqn/SFpcetMTKr+rsBxnoTd80mkHI7wum"
            crossOrigin="anonymous"
          ></script>
          <script
            defer
            src="https://pro.fontawesome.com/releases/v5.15.3/js/fontawesome.js"
            integrity="sha384-hwdDrjZFQbBwoFcHZZ/6e61XHiwY9csS0Wxi8i5jUgTurxmYITntaGLFYCssX7By"
            crossOrigin="anonymous"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',${gtag});`,
            }}
          ></script>
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="610bdab5-2858-4709-a719-a3cfa9bf1574"
            data-blockingmode="auto"
            type="text/javascript"
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
