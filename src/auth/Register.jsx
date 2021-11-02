import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import axiosInstance from "../axios-Instance";
import { AiOutlineUser } from "react-icons/ai";
import Alert from "react-bootstrap/Alert";
import Logo from "../Asserts/Logo.png";
import LoginImage from "../Asserts/loginPageImage.png";
import { BiLockOpenAlt } from "react-icons/bi";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

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
function Regsiter(props) {
  const [values, setvalues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      userName: values.userName,
    };
    console.log(user);
    axiosInstance
      .post("/Register/Signup", user)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("jwtToken", token);
        setvalues({
          firstName: "",
          lastName: "",
          userName: "",
          password: "",
          email: "",
        });
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
                  <h2>First Name</h2>
                </div>
                <Form.Item
                  // label="Username"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={(event) => handleChange(event)}
                    name="firstName"
                  />
                </Form.Item>
                <div className="row">
                  <h2>Last Name</h2>
                </div>
                <Form.Item
                  // label="Username"
                  name="lastNAme"
                  rules={[
                    { required: true, message: "Please input your Last Name!" },
                  ]}
                >
                  <Input
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={(event) => handleChange(event)}
                    name="lastName"
                  />
                </Form.Item>
                <div className="row">
                  <h2>User Name</h2>
                </div>
                <Form.Item
                  // label="Username"
                  name="userName"
                  rules={[
                    { required: true, message: "Please input your User Name!" },
                  ]}
                >
                  <Input
                    placeholder="User Name"
                    value={values.userName}
                    onChange={(event) => handleChange(event)}
                    name="userName"
                  />
                </Form.Item>
                <div className="row">
                  <h2>Email</h2>
                </div>
                <Form.Item
                  // label="Username"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your Email!" },
                  ]}
                >
                  <Input
                    placeholder="Email"
                    value={values.email}
                    onChange={(event) => handleChange(event)}
                    name="email"
                  />
                </Form.Item>
                <div className="row">
                  <h2>Password</h2>
                </div>
                <Form.Item
                  // label="Password"
                  style={{ marginBottom: "10px" }}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    onChange={(event) => handleChange(event)}
                    name="password"
                    value={values.password}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }

                    // suffix={<BiLockOpenAlt />}
                  />
                </Form.Item>

                <div
                  className="row"
                  style={{
                    justifyContent: "center",
                    display: "contents",
                    marginTop: "20px",
                  }}
                >
                  <Form.Item>
                    <Button
                      className="loginButton"
                      type="primary"
                      htmlType="submit"
                      onClick={(event) => handleSubmit(event)}
                    >
                      Register
                    </Button>
                  </Form.Item>
                </div>
                <div className="row">
                  <Link to="/">
                    {" "}
                    <h4 className="already">Already have an Acconut?</h4>
                  </Link>
                </div>
                {/* <div className="row right">
                    <a className="register" href="/Register">
                      register
                    </a>
                  </div> */}
              </Form>
            </div>
          </div>
          <div className="row footerLogin">
            <h3 className="poweredBy">
              Powered by <img src={Logo} height="23px" />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regsiter;
