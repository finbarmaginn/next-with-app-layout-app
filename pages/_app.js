import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';
import NProgress from 'nprogress';
import Router from 'next/router';


NProgress.configure({
  showSpinner: false
})
Router.events.on('routeChangeStart', url => {
  NProgress.start();
})

Router.events.on('routeChangeComplete', url => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())


class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className='layout'>
        <style jsx global>
          {`
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
              font-family:"Titillium Web";
              //font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
              font-weight: 300;
            }
                        
            a {
              text-decoration: none;
            }
            div.wrapper {
              max-width:1200px;
              position: relative;
              margin: 0 auto;
              padding: 0 10px;
            }
            h1, h2, h3, h4, h5, h6, p, ul {
              margin: 5px 0;
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: "Niconne";
              font-size:28px;
            }
            h1 {
              line-height:48px;
              font-size: 36px;
            }
          `}
        </style>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default class MyApp extends App {
  componentDidMount() {
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
