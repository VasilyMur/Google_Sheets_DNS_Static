import api from '../api';
import WebsiteFeature from '../components/Features/WebsiteFeature';
import { URL_API_GET_WEBSITE } from '../constants';

const Index = (props) => <WebsiteFeature {...props} />;

export async function getServerSideProps({ req }) {
  console.log('req.host >> ', req.hostname);
  const response = await api.get(`${URL_API_GET_WEBSITE}/${req.hostname}`);

  if (!response.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: response.data,
      host: req.hostname,
      // user,
    }, // will be passed to the page component as props
  };
}

export default Index;
