// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <style>
            {`
              body { 
                margin: 0;
                background-color: white;
              }
              a {
                text-decoration: none;
              }
              div.wrapper {
                max-width:960px;
                position: relative;
                margin: 0 auto;
                padding: 0 5px;
              }
              h1 {
                line-height:48px;
              }
              h1, h2, h3, h4, h5, h6, p, ul {
                margin: 5px 0;
              }
            `}
          </style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;