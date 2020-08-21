import React from "react";
import "./style.css";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a validate number!"
  }
};
export default function App() {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log("Received values of form:", values);
  };

  return (
    <Form
      {...formItemLayoutWithOutLabel}
      name="sample form"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.List name="names">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <Form.Item
                 {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                  label={index === 0 ? "name" : ""}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                
                    {...field}
                    validateTrigger={["onBlur","onChange"]}
                    rules={[{ required: true,message:'required!!' }]}
                  >
                    <Input style={{ width: '60%' }}/>
                  </Form.Item>
                  

                  {fields.length >= 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      style={{ margin: "0 8px" }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: "60%" }}
                >
                  <PlusOutlined /> Add field
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

// <Form.Item
//   name="number"
//   label="number"
//   rules={[
//     { type: "number", required: true },
//     {
//       pattern: /^[2-9]{2}\d{8}$/,
//       message: "Please input 10 digit number!"
//     }
//   ]}
// >
//   <InputNumber maxLength={10} />
// </Form.Item>
