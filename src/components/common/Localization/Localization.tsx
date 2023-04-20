import React, { useEffect, useMemo, useState } from 'react';
import { Dropdown, MenuProps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';
import useTrans from 'utils/useTrans';
import { useRouter } from 'next/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ILang {
  value: string;
  lable: string;
  icon: string;
}

interface IProps {
  isMobile?: boolean
}

const LIST_LANGUAGE: ILang[] = [
  { value: 'vi', lable: 'IDS_LANGUAGE_VN', icon: '/imgs/flag-vn.png' },
  { value: 'en', lable: 'IDS_LANGUAGE_US', icon: '/imgs/flag-uk.png' },
]

const Localization = ({ isMobile }: IProps) => {
  const [lang, setLang] = useState({ value: 'vi', lable: 'IDS_LANGUAGE_VN', icon: '/imgs/flag-vn.png' });
  const i18n = useTrans();
  const router = useRouter();

  useEffect(() => {
    const lng = localStorage.getItem('i18nextLng');
    const lngCurrent: any = LIST_LANGUAGE.find(item => item.value === lng);
    if (lngCurrent) {
      setLang(lngCurrent);
    }
  }, [])

  const changeLanguage = ({ key }) => {
    router.push('/', '/', { locale: key });
    const item: any = LIST_LANGUAGE.find(lang => lang.value === key);
    setLang(item);
  }

  const items: MenuProps['items'] = useMemo(() => (
    [
      {
        key: 'vi',
        label: (
          <div className='flex items-center space-x-3 py-2'>
            <img alt='flag' src='/imgs/flag-vn.png' className='w-4 h-4 rounded-full' />
            <span>{i18n.IDS_LANGUAGE_VN}</span>
          </div>
        )
      },
      {
        key: 'en',
        label: (
          <div className='flex items-center space-x-3 py-2'>
            <img alt='flag' src='/imgs/flag-uk.png' className='w-4 h-4 rounded-full' />
            <span>{i18n.IDS_LANGUAGE_US}</span>
          </div>
        )
      },
    ]
  ), [])

  return (
    <Dropdown menu={{ items, onClick: changeLanguage }} trigger={['click']}>
      <a onClick={e => e.preventDefault()} className={!isMobile ? 'hover:text-white' : ''}>
        <div className='flex items-center space-x-3 pointer'>
          <img alt='flag' src={lang.icon} className='w-4 h-4 rounded-full' />
          <span className='medium' style={{ fontSize: '15px' }}>{i18n[lang.lable]}</span>
          <FontAwesomeIcon
            color={isMobile ? '#000' : "#fff"}
            icon={faChevronDown as IconProp}
            className="ml-2 w-3 h-auto"
          />
        </div>
      </a>
    </Dropdown>
  )
}

export default React.memo(Localization);
