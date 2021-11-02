import api from '../api';
import WebsiteFeatureThemeOne from '../components/Features/WebsiteFeatureThemeOne';
import { CartConsumer } from '../components/Features/WebsiteFeatureThemeOne/CartProvider';
import { URL_API_GET_WEBSITE } from '../constants';

const Index = (props) => (
  <CartConsumer>
    {({ addProduct, removeProduct, products }) => (
      <WebsiteFeatureThemeOne
        {...props}
        addProduct={addProduct}
        removeProduct={removeProduct}
        products={products}
      />
    )}
  </CartConsumer>
);

// export async function getServerSideProps({ req }) {
//   const response = await api.get(`${URL_API_GET_WEBSITE}`);
//   const { data } = response;

//   if (!data || !Object.keys(data).length) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       data: response.data,
//       // user,
//     }, // will be passed to the page component as props
//   };
// }

export const getStaticProps = async (context) => {
  const response = await api.get(`${URL_API_GET_WEBSITE}`);
  const { data } = response;

  if (!data || !Object.keys(data).length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      currentPage: 1,
    },
  };
};

export default Index;
