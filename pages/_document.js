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
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <style jsx global>
            {`
          html {
            overflow-y: scroll
          }

          /* latin-ext */

          @font-face {
            font-family: 'Niconne';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: local('Niconne'), local('Niconne-Regular'), url(https://fonts.gstatic.com/s/niconne/v8/w8gaH2QvRug1_rTfnQKn2W4O.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */

          @font-face {
            font-family: 'Niconne';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: local('Niconne'), local('Niconne-Regular'), url(https://fonts.gstatic.com/s/niconne/v8/w8gaH2QvRug1_rTfnQyn2Q.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* latin-ext */

          @font-face {
            font-family: 'Titillium Web';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: local('Titillium Web Regular'), local('TitilliumWeb-Regular'), url(https://fonts.gstatic.com/s/titilliumweb/v7/NaPecZTIAOhVxoMyOr9n_E7fdM3mDbRS.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */

          @font-face {
            font-family: 'Titillium Web';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: local('Titillium Web Regular'), local('TitilliumWeb-Regular'), url(https://fonts.gstatic.com/s/titilliumweb/v7/NaPecZTIAOhVxoMyOr9n_E7fdMPmDQ.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          body {
            margin: 0;
            font-family: "Titillium Web";
            font-weight: 300;
          }

          a {
            text-decoration: none;
          }

          div.wrapper {
            max-width: 1200px;
            position: relative;
            margin: 0 auto;
            padding: 0 10px;
          }

          h1, h2, h3, h4, h5, h6, p, ul {
            margin: 5px 0;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: "Niconne";
            font-size: 28px;
          }

          h1 {
            line-height: 48px;
            font-size: 36px;
          }

          #nprogress {
            pointer-events: none
          }

          #nprogress .bar {
            background: #29d;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #29d, 0 0 5px #29d;
            opacity: 1;
            -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px)
          }

          #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px
          }

          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;
            border: solid 2px transparent;
            border-top-color: #29d;
            border-left-color: #29d;
            border-radius: 50%;
            -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite
          }

          .nprogress-custom-parent {
            overflow: hidden;
            position: relative
          }

          .nprogress-custom-parent #nprogress .spinner, .nprogress-custom-parent #nprogress .bar {
            position: absolute
          }

          @-webkit-keyframes nprogress-spinner {
            0% {
              -webkit-transform: rotate(0deg)
            }
            100% {
              -webkit-transform: rotate(360deg)
            }
          }

          @keyframes nprogress-spinner {
            0% {
              transform: rotate(0deg)
            }
            100% {
              transform: rotate(360deg)
            }
          }
          `}
          </style>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
