import React, { Component } from 'react';
import moment from 'moment';
import { Button, Modal, Form,Input ,TimePicker} from 'antd';
const FormItem = Form.Item;
export default class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      formData:[]
    };
  }
  renderForm=()=>{
    console.log(1);
    const {formData}=this.state
    console.log(formData);
    return formData.map((item,index)=>{
      switch (item.dataType) {
        case 'String':
          return ( 
            <FormItem 
              name={item.name}
              label={item.name}
              rules={[{ required: item.enable }]}
              key={index}
              initialValue={item.sampleValue}
              help={'请输入数字'}
            >
            <Input type="textarea" />
          </FormItem>)
        case 'Date':
          return ( 
            <FormItem 
              name={item.name}
              label={item.name}
              rules={[{ required: item.enable }]}
              key={index}
              // initialValue={moment(item.sampleValue, 'DD/MM/YYYY')}
            >
             <TimePicker format={'DD/MM/YYYY'}/>
          </FormItem>)
        default:
          break;
      }
    })
   
  }
  showForm = () => {

    const data={
      "type": "Australia Birth Certificate",
      "countryCode": "AU",
      "currentData": {
          "firstName": "GuoRong",
          "lastName": "XU",
          "gender": "Male",
          "countryCode": "AU",
          "service": [
              "Australia Birth Certificate"
          ],
          "identityVariables": {
              "birthRegistrationState": "",
              "birthRegistrationDate": null,
              "birthRegistrationNo": ""
          },
          "clientReference": "Test_0001",
          "customerId": 661,
          "dateOfBirth": null,
          "consentObtained": {
              "Australia Birth Certificate": true
          },
          "middleName": null
      },
      "allData": false,
      "dataArray": [
          {
              "path": "./",
              "enable": true,
              "dataType": "String",
              "name": "firstName",
              "sampleValue": "Jane",
              "currentValue": "GuoRong"
          },
          {
              "path": "./",
              "enable": true,
              "dataType": "String",
              "name": "lastName",
              "sampleValue": "Citizen",
              "currentValue": "XU"
          },
          {
              "path": "./identityVariables",
              "enable": true,
              "dataType": "String",
              "name": "birthRegistrationState",
              "sampleValue": "VIC",
              "currentValue": ""
          },
          {
              "path": "./identityVariables",
              "enable": true,
              "dataType": "Date",
              "name": "birthRegistrationDate",
              "sampleValue": "08/27/1984",
              "currentValue": null
          },
          {
              "path": "./identityVariables",
              "enable": true,
              "dataType": "String",
              "name": "birthRegistrationNo",
              "sampleValue": "500156",
              "currentValue": ""
          },
          {
              "path": "./",
              "enable": true,
              "dataType": "Date",
              "name": "dateOfBirth",
              "sampleValue": "06/07/1984",
              "currentValue": null
          }
        ]
    }
    this.setState({
      visible: true,
      formData:data.dataArray
    });
    // this.setState(prevstate=>(
    //   {formData:data.dataArray}
    // ))
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
  render() {
    console.log(this.state);
    const {visible}=this.state
    return (
      <div>
        <Button style={{ margin: 15 }} type="primary" onClick={this.showForm}>
          自动生成表单2
        </Button>
        <Modal
          title="自动生成表单2"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
            {this.renderForm}
            {/* <FormItem 
              // name={item.label}
              label={'sdg'}
              rules={[{ required: true }]}
              key={1}
              initialValue={'23'}
            >
            <Input type="textarea" />
          </FormItem> */}
          </Form>
        </Modal>
      </div>
    );
  }
}
