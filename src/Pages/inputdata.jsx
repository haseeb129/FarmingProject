import React, { useState } from "react";
import Logo from "../Asserts/Logo.png";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FarmDetails from "./Tabs/Farmdetails";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 700,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
function Inputdata(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [currentindex, setcurrentindex] = useState(1);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="container-fuild pd--30">
        <h2 className="main-heading"> Inputdate</h2>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              label="Farm Details"
              {...a11yProps(0)}
              style={{ color: value === 0 ? "#1890FF " : "" }}
            />
            <Tab
              label="Harvest Date"
              {...a11yProps(1)}
              style={{ color: value === 1 ? "#1890FF " : "" }}
            />
            <Tab
              label="Actual Harvest"
              {...a11yProps(2)}
              style={{ color: value === 2 ? "#1890FF " : "" }}
            />
            <Tab
              label="Cut Back Date"
              {...a11yProps(3)}
              style={{ color: value === 3 ? "#1890FF " : "" }}
            />
          </Tabs>
          <TabPanel
            style={{ width: "100%" }}
            value={value}
            index={0}
            onClick={() => setcurrentindex(0)}
          >
            <FarmDetails />
          </TabPanel>
          <TabPanel value={value} index={1} onClick={() => setcurrentindex(1)}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} onClick={() => setcurrentindex(2)}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} onClick={() => setcurrentindex(3)}>
            Item Four
          </TabPanel>
        </div>
        <div className="row mtb--20">
          <h3 className="poweredBy">
            Powered by <img src={Logo} height="23px" />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Inputdata;
