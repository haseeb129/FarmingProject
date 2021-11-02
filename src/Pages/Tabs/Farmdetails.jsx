import { Form, Input, Button, Select, DatePicker } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const PurpleSwitch = withStyles({
  switchBase: {
    // color: "#219653",
    "&$checked": {
      color: "#219653 ",
    },
    "&$checked + $track": {
      backgroundColor: "#219653",
    },
  },
  checked: {},
  track: {},
})(Switch);

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
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
function Farmdetails(props) {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });
  const handleChange = (event) => {
    setvalues({ [event.target.name]: event.target.value });
  };
  const handleChangetoggle = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="container-fuild">
      <div className="row">
        <FormGroup>
          <FormControlLabel
            control={
              <PurpleSwitch
                checked={state.checkedA}
                onChange={handleChangetoggle}
                name="checkedA"
              />
            }
            label="locked"
          />

          <div className="row">
            <div className="farm-details">
              <h3 className="fd-haeding">farm details</h3>
              <h3 className="fd-haeding" style={{ fontWeight: "400" }}>
                Last Update: February 11th, 2021
              </h3>
            </div>
          </div>
          {/* <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>
                <AntSwitch
                  checked={state.checkedC}
                  onChange={handleChangetoggle}
                  name="checkedC"
                  control={
       
                  }
                />
              </Grid>
              <Grid item>locked</Grid>
            </Grid>
          </Typography> */}
        </FormGroup>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Form.Item
                label="Farm location"
                name="farmLocation"
                rules={[
                  {
                    required: true,
                    message: "Please input your Farm Loction!",
                  },
                ]}
              >
                <Select
                  placeholder="Select a farm"
                  value={values.email}
                  onChange={(event) => handleChange(event)}
                  name="farmLocation"
                />
              </Form.Item>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Form.Item
                label="No Of Beds"
                name="noofBeds"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  value={values.email}
                  onChange={(event) => handleChange(event)}
                  name="email"
                />
              </Form.Item>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Form.Item
                label="Block ID"
                name="blockId"
                rules={[
                  { required: true, message: "Please input your blockId!" },
                ]}
              >
                <Input
                  value={values.email}
                  onChange={(event) => handleChange(event)}
                  name="email"
                />
              </Form.Item>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Form.Item
                label="Bad Lenght"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  value={values.email}
                  onChange={(event) => handleChange(event)}
                  name="email"
                />
              </Form.Item>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Form.Item
                label="Flower Variety"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Select
                  placeholder="Select Variety"
                  value={values.email}
                  onChange={(event) => handleChange(event)}
                  name="email"
                />
              </Form.Item>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Form.Item
                label="Bed Length Gain/Loss:"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  value={values.email}
                  onChange={(event) => handleChange(event)}
                  name="email"
                />
              </Form.Item>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Form.Item
                label="Planted Date:"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <DatePicker
                  placeholder="Date"
                  className="width100"
                  value={values.email}
                  onChange={(event) => handleChange(event)}
                  name="email"
                />
              </Form.Item>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Form.Item
                label="SOP"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  value={values.email}
                  onChange={(event) => handleChange(event)}
                  name="email"
                />
              </Form.Item>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Form.Item
                label="Cut Back Date"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <DatePicker
                  className="width100"
                  placeholder="Date"
                  value={values.email}
                  onChange={(event) => handleChange(event)}
                  name="email"
                />
              </Form.Item>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Form.Item
                label="Target Harvest Time"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  value={values.email}
                  onChange={(event) => handleChange(event)}
                  name="email"
                />
              </Form.Item>
            </div>
          </div>

          <div className="row">
            <div className="flex-end">
              <Button
                type="primary"
                htmlType="submit"
                // onClick={(event) => this.handleSubmit(event)}
              >
                Add New Block
              </Button>
            </div>
          </div>

          {/* <div className="row right">
                    <a className="register" href="/Register">
                      register
                    </a>
                  </div> */}
        </Form>
      </div>
    </div>
  );
}

export default Farmdetails;
