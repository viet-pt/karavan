import React from 'react';
import Layout from '@common/Layout/Layout';
import NotFoundPage from 'components/page/NotFoundPage/NotFoundPage';

const notfound = () => {
  return (
    <Layout title="404 - Page Not Found">
      <NotFoundPage />
    </Layout>
  )
}

export default notfound;
