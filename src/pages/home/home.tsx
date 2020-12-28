import * as React from 'react';
import Layout from 'src/components/layout';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Layout documentTitle={t('Home page')} title={t('Home')}>
      <div>Home page</div>
    </Layout>
  );
};

export default HomePage;
