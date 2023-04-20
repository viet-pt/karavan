import React from 'react';
import Unique from 'components/page/Unique/Unique';
import Layout from '@common/Layout/Layout';

const unique = (props) => {
  return (
    <Layout>
      <Unique {...props} />
    </Layout>
  )
}

unique.getInitialProps = async () => {
  
}

export default unique;