import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { useRouter } from 'next/router';

interface Iprogress {
  isLoading?: boolean;
}

const ProgressTurn = ({ isLoading }: Iprogress) => {
  const [loading, setLoading] = useState(false);
  const loadingRedux = useSelector((state: any) => state.progressReducer.loading);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoading(true);
    });

    router.events.on('routeChangeComplete', () => {
      setLoading(false);
    });

    router.events.on('routeChangeError', () => {
      setLoading(false);
    });
  }, []);


  if (!loading && !isLoading && loadingRedux <= 0) {
    return null;
  }

  return (
    <div className="progress-turn">
      <Spin size="large" />
    </div>
  )
}

export default React.memo(ProgressTurn);
