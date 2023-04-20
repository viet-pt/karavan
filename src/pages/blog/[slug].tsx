import React from 'react';
import Contact from 'components/page/Contact/Contact';
import Layout from '@common/Layout/Layout';

const blog = (props) => {
  return (
    <Layout>
      <Contact {...props} />
    </Layout>
  )
}

blog.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default blog;