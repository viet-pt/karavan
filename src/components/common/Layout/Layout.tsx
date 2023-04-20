import { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollTop from '../ScrollTop/ScrollTop';
import ProgressTurn from '../ProgressTurn/ProgressTurn';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import useTrans from 'utils/useTrans';
import { PUBLIC_PATHS } from 'utils/constants';
import { AppConfig } from 'utils/AppConfig';

type ILayoutProps = {
  title?: string;
  children: ReactNode;
  video?: string;
  image?: string;
  description?: string;
  canonical?: string
};

export default function Layout({ title, children, video, image, description, canonical }: ILayoutProps) {
  const router = useRouter();
  const authorized = useSelector((state: any) => state.userReducer.authorized);
  const i18n = useTrans();

  useEffect(() => {
    if (!authorized && !PUBLIC_PATHS.includes(router.pathname)) {
      // router.push('/');
    }
  }, [authorized]);

  return (
    <div className="app-wrapper">
      <Head>
        <meta charSet="utf-8" />
        <title>{title || i18n.IDS_WEB_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#59B858" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content={title || i18n.IDS_WEB_TITLE} />
        <meta property="title" content={title || i18n.IDS_WEB_TITLE} />
        <meta property="og:site_name" content="Explorations company" />
        <meta property="site_name" content="Explorations company" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:type" content="website" />
        <meta property="image" content={image || "/imgs/logo.svg"} />
        <meta property="og:image" content={image || "/imgs/logo.svg"} />
        <meta name="keywords" content="" />
        <meta name="generator" content="Explorations company" />
        <meta property="og:description" content={description || AppConfig.description} />
        <meta property="description" content={description || AppConfig.description} />
        <link rel="icon" type="image/png" href="/imgs/logo-green.svg" />
        {!!video && <meta property='og:video' content={video} />}
        {!!video && <meta property='video' content={video} />}

        <NextSeo
          title={title}
          description={description || AppConfig.description}
          canonical={canonical}
          openGraph={{
            title: title,
            url: canonical,
            description: AppConfig.description,
            locale: AppConfig.locale,
            site_name: AppConfig.site_name,
          }}
        />
      </Head>

      <main className='relative'>
        <Header />
        <div className="text-sm" style={{ backgroundColor: '#fafbff' }}>
          {children}
        </div>
        <Footer />
      </main>
      <ProgressTurn />
      <ScrollTop />
    </div>
  )
}
