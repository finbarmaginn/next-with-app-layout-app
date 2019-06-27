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
