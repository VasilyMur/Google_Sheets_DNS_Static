import WebsiteSinglePageFeature from '../components/Features/WebsiteSinglePageFeature';
import { URL_API_GET_WEBSITE } from '../constants';
import api from '../api';

const SingleCardPage = (props) => <WebsiteSinglePageFeature {...props} />;

export async function getServerSideProps({ req, query }) {
  const { singleUrl } = query;
  console.log('getttiinnngggg single url >>>> ', singleUrl);
  console.log('req.host single >> ', req.hostname);

  if (!singleUrl) {
    return {
      notFound: true,
    };
  }

  const response = await api.get(`${URL_API_GET_WEBSITE}/${req.hostname}`);

  if (!response.data) {
    return {
      notFound: true,
    };
  }

  const cardPageData = response.data.cards.find(
    (res) => res.link === singleUrl
  );

  if (!cardPageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      // data: productCard,
      data: cardPageData,
      // user,
    }, // will be passed to the page component as props
  };
}

export default SingleCardPage;
