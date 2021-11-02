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
import { Bar, Pie, Line } from "react-chartjs-2";
import Logo from "../Asserts/Logo.png";
const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    position: "absolute",
    bottom: "18%",
  },
}));
function Wealther(props) {
  const classes = useStyles();
  return (
    <div>
      <div className="main-container">
        <div className="row ">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <h2 className="main-heading">Weather</h2>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12  ">
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
        </div>
        <div className="row mt-mb-15">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
            <div className="card-box">
              <div className="row">
                <h3 className="card-heading">Rain Fall next hour </h3>
              </div>
              <div className="row">
                <h4 className="card-content text-center">12 M M</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
            <div className="card-box">
              <div className="row">
                <h3 className="card-heading">Mean Temperature Next Hour</h3>
              </div>
              <div className="row">
                <h4 className="card-content  text-center">20 C</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
            <div className="card-box">
              <div className="row">
                <h3 className="card-heading">Mean Humidity Next Hour</h3>
              </div>
              <div className="row">
                <h4 className="card-content text-center">35 RH</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 centered">
            <div className="card-box">
              <div className="row">
                <h3 className="card-heading">Sunlight Next Hour</h3>
              </div>
              <div className="row">
                <h4 className="card-content text-center">486 LUX</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
          // className="Chart-card"
          // style={{ backgroundColor: "white", padding: "30px" }}
          >
            {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"> */}

            <div className="row ">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="Chart-card">
                  <div className="row">
                    <div className="col-6">
                      <h3 className="chart-heading">Rainfall </h3>
                    </div>
                    <div className="col-6 right">
                      <h3 className="chart-heading-right">This Week</h3>
                    </div>
                  </div>
                  <div>
                    <Bar
                      height={200}
                      width={700}
                      data={{
                        labels: [
                          "Feb8",
                          "Feb9",
                          "Feb10",
                          "Feb11",
                          "Feb12",
                          "Feb13",
                          "Feb14",
                        ],
                        datasets: [
                          {
                            label: "Actual",
                            data: [14, 22, 11],
                            backgroundColor: "#79D2DE",
                          },
                          {
                            label: "Predicted",
                            data: [14, 20, 11, 30, 32, 40, 41],
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
                        position: "bottom",
                        labels: {
                          usePointStyle: true,
                          boxWidth: 50,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* </div> */}

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="Chart-card">
                  <div className="row ">
                    <div className="col-6">
                      <h3 className="chart-heading">Temperature</h3>
                    </div>
                    <div className="col-6 right">
                      <h3 className="chart-heading-right">This Week</h3>
                    </div>
                  </div>
                  <div>
                    <Line
                      height={200}
                      width={800}
                      data={{
                        labels: [
                          "Feb8",
                          "Feb9",
                          "Feb10",
                          "Feb11",
                          "Feb12",
                          "Feb13",
                          "Feb14",
                        ],
                        datasets: [
                          {
                            label: "Actual",
                            data: [5, 15, 12],
                            backgroundColor: "#147AD6",
                          },
                          {
                            label: "Predicted",
                            data: [8, 16, 14, 7, 12, 17, 19],
                            backgroundColor: "rgba(236, 102, 102, 0.63)",

                            // background: linear-gradient(180deg,  0%, rgba(236, 102, 102, 0) 100%);
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
                                stepSize: 5,
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
                              barPercentage: 0.7,
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
                        position: "bottom",
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
        </div>
        <div className="row mt-mb-15">
          <div
          // className="Chart-card"
          // style={{ backgroundColor: "white", padding: "30px" }}
          >
            {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"> */}

            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="Chart-card">
                  <div className="row">
                    <div className="col-6">
                      <h3 className="chart-heading">Humidity (RH%)</h3>
                    </div>
                    <div className="col-6 right">
                      <h3 className="chart-heading-right">This Week</h3>
                    </div>
                  </div>
                  <div>
                    <Line
                      height={200}
                      width={700}
                      data={{
                        labels: [
                          "Feb8",
                          "Feb9",
                          "Feb10",
                          "Feb11",
                          "Feb12",
                          "Feb13",
                          "Feb14",
                        ],
                        datasets: [
                          {
                            label: "Actual",
                            data: [50, 57, 66],
                            backgroundColor: "#147AD6",
                          },
                          {
                            label: "Predicted",

                            data: [60, 70, 74, 75, 70, 50, 45],
                            backgroundColor: "#79D2DE",
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
                        elements: {
                          point: {
                            radius: 0,
                          },
                        },
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
                                stepSize: 25,
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
                        position: "bottom",
                        labels: {
                          usePointStyle: true,
                          boxWidth: 50,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* </div> */}

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="Chart-card">
                  <div className="row">
                    <div className="col-6">
                      <h3 className="chart-heading">Sun Light</h3>
                    </div>
                    <div className="col-6 right">
                      <h3 className="chart-heading-right">This Week</h3>
                    </div>
                  </div>
                  <div>
                    <Bar
                      height={200}
                      width={800}
                      data={{
                        labels: [
                          "Feb8",
                          "Feb9",
                          "Feb10",
                          "Feb11",
                          "Feb12",
                          "Feb13",
                          "Feb14",
                        ],
                        datasets: [
                          {
                            label: "Actual",
                            data: [415, 420, 850],
                            backgroundColor: "#FC7E09",
                          },
                          {
                            label: "Predicted",
                            data: [430, 400, 850, 300, 600, 800, 300],
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
                                stepSize: 250,
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
                        position: "bottom",
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

export default Wealther;
