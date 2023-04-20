import React from 'react';
import { notification } from 'antd';

const openNotificationWithIcon = function(type, title, description, confirmBtn, onClick) {

  const handleOnClickBtn = () => {
    onClick();
    notification.destroy();
  }

  const btn = (
    <span onClick={handleOnClickBtn}>{confirmBtn}</span>
  );

  const notice = notification[type]({
    message: title,
    description: description,
    btn: confirmBtn ? btn : '',
  });
  
  return (
    <>
      {notice}
    </>
  )
};

export const Notification = {
  success: function(title: string, description?: string, confirmBtn?: string, onClick?: Function) {
    openNotificationWithIcon('success', title, description, confirmBtn, onClick);
  },
  info: function(title: string, description?: string, confirmBtn?: string, onClick?: Function) {
    openNotificationWithIcon('info', title, description, confirmBtn, onClick);
  },
  warning: function(title: string, description?: string, confirmBtn?: string, onClick?: Function) {
    openNotificationWithIcon('warning', title, description, confirmBtn, onClick);
  },
  error: function(title: string, description?: string, confirmBtn?: string, onClick?: Function) {
    openNotificationWithIcon('error', title, description, confirmBtn, onClick);
  },
}

