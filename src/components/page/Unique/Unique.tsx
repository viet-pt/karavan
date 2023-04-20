import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button, DatePicker, Form, Table, Input } from "antd";
import { UserService } from "api/UserService";
import Cookies from 'universal-cookie';
import InputForm from "@common/InputForm/InputForm";
import { Notification } from "@common/Notification/Notification";
import { REGEX_NUMBER } from "utils/regex";
import { RULE_REQUIRE } from "utils/constants";
import { CSVLink } from "react-csv";
import moment from 'moment';

const FORMAT_DATE = 'DD/MM/YYYY';

// const fromDate = moment().subtract(3, "days").format(FORMAT_DATE);
// const toDate = moment().subtract(3, "days").format(FORMAT_DATE);

const headerExel = [
  { label: 'STT', key: 'index' },
  { label: 'Số điện thoại', key: 'receiverId' },
  { label: 'Nội dung thông báo', key: 'content' },
]

const { TextArea } = Input;
const cookies = new Cookies();
const dd = 90 * 86400 * 1000;
const d = new Date();

const Unique = () => {
  const [dataList, setDataList] = useState([]);
  const [phoneList, setPhoneList] = useState([]);
  const [phoneErr, setPhoneErr] = useState([]);
  const [valueArea, setValueArea] = useState('');

  const tempList: any = useRef([]);
  const tempErr: any = useRef([]);
  const totalItem = useRef(0);
  const count = useRef(0);

  useEffect(() => {

  }, [])

  const columns = useMemo(() => (
    [
      {
        title: 'STT',
        dataIndex: 'index',
        width: '5%',
        render: (row, value, index) => index + 1
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'receiverId',
      },
      {
        title: 'Nội dung thông báo',
        dataIndex: 'content',
      },
    ]
  ), [])

  const handleSubmit = (values) => {
    d.setTime(d.getTime() + dd);
    cookies.set('token', values.token, { path: '/', expires: d });
    Notification.success('Save token thành công!');
  };

  const getUserMessage = (params: any) => {
    UserService.getUserMessage({ params }, res => {
      count.current++;
      if (res.code === 0 && res.data?.messages?.length) {
        let dataTable = res.data.messages.filter(item => item.content.includes('C90APR23') || item.content.includes('C45APR23'));
        if (dataTable.length) {
          dataTable = [...tempList.current, ...dataTable];
          tempList.current = dataTable;
        }
      }
      if (count.current === totalItem.current) {
        setDataList(tempList.current);
      }
    }, () => {
      totalItem.current--;
      tempErr.current.push(params.keyword);
      if (count.current === totalItem.current) {
        setPhoneErr(tempErr.current);
      }
    })
  }

  const onSearch = (values) => {
    if (!phoneList.length) return;

    const { time } = values;
    let from_time = '', to_time = '';
    if (time) {
      from_time = time[0].subtract(1, 'days').unix();
      to_time = time[1].unix();
    } else {
      from_time = '';
      to_time = '';
      return;
    }

    tempList.current = [];
    tempErr.current = [];
    totalItem.current = phoneList.length;
    count.current = 0;

    phoneList.forEach(keyword => {
      const data = {
        fromTime: from_time,
        toTime: to_time,
        keyword
      }
      getUserMessage(data);
    })
  }

  const convertText = (e: any) => {
    let { value } = e.target;
    value = value.split('\n');

    const arr: any = [];
    value.forEach((item: string) => {
      let newItem = item.trim().replace(/'/g, '').replace(/"/g, '');
      if (newItem && REGEX_NUMBER.test(newItem) && !arr.includes(newItem)) {
        arr.push(newItem);
      }
    });
    setPhoneList(arr);
    setPhoneErr([]);
  }

  const resetData = () => {
    setDataList([]);
    setPhoneList([]);
    setPhoneErr([]);
    tempList.current = [];
    tempErr.current = [];
    totalItem.current = 0;
    count.current = 0;
    setValueArea('');
  }

  const changeArea = (e) => {
    let { value } = e.target;
    setValueArea(value);
  }

  return (
    <div className="min-h-screen bg-primary-black px-4 pt-32 pb-44">
      <div className='container'>
        <Form name="basic" className="w-1/3 space-x-5 flex items-center" onFinish={handleSubmit}>
          <InputForm
            isRequired customClass="mb-0 w-2/3"
            name="token"
            placeholder="Token..."
          />
          <Button htmlType="submit" className="group py-2 px-8 h-11 rounded-md mb-0 border-indigo-600
            medium text-white bg-indigo-600" >Save token</Button>
        </Form>

        <div className="mt-12 text-center">
          <div className="grid grid-cols-3 gap-20">
            <TextArea
              rows={15}
              onBlur={convertText}
              value={valueArea}
              onChange={changeArea}
            />
            <div className="col-span-2 flex space-x-16">
              <ul className="list-disc list-outside text-left text-white relative">
                {phoneList.map(item => (
                  <li className="mb-1">{item}</li>
                ))}
                <p className='mr-6 medium text-white absolute -top-8 left-7 text-base'>({phoneList.length})</p>
              </ul>
              <ul className="list-disc list-outside text-left text-red-500">
                {phoneErr.map(item => (
                  <li className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <Form onFinish={onSearch} className='flex items-center space-x-10 mt-8'>
            <Form.Item name='time' rules={RULE_REQUIRE} className="mb-0">
              <DatePicker.RangePicker
                className='h-9 rounded'
                format="DD/MM/YYYY"
                placeholder={['Từ ngày', 'Đến ngày']}
              />
            </Form.Item>
            <Button type="primary" className='h-9 rounded bg-primary-green px-12' size='large' htmlType="submit">Tìm kiếm</Button>
            <CSVLink data={dataList} headers={headerExel} filename={`report(${moment().format('DD-MM-YYYY HH:mm')}).csv`}>
              <Button className='bg-primary-orange px-8 h-9 rounded' type='primary'>
                Xuất exel</Button>
            </CSVLink>
            <Button className='bg-gray-300 px-8 h-9 rounded text-black' type='primary' onClick={resetData}>
              RESET</Button>
          </Form>
          <Table
            className="w-3/4 mt-10"
            columns={columns}
            dataSource={dataList}
            pagination={false}
          />
        </div>
      </div>

    </div>
  );
};

export default React.memo(Unique);
