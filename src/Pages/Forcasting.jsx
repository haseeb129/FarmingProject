import React, { useState } from "react";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Feather from "../Asserts/feather.png";
import Calendar from "../Asserts/calendar.png";
import { Bar, Pie, Line } from "react-chartjs-2";
import Chart from "react-apexcharts";
import Logo from "../Asserts/Logo.png";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    position: "absolute",
    bottom: "18%",
  },
}));
function Forcasting(props) {
  const [values, setvalues] = useState({
    series: [11, 8, 30, 17],

    chartOptions: {
      stroke: {
        width: 0,
      },
      labels: ["40cm", "50cm", "60cm", "70cm"],
      // title: {
      //   text: 'Analysis'
      // },
      dataLabels: {
        enabled: false,
      },

      tooltip: {
        enabled: true,
      },
      colors: ["#65b6c1", "#2e7bb1", "#24639c", "#62dbed"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 ">
            <h2 className="main-heading">Forcasting</h2>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12  ">
                <div className="row heading-card-variety ">
                  <div className="col-6 flex">
                    <img src={Feather} slt="feather" className="icon-style" />
                    <h3 className="select-card">Variety:</h3>
                  </div>
                  <div className="col-6">
                    <FormControl
                      className={classes.formControl}
                      style={{ minWidth: "100px" }}
                    >
                      <InputLabel htmlFor="grouped-select">
                        Crop Name
                      </InputLabel>
                      <Select
                        style={{ fontSize: "20px", marginBottom: "-5px" }}
                        defaultValue=""
                        id="grouped-select"
                        disableUnderline
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
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12  ">
                <div className="row heading-card-farm">
                  <div className="col-6 flex">
                    <RoomOutlinedIcon
                      fontSize="large"
                      className="icon-margin"
                    />
                    <h3 className="select-card">Farm:</h3>
                  </div>
                  <div className="col-6">
                    <FormControl
                      className={classes.formControl}
                      style={{ minWidth: "102px" }}
                    >
                      <InputLabel htmlFor="grouped-select">
                        Farm Name
                      </InputLabel>
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
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12  "
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div className="row block-card">
                  <div className="col-6 flex">
                    <img src={Calendar} slt="feather" className="icon-style" />
                    <h3 className="select-card">Block</h3>
                  </div>
                  <div className="col-6">
                    <FormControl
                      className={classes.formControl}
                      style={{ minWidth: "60px" }}
                    >
                      <InputLabel htmlFor="grouped-select">1A</InputLabel>
                      <Select
                        style={{ minWidth: "60px" }}
                        defaultValue=""
                        id="grouped-select"
                        disableUnderline
                        autoWidth="false"
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
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12  "
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div className="row block-card">
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
        <div className="row mt-mb-15">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
            <div className="card-box">
              <div className="row">
                <h3 className="card-heading">Target Harvest Date</h3>
              </div>
              <div className="row">
                <h4 className="card-content text-center">Apr 24</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
            <div className="card-box">
              <div className="row">
                <h3 className="card-heading">Projected Harvest Date</h3>
              </div>
              <div className="row">
                <h4 className="card-content green text-center">Apr 16</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
            <div className="card-box">
              <div className="row">
                <h3 className="card-heading">Target Yield (Crops)</h3>
              </div>
              <div className="row">
                <h4 className="card-content text-center">240,000</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
            <div className="card-box">
              <div className="row">
                <h3 className="card-heading">Projected Yield (Crops)</h3>
              </div>
              <div className="row">
                <h4 className="card-content green text-center">223,800</h4>
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
                <h3 className="chart-heading">Growth Rate Prediction</h3>
              </div>
              <div className="col-6 right">
                <h3 className="chart-heading-right">Next 7 Week</h3>
              </div>
            </div>
            <div>
              <Bar
                height={300}
                data={{
                  labels: [
                    "Jan1",
                    "Jan 8",
                    "Jan 15",
                    "Jan 22",
                    "Jan 29",
                    "Feb 5",
                    "Feb 12",
                    "Feb 19",
                    "Feb 26",
                    "Mar 5",
                    "Mar 12",
                    "Mar 19",
                    "Mar 26",
                    "Apr 2",
                    "Apr 9",
                    "Apr 16",
                  ],
                  datasets: [
                    {
                      label: "Actual ",
                      data: [5, 15, 20, 22, 33, 37, 42, 46, 60],
                      backgroundColor: "#FF7676",
                    },
                    {
                      label: "Predicted",
                      data: [
                        5,
                        15,
                        20,
                        22,
                        33,
                        37,
                        42,
                        46,
                        60,
                        66,
                        68,
                        70,
                        77,
                        82,
                        86,
                        91,
                      ],
                      backgroundColor: "#707070  ",
                    },
                    // {
                    //   label: "Lima Forecast",
                    //   data: [200, 400],
                    //   backgroundColor: "#707070",
                    // },
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
                          stepSize: 20,
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
                        barThickness: 8,
                        barPercentage: 1,
                        categoryPercentage: 1.0,
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
        <div className="row mt-mb-15">
          <div
            className="Chart-card"
            style={{ backgroundColor: "white", padding: "30px" }}
          >
            {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"> */}

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-6">
                    <h3 className="chart-heading">Crop Density Forecast</h3>
                  </div>
                  <div className="col-6 right">
                    <h3 className="chart-heading-right">
                      Block 1A: Next 7 Weeks
                    </h3>
                  </div>
                </div>
                <div>
                  <Line
                    height={400}
                    width={700}
                    data={{
                      labels: [
                        "Jan1",
                        "Jan 8",
                        "Jan 15",
                        "Jan 22",
                        "Jan 29",
                        "Feb 5",
                        "Feb 12",
                        "Feb 19",
                        "Feb 26",
                        "Mar 5",
                        "Mar 12",
                        "Mar 19",
                        "Mar 26",
                        "Apr 2",
                        "Apr 9",
                        "Apr 16",
                      ],
                      datasets: [
                        {
                          label: "Actual",
                          data: [80, 79, 77, 76, 75, 74],
                          backgroundColor: " rgba(10, 242, 131, 0.4)  ",
                        },
                        {
                          label: "Predicted",

                          data: [
                            80,
                            79,
                            77,
                            76,
                            75,
                            74,
                            73,
                            72,
                            71,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                            80,
                          ],
                          backgroundColor: "rgba(102, 102, 102, 0.7) ",
                        },
                        // {
                        //   label: "Lima Forecast",
                        //   data: [200, 400],
                        //   backgroundColor: "#707070",
                        // },
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
                                  "$ " +
                                  d["data"][tooltipItem["index"]].toFixed(2);
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
                              stepSize: 10,
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
                            // barThickness: 10,
                            barPercentage: 0.3,
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
          </div>
        </div>
        <div className="row mt-mb-15">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="forcasting-Card">
              <div className="row">
                <div className="col-6">
                  <h3 className="chart-heading">Block Specifications</h3>
                </div>
                <div className="col-6 right">
                  <h3 className="chart-heading-right">Last Update: Jan 2nd</h3>
                </div>
              </div>
              <div>
                <div className="row centered">
                  <h3 className="block-content centered">
                    <strong className="mr--15">Block Name:</strong>
                    1A
                  </h3>
                </div>
                <div className="row centered">
                  <h3 className="block-content centered">
                    <strong className="mr--15">Variety: </strong>
                    1A Crop name
                  </h3>
                </div>
                <div className="row centered">
                  <h3 className="block-content centered">
                    <strong className="mr--15">Planted date: </strong>
                    23/02/2017
                  </h3>
                </div>
                <div className="row centered">
                  <h3 className="block-content centered">
                    <strong className="mr--15">Cut back dates:</strong>
                    31/12/2020
                  </h3>
                </div>
                <div className="row centered">
                  <h3 className="block-content centered">
                    <strong className="mr--15">Beds:</strong>
                    60
                  </h3>
                </div>
                <div className="row centered">
                  <h3 className="block-content centered">
                    <strong className="mr--15">Length of Beds:</strong>
                    50 m
                  </h3>
                </div>
                <div className="row centered">
                  <h3 className="block-content centered">
                    <strong className="mr--15">Bed Length Gain/Loss:</strong>
                    -28 m
                  </h3>
                </div>
                <div className="row centered">
                  <h3 className="block-content centered">
                    <strong className="mr--15">SOP:</strong>
                    HTV12
                  </h3>
                </div>
                <div className="row centered">
                  <h3 className="block-content centered">
                    <strong className="mr--15">Target harvest time::</strong>
                    20 weeks
                  </h3>
                </div>

                <div className="row centered">
                  <h3 className="block-content centered">
                    <strong className="mr--15">Target Yield:</strong>
                    240,000 Stems
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="forcasting-Card">
              <div className="row">
                <div className="col-6">
                  <h3 className="chart-heading">
                    Crop Quality Forecast: Volume
                  </h3>
                </div>
                <div className="col-6 right">
                  <h3 className="chart-heading-right">Cycle: Jan 1st</h3>
                </div>
              </div>
              <div className="row">
                {/* Old Chart js 2 pie Chart */}
                {/* <Pie
                  data={{
                    datasets: [
                      {
                        label: "Actual ",
                        data: [300, 490, 800, 1500, 1800],
                        backgroundColor: [
                          "#0074D9",
                          "#FF4136",
                          "#2ECC40",
                          "#FF851B",
                          "#7FDBFF",
                        ],
                      },
                    ],

                  }}
                /> */}
                <Chart
                  options={values.chartOptions}
                  series={values.series}
                  type="pie"
                  width="420"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <h3 className="poweredBy">
            Powered by <img src={Logo} height="20px" />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Forcasting;
