import WebsiteSingleCategoryPageFeature from '../../components/Features/WebsiteFeatureThemeOne/WebsiteSingleCategoryPageFeature';
import api from '../../api';
import { URL_API_GET_WEBSITE } from '../../constants';
import { CartConsumer } from '../../components/Features/WebsiteFeatureThemeOne/CartProvider';
import { uniqueCategorySlugsFromCards } from '../../components/Features/WebsiteFeatureThemeOne/helpers';

const Category = (props) => (
  <CartConsumer>
    {({ addProduct, removeProduct, products }) => (
      <WebsiteSingleCategoryPageFeature
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
  console.log(' response static paths category >>>> ', response);
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

  const categorySlugsMapped = uniqueCategorySlugsFromCards(cards);
  const slugs = Object.values(categorySlugsMapped).map((res) => res.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const response = await api.get(`${URL_API_GET_WEBSITE}`);
  console.log('response static props category >>> ', response);
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

  const allProductsWithCurrentFilter = cards.filter((singleCard) =>
    singleCard.category.some((res) => res.slug === slug)
  );
  const categorySlugsMapped = uniqueCategorySlugsFromCards(cards);
  const item = categorySlugsMapped[slug];

  if (!item || !Object.keys(item).length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      dataCategory: allProductsWithCurrentFilter,
      currentCategory: item,
    },
  };
};

export default Category;
