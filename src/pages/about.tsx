import React from 'react';
import Contact from 'components/page/Contact/Contact';
import Layout from '@common/Layout/Layout';

const contact = (props) => {
  return (
    <Layout>
      <Contact {...props} />
    </Layout>
  )
}

contact.getInitialProps = async () => {
  
}

export default contact;