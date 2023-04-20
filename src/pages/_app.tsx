
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useStore } from 'stores';

import 'styles/global.scss';
import 'styles/index.scss';
import "aos/dist/aos.css";
import 'swiper/swiper.css';
import 'antd/dist/reset.css';
// import 'antd/dist/antd.css';

const App = ({ Component, pageProps }: AppProps) => {
  const store = useStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps }
}

export default App;
