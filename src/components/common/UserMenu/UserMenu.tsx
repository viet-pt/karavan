import React, { memo, useMemo } from 'react';
import { Dropdown, MenuProps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUserCircle } from '@fortawesome/fontawesome-free-solid';
import router from 'next/router';
import useTrans from 'utils/useTrans';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const UserMenu = ({ onLogout }) => {
  const i18n = useTrans();

  const onMenuClick = ({ key }) => {
    if (key === 'LOGOUT') {
      onLogout()
    } else {
      router.push('/tai-khoan');
    }
  }

  const items: MenuProps['items'] = useMemo(() => (
    [
      { key: 'ACCOUNT', label: i18n.IDS_ACCOUNT },
      { key: 'LOGOUT', label: i18n.IDS_LOGOUT },
    ]
  ), [])

  return (
    <Dropdown menu={{ items, onClick: onMenuClick }} trigger={['click']}>
      <div className='flex items-center lg:-mr-3 pointer'>
        <FontAwesomeIcon
          color="#fff"
          icon={faUserCircle as IconProp}
          className="w-7 h-auto"
        />
        <FontAwesomeIcon
          color="#fff"
          icon={faChevronDown as IconProp}
          className="ml-2 w-3 h-auto"
        />
      </div>
    </Dropdown>
  )
}

export default memo(UserMenu);
