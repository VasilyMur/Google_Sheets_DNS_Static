import WebsiteCartFeature from '../components/Features/WebsiteFeatureThemeOne/WebsiteCartFeature';
import { URL_API_GET_WEBSITE } from '../constants';
import { CartConsumer } from '../components/Features/WebsiteFeatureThemeOne/CartProvider';
import { uniqueProductIdsFromCards } from '../components/Features/WebsiteFeatureThemeOne/helpers';
import api from '../api';

// const WebsiteCart = (props) => <WebsiteCartFeature {...props} />;
const Cart = (props) => (
  <CartConsumer>
    {({ addProduct, removeProduct, products }) => (
      <WebsiteCartFeature
        {...props}
        addProduct={addProduct}
        removeProduct={removeProduct}
        products={products}
      />
    )}
  </CartConsumer>
);

export const getStaticProps = async () => {
  const response = await api.get(`${URL_API_GET_WEBSITE}`);
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

  // Some cards dont't have an ID
  const missingId = cards.some((res) => !res.id);
  if (missingId) {
    return {
      notFound: true,
    };
  }

  const cardsMappedByIds = uniqueProductIdsFromCards(cards);

  return {
    props: {
      data,
      cardsMappedByIds,
    }, // will be passed to the page component as props
  };
};

export default Cart;
