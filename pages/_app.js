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
          `}
        </style>
        <Header />
        <div className="wrapper">
          {children}
        </div>
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
