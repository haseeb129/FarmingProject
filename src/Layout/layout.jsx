import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Logo from "../../src/Asserts/Logotwo.png";
import { AiOutlineHome } from "react-icons/ai";
import WbCloudyOutlinedIcon from "@material-ui/icons/WbCloudyOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import PieChartOutlinedIcon from "@material-ui/icons/PieChartOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import BellIcon from "../../src/Asserts/bell.png";
import Message from "../../src/Asserts/mail.png";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../Asserts/profile.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#F5F5F5",
    overflow: "hidden",
  },
  rootMenu: {
    width: 373,
    padding: "15px",
  },
}));

function ResponsiveDrawer(props) {
  const history = useHistory();
  console.log(props);
  // const handlelogout = props.logout;
  //const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentpath, setcurrentpath] = React.useState("/overView");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handlelogout = () => {
    localStorage.removeItem("logintoken");
    window.location.href = "/";
  };
  const drawer = (
    <div className="space">
      <div
        className={classes.toolbar}
        style={{ justifyContent: "center", display: "flex" }}
      >
        <img src={Logo} alt="Dashbaord Logo" className="DashbaordLogo" />
      </div>

      <List>
        <ListItem
          button
          key="/Username"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <ListItemText className="text-center">
            <div className="row">
              <img src={Avatar} className="avatar" />
            </div>
            <h2 className="username" style={{ padding: "15px" }}>
              Rosetti Farm
            </h2>
          </ListItemText>
        </ListItem>
        <Link to="/overView">
          <ListItem
            onClick={() => setcurrentpath("/overView")}
            button
            key="/user"
            className="Center"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRight:
                currentpath === "/overView"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color: currentpath === "/overView" ? "#000" : "#828282",
              }}
            >
              {" "}
              <HomeOutlinedIcon />{" "}
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color: currentpath === "/overView" ? "#000" : "#828282",
              }}
            >
              Over view
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/forCasting">
          <ListItem
            onClick={() => setcurrentpath("/forCasting")}
            button
            key="/user"
            style={{
              display: "flex",
              justifyContent: "center",

              borderRight:
                currentpath === "/forCasting"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color: currentpath === "/forCasting" ? "#000" : "#828282",
              }}
            >
              {" "}
              <PieChartOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color: currentpath === "/forCasting" ? "#000" : "#828282",
              }}
            >
              {" "}
              Forcasting
            </ListItemText>
          </ListItem>
        </Link>

        <Link to="/weather">
          <ListItem
            button
            key="/user"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRight:
                currentpath === "/weather"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
            onClick={() => setcurrentpath("/weather")}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color: currentpath === "/weather" ? "#000" : "#828282",
              }}
            >
              <FilterDramaIcon />
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color: currentpath === "/weather" ? "#000" : "#828282",
              }}
            >
              Weather
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/inputData">
          <ListItem
            button
            key="/user"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRight:
                currentpath === "/inputData"
                  ? "6px solid #000"
                  : "6px solid transparent",
            }}
            onClick={() => setcurrentpath("/inputData")}
          >
            <ListItemIcon
              style={{
                fontSize: "25px",
                color: currentpath === "/inputData" ? "#000" : "#828282",
              }}
            >
              {" "}
              <EditOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              style={{
                width: "76px",
                color: currentpath === "/inputData" ? "#000" : "#828282",
              }}
            >
              Input data
            </ListItemText>
          </ListItem>
        </Link>
      </List>
      <List>
        <ListItem
          className="menutextcolor"
          button
          key="/user"
          onClick={(e) => {
            // localStorage.removeItem("loginToken");
            // history.push("/login");
            handlelogout(e);
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ListItemIcon>
            {" "}
            <ExitToAppOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Log out</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;
  //   useEffect(() => {
  //     console.log(history.location.pathname);
  //     setcurrentpath(history.location.pathname);
  //   }, [history.location.pathname]);
  console.log(currentpath);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "white" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            style={{ color: "black" }}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <img
              src={Message}
              className="margin cursor"
              onClick={handleClick}
            />

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className={classes.rootMenu}
            >
              <div className="row">
                <h2 className="message">2 New Message</h2>
              </div>
              <MenuItem
                // style={{
                //   height: "66px",
                //   width: "317px",
                //   backgroundColor: "#E9FFDA",
                //   borderLeft: " 2px solid  #36BC06 ",
                // }}
                className="menu-item"
              >
                <Typography variant="inherit">
                  <div className="row">
                    <h5 className="notification-heading">
                      {" "}
                      New Data Alert: Block 3B
                    </h5>
                    <h5 className="notification-para">
                      Click to view & approve
                    </h5>
                  </div>
                </Typography>
              </MenuItem>
              <MenuItem className="menu-item">
                <Typography variant="inherit">
                  <div className="row">
                    <h5 className="notification-heading">
                      {" "}
                      New Data Alert: Block 3B
                    </h5>
                    <h5 className="notification-para">
                      Click to view & approve
                    </h5>
                  </div>
                </Typography>
              </MenuItem>
              <MenuItem className="menu-item-disable">
                <Typography variant="inherit">
                  <div className="row">
                    <h5 className="notification-heading">
                      {" "}
                      New Data Alert: Date of Harvest Block 2A
                    </h5>
                    <h5 className="notification-para">
                      Click to view & approve
                    </h5>
                  </div>
                </Typography>
              </MenuItem>
              <MenuItem className="menu-item-disable">
                <Typography variant="inherit">
                  <div className="row">
                    <h5 className="notification-heading">
                      {" "}
                      New Data Alert: Block 3B
                    </h5>
                    <h5 className="notification-para">
                      Click to view & approve
                    </h5>
                  </div>
                </Typography>
              </MenuItem>
            </Menu>
            <img src={BellIcon} className="margin cursor" />
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            //container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
