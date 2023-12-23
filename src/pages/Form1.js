import React, { Component } from 'react';
import { Button, Form, Input, Modal } from 'antd';
const FormItem = Form.Item;
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      tableData: [],
    };
  }
  btn = () => {
    // this.setState({
    //   visible: true,
    // });

    const data = {
      // paramJson: {
      //   password: '123456',
      //   port: '24',
      //   addr: '192.168.0.1',
      //   userName: 'admin',
      // },
      // formContent:  '[{"label":"连接地址","defaultValue":"192.168.0.1","field":"addr","type":"string","required":"true"},{"label":"端口号","defaultValue":"21","field":"port","type":"string","required":"true"},{"label":"用户名","defaultValue":"user","field":"userName","type":"string","required":"true"},{"label":"密码","defaultValue":"password","field":"password","type":"string","required":"true"}]',

      paramJson: {
        password: '123456',
        port: '24',
        addr: '192.168.0.1',
        userName: 'admin',
      },
      formContent:
        '[{"label":"连接地址","defaultValue":"192.16\
8.0.1","field":"addr","type":"string","required":"true"},{"label":"端口号","defaultValue":"21","field":"port","type":"string","required":"true"},{"label":"用户名","defaultValue":"user","field":"userName","type":"string","required":"true"},{"label":"密码","defaultValue":"password","field":"password","type":"string","required":"true"}]',
    };

    const tableData = JSON.parse(data.formContent);
    this.setState({
      visible: true,
      tableData
    });

    //   const data = {

    //     paramJson: {
    //       password: '123456',
    //       port: '24',
    //       addr: '192.168.0.1',
    //       userName: 'admin',
    //     },
    //     formContent:
    //       '[{"label":"连接地址","defaultValue":"192.168.0.1","field":"addr","type":"stri\
    //     ng","required":"true"},{"label":"端口号","defaultValue":"21","field":"po\
    //     rt","type":"string","required":"true"},{"label":"用户名","defau\
    //     ltValue":"user","field":"userName","type":"string","required":"true"},{"lab\
    //     el":"密码","defaultValue":"password","field":"password","type":"string","required":"true"}]',
    //   };
  };
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  // show=()=>{
  //  return this.data1.map(d=>(
  //   // console.log(d),
  //     <Form.Item
  //         name={d.label}
  //         label={d.label}
  //         rules={[{required:d.required }]}>
  //         <Input type="textarea" />
  //     </Form.Item>
  //  ))
  // }
  renderForm = () => {
    const { tableData } = this.state;
    console.log('1',tableData);
    const formData = tableData.map((item, index) => (
      <FormItem
        name={item.label}
        label={item.label}
        rules={[{ required: item.required }]}
        key={index}
        initialValue={item.defaultValue}
      >
        <Input type="textarea"/>
      </FormItem>
    ));
    return formData;
  };
  // renderForm = this.data1.map((d) => (
  //   <Form.Item
  //     name={d.label}
  //     label={d.label}
  //     rules={[{ required: d.required }]}
  //   >
  //     <Input type="textarea" defaultValue={d.defaultValue} />
  //   </Form.Item>
  // ));

  render() {
    const { visible } = this.state;
    console.log(11111);
    return (
      <div>
        <Button style={{ margin: 15 }} type="primary" onClick={this.btn}>
          自动生成表单1
        </Button>
        <Modal
          title="自动生成表单1"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
            {/* {this.show} */}
            {/* {this.data1} */}
            {this.renderForm}
          </Form>
        </Modal>
      </div>
    );
  }
}
