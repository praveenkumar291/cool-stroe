import { ServerStyleSheets } from "@material-ui/core";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();

  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    });
  };
  const intialProps = await Document.getInitialProps(ctx);

  return {

    ...intialProps,
    styles: [

      ...React.Children.toArray(intialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
