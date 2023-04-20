import Layout from '@common/Layout/Layout';
import Home from 'components/page/Home/Home';

const home = (props) => {

  return (
    <Layout>
      <Home {...props} />
    </Layout>
  );
};

home.getInitialProps = async () => {
  
}

export default home;
