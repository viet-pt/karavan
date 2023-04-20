import React, { useEffect, useMemo, useState } from 'react';
import { Button, Form, Modal } from 'antd';
import InputForm from '../InputForm/InputForm';
import { Notification } from '../Notification/Notification';
import SignIn from './SignIn';
import { UserService } from 'api/UserService';
import useTrans from 'utils/useTrans';
import md5Hex from 'md5-hex';

interface IRegister {
  isOpenModal: boolean;
  closeModal: Function;
  typeModal?: number;
}

const Register = ({ isOpenModal, closeModal, typeModal }: IRegister) => {
  const [type, setType] = useState(0);
  const i18n = useTrans();

  useEffect(() => {
    if (typeModal) {
      setType(typeModal);
    }
  }, [typeModal])

  const onRegister = (values) => {
    const data = {
      ...values,
      email: values.email?.toLowerCase(),
      password: md5Hex(values.password),
    }
    delete data.rePassword;

    UserService.register(data, res => {
      if (res.errorCode === 0) {
        Notification.success(i18n.IDS_REGISTER_SUCCESS);
        closeModal();
      } else {
        Notification.error(i18n.IDS_SYSTEM_ERROR);
      }
    }, (err) => {
      if (err?.errorCode === 2) {
        Notification.error(i18n.IDS_EMAIL_REGISTER_ERROR);
      } else {
        Notification.error(i18n.IDS_SYSTEM_ERROR);
      }
    });
  }

  const changeType = (value) => {
    if (value === type) return;
    setType(value);
  }

  const registerBox = useMemo(() => (
    <div className='mt-7'>
      <Form onFinish={onRegister}>
        <InputForm
          name="phoneNumber" isRequired isPhoneNumber
          placeholder={i18n.IDS_PHONE_NUMBER}
        />
        <InputForm
          name="email" isRequired isEmail
          placeholder={i18n.IDS_EMAIL}
        />
        <InputForm
          name="password" isRequired isPassword
          placeholder={i18n.IDS_PASSWORD}
        />
        <InputForm
          name="rePassword" isRequired isPassword
          fieldCallBack="password"
          placeholder={i18n.IDS_CONFIRM_PASSWORD}
        />
        <Form.Item>
          <Button className='h-10 rounded-lg px-6 bg-primary-green text-white medium uppercase mx-auto block w-1/2 mt-5'
            size='large' htmlType="submit">
            {i18n.IDS_SIGNUP}</Button>
        </Form.Item>
      </Form>
    </div>
  ), [])

  const handleClose = () => {
    setType(typeModal || 0);
    closeModal();
  }

  return (
    <Modal
      open={isOpenModal}
      onOk={handleClose}
      onCancel={handleClose}
      className="modal-wrapper"
      footer={null}
    >
      <div className='py-2 lg:px-5'>
        <div className='grid grid-cols-2 medium mb-4 text-xl text-center uppercase'>
          <div className={`pointer ${type === 0 ? 'text-second-blue pb-3 border-b-3 border-solid border-second-blue' : 'text-gray-400'}`} onClick={() => changeType(0)}>
            {i18n.IDS_SIGNUP}</div>
          <div className={`pointer ${type === 1 ? 'text-second-blue pb-3 border-b-3 border-solid border-second-blue' : 'text-gray-400'}`} onClick={() => changeType(1)}>
            {i18n.IDS_LOGIN}</div>
        </div>

        {type === 0 && registerBox}
        {type === 1 &&
          <div className='mt-7'>
            <SignIn closeModal={handleClose} />
          </div>
        }
      </div>
    </Modal>
  )
}

export default React.memo(Register);
