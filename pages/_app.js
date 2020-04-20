import React, {Fragment} from 'react';
import App from 'next/app';

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import SideBar from '../components/shared/SideBar';

// Stylings
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/main.scss';

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <div className="wrapper">
            <Header />
            <SideBar />
              <Component {...pageProps} />
            <Footer />
            {/* <script data-cfasync="false" src="/static/cdn-cgi/script/5c5dd728/cloudflare-static/email-decode.min.js"></script> */}
                {/* <!-- jQuery --> */}
          <script src="/static/plugins/jquery/jquery.min.js"></script>
          {/* <!-- jQuery UI 1.11.4 --> */}
          <script src="/static/plugins/jquery-ui/jquery-ui.min.js"></script>
          {/* <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip --> */}
          <script>
            {/* $.widget.bridge('uibutton', $.ui.button) */}
          </script>
          {/* <!-- Bootstrap 4 --> */}
          <script src="/static/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
          {/* <!-- ChartJS --> */}
          {/* <!-- overlayScrollbars --> */}
          <script src="/static/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
          {/* <!-- AdminLTE App --> */}
          <script src="/static/dist/js/adminlte.js"></script>
          {/* <!-- AdminLTE dashboard demo (This is only for demo purposes) --> */}
          <script src="/static/dist/js/pages/dashboard.js"></script>
          {/* <!-- AdminLTE for demo purposes --> */}
          <script src="/static/dist/js/demo.js"></script>
          </div>
      </Fragment>
    )
  }
}
