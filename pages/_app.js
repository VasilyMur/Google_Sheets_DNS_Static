import App from 'next/app';
import Page from '../components/Page';
import CartProvider from '../components/Features/WebsiteFeatureThemeOne/CartProvider';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <CartProvider>
        <Page pathName={this.props.router.pathname}>
          <Component {...pageProps} />
        </Page>
      </CartProvider>
    );
  }
}

export default MyApp;
