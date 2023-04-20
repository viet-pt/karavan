import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { CommonService } from 'api/CommonService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';
import useTrans from 'utils/useTrans';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { REGEX_EMAIL, REGEX_PHONE_NUMBER } from 'utils/regex';

const InputForm = ({ title, placeholder, customInput, customClass, name, isRequired, helpText, isPhoneNumber, onlyNumber,
  isEmail, isPassword, rules, fieldCallBack, ...props }: any) => {
  const [visible, setVisible] = useState(true);
  const i18n = useTrans();

  let convertedRules = [...rules];
  let dependencies: any = [];

  if (isRequired) {
    convertedRules = [
      {
        required: true,
        message: i18n.IDS_FIELD_REQUIRED,
      },
      ...convertedRules,
    ]
  }
  if (isPhoneNumber) {
    convertedRules = [
      {
        pattern: REGEX_PHONE_NUMBER,
        message: i18n.IDS_PHONE_NUMBER_INCORRECT,
      },
      ...convertedRules,
    ]
  }

  if (isEmail) {
    convertedRules = [
      {
        pattern: REGEX_EMAIL,
        message: i18n.IDS_EMAIL_INCORRECT,
      },
      ...convertedRules,
    ]
  }

  if (isPassword) {
    convertedRules = [
      {
        min: 6,
        message: i18n.IDS_MIN_LENGTH_PASSWORD,
      },
      ...convertedRules,
    ]
  }

  if (fieldCallBack) {
    convertedRules = [
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue(fieldCallBack) === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error(i18n.IDS_REPASSWORD_NOT_MATCH));
        },
      }),
      ...convertedRules,
    ]

    dependencies = [fieldCallBack, ...dependencies]
  }

  return (
    <>
      {title && <p className='mb-2'>{title}</p>}
      <Form.Item className={`input-common ${customClass || ''}`}>
        <Form.Item name={name} noStyle rules={convertedRules} dependencies={dependencies}>
          <Input
            placeholder="&nbsp;"
            autoComplete='off'
            className={`${customInput || ''} custom-input`}
            type={(isPassword && visible) ? 'password' : isPhoneNumber || onlyNumber ? 'number' : 'text'}
            {...props}
          />
        </Form.Item>
        <span className="input-common__placeholder">{placeholder}</span>
        <p className="input-common__help-text pl-4 pt-1 mb-0">{helpText}</p>
        {isPassword &&
          <div className="absolute inset-y-0 right-4 pr-3 flex items-center text-sm leading-5">
            <FontAwesomeIcon
              icon={(visible ? faEye : faEyeSlash) as IconProp}
              className="w-4 h-auto"
              color='#c0c4cc'
              onClick={() => setVisible(!visible)}
            />
          </div>
        }
      </Form.Item>
    </>
  );
}

InputForm.defaultProps = {
  rules: [],
};

export default React.memo(InputForm);