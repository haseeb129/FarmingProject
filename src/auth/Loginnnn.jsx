import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link, useHistory } from "react-router-dom";
import axiosInstance from "../axios-Instance";
import { AiOutlineUser } from "react-icons/ai";
import Alert from "react-bootstrap/Alert";
import Logo from "../Asserts/Logo.png";
import LoginImage from "../Asserts/loginPageImage.png";
import { BiLockOpenAlt, BiLockAlt } from "react-icons/bi";
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
const Login = (props) => {
  const history = useHistory();
  const [values, setvalues] = useState({
    email: "",
    password: "",
    loginID: null,
    Loginalert: null,
  });

  const handleChange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("loginToken", "token");
    // window.location.href = "/overView";
    const user = {
      email: values.email,
      password: values.password,
    };
    axiosInstance
      .post("/Register/login", user)
      .then((res) => {
        const token = res.data.token;
        let loginID = res.data.id;
        console.log("login Id:", res.data.id);

        localStorage.setItem("logintoken", token);
        localStorage.setItem("loginId", loginID);
        // alert(res.data.message);
        setvalues({
          Loginalert: {
            variant: "success",
            email: "",
            password: "",
            loginID: loginID,
            message: res.data.message,
          },
        });

        window.location.href = "/overView";
        // props.history.push("/overView");
      })
      .catch((err, res) => {
        console.log(err);

        setvalues({
          Loginalert: {
            variant: "danger",
            message: err.response.data.message,
          },
        });
      });
  };
  return (
    <div className="container-fluid ">
      <div className="row" style={{ minHeight: "100vh" }}>
        <div
          className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12  bg-image"
          style={{ padding: "0" }}
        ></div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="row centered">
            <div className="alert-style">
              {values.Loginalert !== null && (
                <Alert
                  style={{
                    vertical: "top",
                    horizontal: "center",
                    width: "400px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                  variant={values.Loginalert.variant}
                >
                  {values.Loginalert.message}
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
                <div className="row" style={{ paddingTop: "20px" }}>
                  <h2>Customer ID / Email</h2>
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
                    suffix={<AiOutlineUser />}
                  />
                </Form.Item>
                <div className="row">
                  <h2>Password</h2>
                </div>
                <Form.Item
                  // label="Password"
                  style={{ marginBottom: "0" }}
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
                    iconRender={(visible) =>
                      visible ? <BiLockAlt /> : <BiLockOpenAlt />
                    }
                    value={values.password}
                  />
                </Form.Item>
                <div
                  className="row-lg-12"
                  style={{ float: "left", width: "100%" }}
                >
                  <p className="forgetPassword">
                    <Link to="/forgetPassword"> Forget Password ?</Link>
                  </p>
                </div>

                <div
                  className="row"
                  style={{ justifyContent: "center", display: "contents" }}
                >
                  <Form.Item>
                    <Button
                      className="loginButton"
                      type="primary"
                      htmlType="submit"
                      // disabled={true}
                      onClick={(event) => handleSubmit(event)}
                    >
                      Log In
                    </Button>
                  </Form.Item>
                </div>
                <div className="row">
                  <Link to="/Register">
                    {" "}
                    <h4 className="already">Create an Account?</h4>
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
};

export default Login;
