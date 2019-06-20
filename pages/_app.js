import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className='layout'>
        <style jsx global>
          {`
            body { 
              margin: 0;
              font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
              font-weight: 300;
            }
            a {
              text-decoration: none;
            }
            div.wrapper {
              max-width:1200px;
              position: relative;
              margin: 0 auto;
              padding: 0 5px;
            }
            h1, h2, h3, h4, h5, h6, p, ul {
              margin: 5px 0;
            }
            h1 {
              line-height:48px;
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
