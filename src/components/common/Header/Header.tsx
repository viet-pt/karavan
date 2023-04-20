import React, { memo, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { Dropdown, MenuProps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useTrans from 'utils/useTrans';
import Localization from '../Localization/Localization';
import { removeUser } from 'stores/action/userAction';
import { AppDispatch } from 'stores';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import OutsideClick from '@common/OutsideClick/OutsideClick';
import { faYoutube, faInstagram, faTwitter, faLinkedin, faFacebookF, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const cookies = new Cookies();

const Header = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuDestop, setOpenMenuDestop] = useState(false);
  const [isSSR, setIsSSR] = useState(true);

  const i18n = useTrans();
  const dispatch: AppDispatch = useDispatch();
  const authorized = useSelector((state: any) => state.userReducer.authorized);

  useEffect(() => {
    setIsSSR(false)
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fixedHeader]);

  const items: MenuProps['items'] = useMemo(() => (
    [
      { key: '/faq', label: i18n.IDS_FAQ },
    ]
  ), [])

  const handleScroll = () => {
    const sticky = document.documentElement.scrollTop;
    if (sticky > 300) {
      setFixedHeader(true);
    } else if (fixedHeader && sticky === 0) {
      setFixedHeader(false);
    }
  }

  const onLogout = () => {
    cookies.remove('token');
    dispatch(removeUser());
  }

  return (
    <header className='relative w-full'>
      <section className='hidden lg:block font-inter'>
        <div className={`header ${fixedHeader ? 'fixed-header' : ''}`}>
          <div className="container">
            <div className="flex-between pb-2 header__top">
              <div className='text-xs'>
                <span className='mr-5'>UK +44 (0)1367 850566</span>
                <span>USA 1-855-216-5040</span>
              </div>
              <div className='flex-between space-x-5 w-1/2 -translate-x-11'>
                <Link href="/" className='hover:no-underline'>
                  <img alt="home" src="/imgs/logo.svg" className='w-8 mx-auto mb-2' />
                </Link>
                <Link href="/">Enquire</Link>
                <Link href="/">Impact</Link>
                <Link href="/">Destinations</Link>
                <Link href="/unique">Karavan</Link>
                <div className={`flex items-center translate-x-11 ${openMenuDestop ? 'open-menu-lg' : ''}`}>
                  <FontAwesomeIcon icon={faSearch} color='#ffffff' className='w-6 py-2 pointer mr-9' />
                  <div className="header__close-btn w-7 pointer" onClick={() => setOpenMenuDestop(!openMenuDestop)}>
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden fixed top-0 z-10 w-full shadow-lg">
        <div className={`container header h-14 ${openMenu ? 'open-menu' : ''}`}>
          <div className='flex h-full justify-center items-center bg-primary-green'>
            <div className="header__close-btn w-1/12 absolute" onClick={() => setOpenMenu(!openMenu)}>
              <div />
            </div>
            <Link href="/">
              <img alt="home" src="/imgs/logo.svg" className='w-10 mx-auto' />
              <h3 className='mb-0 font-apoc text-xs text-center mt-1'>Explorations Company</h3>
            </Link>
          </div>

          <div className="header__menu">
            <div className='p-4 border-b text-base medium'><Link href="/">About</Link></div>
            <div className='p-4 border-b text-base medium'><Link href="/">Blog</Link></div>
            <div className='p-4 border-b text-base medium'><Link href="/">Unique</Link></div>
            <div className='p-4 border-b text-base medium'><Link href="/">Enquire</Link></div>
            <div className='p-4 border-b text-base medium'><Link href="/">Impact</Link></div>
            <div className='p-4 border-b text-base medium'><Link href="/">Contact</Link></div>
          </div>
        </div>
      </section>

      <OutsideClick onClickOutSide={() => setOpenMenuDestop(false)}>
        <div className={`menu-lg uppercase p-7 ${fixedHeader ? 'fixed' : ''} ${openMenuDestop ? 'open-menu-lg' : ''}`}>
          <ul>
            <li className='mb-6'><Link href="/">About</Link></li>
            <li className='mb-6'><Link href="/">Blog</Link></li>
            <li className='mb-6'><Link href="/">Unique</Link></li>
            <li className='mb-6'><Link href="/">Enquire</Link></li>
            <li className='mb-6'><Link href="/">Impact</Link></li>
            <li className='mb-6'><Link href="/">Contact</Link></li>
            <FontAwesomeIcon
              icon={faTimes} color='#000000'
              onClick={() => setOpenMenuDestop(false)}
              className='w-4 pointer mr-9 absolute top-3 -right-3'
            />
          </ul>

          <div className='flex space-x-5 mt-52'>
            <FontAwesomeIcon icon={faTwitter as IconProp} color='#000' className='h-4 hover-scale pointer' />
            <FontAwesomeIcon icon={faInstagram as IconProp} color='#000' className='h-4 hover-scale pointer' />
            <FontAwesomeIcon icon={faLinkedin as IconProp} color='#000' className='h-4 hover-scale pointer' />
            <FontAwesomeIcon icon={faFacebookF as IconProp} color='#000' className='h-4 hover-scale pointer' />
            <FontAwesomeIcon icon={faPinterest as IconProp} color='#000' className='h-4 hover-scale pointer' />
            <FontAwesomeIcon icon={faYoutube as IconProp} color='#000' className='h-4 hover-scale pointer' />
          </div>
        </div>
      </OutsideClick>
    </header>
  );
};

export default memo(Header);
