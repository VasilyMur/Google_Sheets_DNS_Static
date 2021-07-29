import WebsiteSinglePageFeature from '../../components/Features/WebsiteFeatureThemeOne/WebsiteSinglePageFeature';
import api from '../../api';
import { URL_API_GET_WEBSITE } from '../../constants';
import { CartConsumer } from '../../components/Features/WebsiteFeatureThemeOne/CartProvider';

const Item = (props) => (
  <CartConsumer>
    {({ addProduct, removeProduct, products }) => (
      <WebsiteSinglePageFeature
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
  console.log('item getstatic PATHS response >>> ', response);
  const { data } = response;

  if (!data || !Object.keys(data).length) {
    return {
      notFound: true,
    };
  }

  const { cards } = data;

  if (!cards || !cards.length) {
    return {
      notFound: true,
    };
  }

  const slugs = cards
    .filter((card) => !card.link.includes('http'))
    .map((res) => res.link);
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const response = await api.get(`${URL_API_GET_WEBSITE}`);
  console.log('item getstaticProps response >>> ', response);
  const { data } = response;

  if (!data || !Object.keys(data).length) {
    return {
      notFound: true,
    };
  }

  const { cards } = data;

  if (!cards || !cards.length) {
    return {
      notFound: true,
    };
  }

  const item = cards.find((res) => res.link === slug);

  if (!item || !Object.keys(item).length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      dataProduct: item,
    },
  };
};

export default Item;
