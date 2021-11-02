import React from "react";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Feather from "../Asserts/feather.png";
import Calendar from "../Asserts/calendar.png";
import { Bar } from "react-chartjs-2";
import Logo from "../Asserts/Logo.png";
import Table from "../Components/Table";
import cloud from "../Asserts/cloud-lightning.png";
import arrowUpper from "../Asserts/Arrow1.png";
import arrowDown from "../Asserts/Arrow2.png";
const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    position: "absolute",
    bottom: "18%",
  },
}));
function Overview(props) {
  const classes = useStyles();

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
          <h2 className="main-heading">Overview</h2>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-xs-12  ">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12  ">
              <div className="row heading-card-farm">
                <div className="col-6 flex">
                  <RoomOutlinedIcon fontSize="large" className="icon-margin" />
                  <h3 className="select-card">Farm:</h3>
                </div>
                <div className="col-6">
                  <FormControl
                    className={classes.formControl}
                    style={{ minWidth: "102px" }}
                  >
                    <InputLabel htmlFor="grouped-select">Farm Name</InputLabel>
                    <Select
                      style={{ minWidth: "60px" }}
                      defaultValue=""
                      id="grouped-select"
                      disableUnderline
                      style={{ fontSize: "20px", marginBottom: "-5px" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <ListSubheader>Category 1</ListSubheader>
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <ListSubheader>Category 2</ListSubheader>
                      <MenuItem value={3}>Option 3</MenuItem>
                      <MenuItem value={4}>Option 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12  ">
              <div className="row heading-card-variety ">
                <div className="col-6 flex">
                  <img src={Feather} slt="feather" className="icon-style " />
                  <h3 className="select-card">Variety:</h3>
                </div>
                <div className="col-6">
                  <FormControl
                    className={classes.formControl}
                    style={{ minWidth: "102px" }}
                  >
                    <InputLabel htmlFor="grouped-select">Crop Name</InputLabel>
                    <Select
                      defaultValue=""
                      id="grouped-select"
                      disableUnderline
                      style={{ fontSize: "20px", marginBottom: "-5px" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <ListSubheader>Category 1</ListSubheader>
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <ListSubheader>Category 2</ListSubheader>
                      <MenuItem value={3}>Option 3</MenuItem>
                      <MenuItem value={4}>Option 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12  ">
              <div className="row heading-card-period">
                <div className="col-6 flex">
                  <img src={Calendar} slt="feather" className="icon-style" />
                  <h3 className="select-card">Period</h3>
                </div>
                <div className="col-6">
                  <FormControl
                    className={classes.formControl}
                    style={{ minWidth: "60px" }}
                  >
                    <InputLabel htmlFor="grouped-select">Week</InputLabel>
                    <Select
                      defaultValue=""
                      id="grouped-select"
                      disableUnderline
                      style={{ fontSize: "20px", marginBottom: "-5px" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <ListSubheader>Category 1</ListSubheader>
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <ListSubheader>Category 2</ListSubheader>
                      <MenuItem value={3}>Option 3</MenuItem>
                      <MenuItem value={4}>Option 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-mb-15 ">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
          <div className="card-box">
            <div className="row">
              <h3 className="card-heading">Week’s Harvest Prediction</h3>
            </div>
            <div className="row">
              <h4 className="card-content text-center">393.2 k</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
          <div className="card-box">
            <div className="row">
              <h3 className="card-heading">Weather Now</h3>
            </div>
            <div className="row">
              <div className="col-8" style={{ padding: "0" }}>
                <h4 className="card-content text-center">23 C</h4>
              </div>
              <div className="col-4" style={{ padding: "0" }}>
                <img src={cloud} className="cloud-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
          <div className="card-box">
            <div className="row">
              <h3 className="card-heading">Prediction Accuracy</h3>
            </div>
            <div className="row">
              <div className="col-8" style={{ padding: "0" }}>
                <h4 className="card-content text-right">96.9 %</h4>
              </div>
              <div className="col-4 ">
                <img src={arrowUpper} alt="Upper" className="arrow-style" />
                <img src={arrowDown} alt="Upper" className="ml--10" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
          <div className="card-box">
            <div className="row">
              <h3 className="card-heading">Last Updated</h3>
            </div>
            <div className="row">
              <h4 className="last-update text-center">10:41 am | Feb 26</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="Chart-card"
          style={{ backgroundColor: "white", padding: "30px" }}
        >
          <div className="row">
            <div className="col-6">
              <h3 className="chart-heading">Harvest Forecast</h3>
            </div>
            <div className="col-6 right">
              <h3 className="chart-heading-right">Next 4 Week</h3>
            </div>
          </div>
          <div>
            <Bar
              height={300}
              data={{
                labels: [
                  "Week 1",
                  "Week 2",
                  "Week 3",
                  "Week 4",
                  "Week 5",
                  "Week 6",
                  "Week 7",
                  "Week 8",
                  "Week 9",
                  "Week 10",
                ],
                datasets: [
                  {
                    label: "Actual Harvest",
                    data: [400, 450, 400, 420, 220, 430],
                    backgroundColor: "#0AF283",
                  },
                  {
                    label: "Farm forecast",
                    data: [200, 220, 120, 200, 100, 200, 201, 220, 180, 220],
                    backgroundColor: "#753CBE",
                  },
                  {
                    label: "Lima Forecast",
                    data: [400, 440, 460, 420, 220, 450, 440, 420, 320, 420],
                    backgroundColor: "#707070",
                  },
                  // {
                  //   label: "EBIT",
                  //   data: [100, 300],
                  //   backgroundColor: "#9891AF",
                  // },
                ],
              }}
              options={{
                tooltips: {
                  callbacks: {
                    title: function (tooltipItem, data) {
                      return data["labels"][tooltipItem[0]["index"]];
                    },
                    label: function (tooltipItem, data) {
                      let value;
                      data["datasets"].forEach((d) => {
                        // console.log(d['data'][tooltipItem['index']], tooltipItem);
                        if (
                          d["data"][tooltipItem["index"]] ===
                          Number(tooltipItem.value)
                        ) {
                          value =
                            "$ " + d["data"][tooltipItem["index"]].toFixed(2);
                        }
                      });
                      // console.log(value);
                      return value;
                    },
                    afterLabel: function (tooltipItem, data) {},
                  },
                  backgroundColor: "#FFF",
                  borderWidth: 2,
                  xPadding: 15,
                  yPadding: 15,
                  borderColor: "#ddd",
                  titleFontSize: 16,
                  titleFontColor: "#0066ff",
                  bodyFontColor: "#000",
                  bodyFontSize: 14,
                  // displayColors: false,
                },
                cornerRadius: 20,
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        // callback: function (value) {
                        //   return "$ " + numeral(value).format("0.0a");
                        // },
                        stepSize: 100,
                        beginAtZero: true,
                      },
                      gridLines: {
                        borderDash: [2],
                        zeroLineColor: "transparent",
                        zeroLineWidth: 0,
                        tickMarkLength: 15,
                      },
                    },
                  ],

                  xAxes: [
                    {
                      barThickness: 10,
                      barPercentage: 0.7,
                      // categoryPercentage: 0.3,
                      // barPercentage: 0.3,
                      gridLines: {
                        lineWidth: 0,
                        zeroLineColor: "transparent",
                      },
                    },
                  ],
                },
              }}
              legend={{
                display: true,
                position: "top",
                labels: {
                  usePointStyle: true,
                  boxWidth: 50,
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="Chart-card"
          style={{
            backgroundColor: "white",
            padding: "30px",
            marginTop: "40px",
          }}
        >
          <div className="row">
            <div className="col-6">
              <h3 className="chart-heading">Trend Breakdown: Crop Name</h3>
            </div>
            <Table />
          </div>
        </div>
      </div>
      <div className="row ">
        <h3 className="poweredBy">
          Powered by <img src={Logo} height="20px" />
        </h3>
      </div>
    </div>
  );
}

export default Overview;
