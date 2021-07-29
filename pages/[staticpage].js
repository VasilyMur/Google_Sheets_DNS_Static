import WebsiteStaticPageFeature from '../components/Features/WebsiteFeatureThemeOne/WebsiteStaticPageFeature';
import api from '../api';
import { URL_API_GET_WEBSITE } from '../constants';
import { CartConsumer } from '../components/Features/WebsiteFeatureThemeOne/CartProvider';

const Static = (props) => (
  <CartConsumer>
    {({ addProduct, removeProduct, products }) => (
      <WebsiteStaticPageFeature
        {...props}
        addProduct={addProduct}
        removeProduct={removeProduct}
        products={products}
      />
    )}
  </CartConsumer>
);

export const getStaticPaths = async () => {
  const response = await api.get(`${URL_API_GET_WEBSITE}`);
  const { data } = response;

  if (!data || !Object.keys(data).length) {
    return {
      notFound: true,
    };
  }

  const { pages } = data;

  if (!pages || !pages.length) {
    return {
      notFound: true,
    };
  }

  const slugs = pages.map((res) => res.url);
  const paths = slugs.map((slug) => ({ params: { staticpage: slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { staticpage } }) => {
  const response = await api.get(`${URL_API_GET_WEBSITE}`);
  const { data } = response;

  if (!data || !Object.keys(data).length) {
    return {
      notFound: true,
    };
  }

  const { pages } = data;

  if (!pages || !pages.length) {
    return {
      notFound: true,
    };
  }

  const item = pages.find((res) => res.url === staticpage);

  if (!item || !Object.keys(item).length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      dataPage: item,
    },
  };
};

export default Static;
