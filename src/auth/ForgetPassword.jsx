import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import axiosInstance from "../axios-Instance";
import { AiOutlineUser } from "react-icons/ai";
import Alert from "react-bootstrap/Alert";
import Logo from "../Asserts/Logo.png";
import LoginImage from "../Asserts/loginPageImage.png";
import { BiLockOpenAlt } from "react-icons/bi";
const layout = {
  // labelCol: { span: 16 },
  wrapperCol: { span: 32 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function ForgetPassword(props) {
  const [values, setvalues] = useState({
    email: "",
    forgetAlert: null,
  });

  const handleChange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: values.email,
    };
    axiosInstance
      .post("Register/forgetPassword", user)

      .then((res) => {
        setvalues({
          forgetAlert: {
            variant: "success",
            message: res.data.message,
          },
        });
        console.log(res.data.message);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid ">
      <div className="row" style={{ minHeight: "100vh" }}>
        <div
          className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
          style={{ padding: "0" }}
        >
          <img src={LoginImage} height="100%" width="100%" />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="row  centered">
            <div className="alert-style">
              {values.forgetAlert && (
                <Alert
                  style={{
                    vertical: "top",
                    horizontal: "center",
                    width: "400px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                  variant={values.forgetAlert.variant}
                >
                  {values.forgetAlert.message}
                </Alert>
              )}
            </div>
          </div>
          <div className="row parent">
            <div className="login child">
              <h2 className="heading">
                <img src={Logo} />
              </h2>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <div className="row">
                  <h2>Email</h2>
                </div>
                <Form.Item
                  // label="Username"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your New Password!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email"
                    value={values.email}
                    name="email"
                    onChange={(event) => handleChange(event)}
                  />
                </Form.Item>

                <div
                  className="row"
                  style={{ justifyContent: "center", display: "contents" }}
                >
                  <Form.Item>
                    <Button
                      className="loginButton"
                      type="primary"
                      htmlType="submit"
                      onClick={(event) => handleSubmit(event)}
                    >
                      Send Email
                    </Button>
                  </Form.Item>
                </div>

                {/* <div className="row right">
                    <a className="register" href="/Register">
                      register
                    </a>
                  </div> */}
              </Form>
            </div>
          </div>
          <div className="row hideOnMobileView footerLogin ">
            <h3 className="poweredBy">
              Powered by <img src={Logo} height="23px" />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
