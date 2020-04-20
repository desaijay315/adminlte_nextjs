import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html lang="en">
       <Head>
        <head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>AdminLTE 3 | Dashboard</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/static/plugins/fontawesome-free/css/all.min.css" />
          <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
          <link rel="stylesheet" href="/static/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
          <link rel="stylesheet" href="/static/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
          <link rel="stylesheet" href="/static/plugins/jqvmap/jqvmap.min.css" />
          <link rel="stylesheet" href="/static/dist/css/adminlte.min.css" />
          <link rel="stylesheet" href="/static/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
          <link rel="stylesheet" href="/static/plugins/daterangepicker/daterangepicker.css" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
          </head>
        </Head>
        <body class="hold-transition sidebar-mini layout-fixed">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument