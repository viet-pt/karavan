import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { Notification } from '../Notification/Notification';
import { fetchUser } from 'stores/action/userAction';
import Cookies from 'universal-cookie';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { UserService } from 'api/UserService';
import useTrans from 'utils/useTrans';
import { AppDispatch } from 'stores';
import Link from 'next/link';
import md5Hex from 'md5-hex';

const cookies = new Cookies();
const dd = 3 * 86400 * 1000;
const d = new Date();

const SignIn = ({ closeModal }: any) => {
  const dispatch: AppDispatch = useDispatch();
  const i18n = useTrans();

  const rules = useMemo(() => (
    [{ required: true, message: i18n.IDS_FIELD_REQUIRED }]
  ), [])

  const onSignIn = (values) => {
    const data = {
      email: values.email?.toLowerCase(),
      password: md5Hex(values.password)
    };

    UserService.login(data, res => {
      if (res.errorCode === 0) {
        d.setTime(d.getTime() + dd);
        cookies.set('token', res.token, { path: '/', expires: d });
        localStorage.setItem('email', values.email);
        dispatch(fetchUser());
        Notification.success(i18n.IDS_LOGIN_SUCCESS);
        closeModal();
      } else {
        Notification.error(res.message || i18n.IDS_SYSTEM_ERROR);
      }
    }, (err) => {
      if (err.errorCode === 2) {
        Notification.error(i18n.IDS_PASSWORD_INVALID)
      } else if (err.errorCode === 3) {
        Notification.error(i18n.IDS_VERIFY_EMAIL_ERROR)
      } else {
        Notification.error(err.message || i18n.IDS_SYSTEM_ERROR);
      }
    });
  }

  return (
    <div>
      <Form onFinish={onSignIn}>
        <label className='medium'>{i18n.IDS_EMAIL}</label>
        <Form.Item name='email' rules={rules}>
          <Input
            placeholder={i18n.IDS_EMAIL}
            autoComplete="off"
            className='rounded-md border-blue-300 mt-1 outline-none h-9 text-sm'
          />
        </Form.Item>
        <label className='medium'>{i18n.IDS_PASSWORD}</label>
        <Form.Item name='password' rules={rules} className='mb-2'>
          <Input.Password
            placeholder={i18n.IDS_PASSWORD}
            autoComplete="off"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            className='rounded-md border-blue-300 mt-1 outline-none h-9 text-sm'
          />
        </Form.Item>
        <div className='flex justify-end text-second-blue'>
          <Link href='/reset-password' className='hover:underline'>
            {i18n.IDS_FORGOT_PASSWORD}
          </Link>
        </div>
        <Form.Item>
          <Button className='h-10 rounded-lg px-6 mt-6 bg-primary-green text-white medium uppercase mx-auto block w-1/2' size='large' htmlType="submit">
            {i18n.IDS_LOGIN}</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default React.memo(SignIn);
