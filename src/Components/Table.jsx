import React, { useState } from "react";
import ErrorIcon from "@material-ui/icons/Error";
function Table(props) {
  const [values, setvalues] = useState([
    {
      title: "Metric / Date",
      head: true,
      Data: [
        "jan 1",
        "jan 8",
        "jan 15",
        "jan 22",
        "jan 29",
        "feb 5",
        "feb 12",
        "feb 19",
        "feb 25",
        "march 3",
      ],
    },
    {
      title: "Total Yield (# K Crops)",
      Data: [
        "427",
        "622",
        "412",
        "963",
        "112",
        "427",
        "622",
        "412",
        "963",
        "112",
      ],
    },
    {
      title: "% evol",
      Data: [
        {
          value: "-11.6%",
          danger: true,
        },
        {
          value: "-8.6%",
          danger: true,
        },
        {
          value: "-4.6%",
          danger: true,
        },
        {
          value: "11.6%",
          danger: false,
        },
        {
          value: "-14.6%",
          danger: true,
        },
        {
          value: "-18.6%",
          danger: true,
        },
        {
          value: "-44.6%",
          danger: true,
        },
        {
          value: "99.6%",
          danger: false,
        },
        {
          value: "-44.6%",
          danger: true,
        },
        {
          value: "99.6%",
          danger: false,
        },
      ],
    },
    {
      title: "Rejection (# K Crops)",
      Data: [
        "427",
        "622",
        "412",
        "963",
        "112",
        "427",
        "622",
        "412",
        "963",
        "112",
      ],
    },
    {
      title: "Rejection Rate",
      Data: [
        "427",
        "622",
        "412",
        "963",
        "112",
        "427",
        "622",
        "412",
        "963",
        "112",
      ],
    },
    {
      title: "% evol",
      Data: [
        {
          value: "-11.6%",
          danger: false,
        },
        {
          value: "-8.6%",
          danger: false,
        },
        {
          value: "-4.6%",
          danger: false,
        },
        {
          value: "11.6%",
          danger: true,
        },
        {
          value: "-14.6%",
          danger: false,
        },
        {
          value: "-18.6%",
          danger: false,
        },
        {
          value: "-44.6%",
          danger: false,
        },
        {
          value: "99.6%",
          danger: true,
        },
        {
          value: "-44.6%",
          danger: false,
        },
        {
          value: "99.6%",
          danger: true,
        },
      ],
    },
    {
      title: "Prediction Accuracy",
      Data: [
        "427",
        "622",
        "412",
        "963",
        "112",
        "427",
        "622",
        "412",
        "963",
        "112",
      ],
    },
    // {
    //   title: "Prediction Accuracy",
    //   Date: [
    //     "427",
    //     "622",
    //     "412",
    //     "963",
    //     "112",
    //     "427",
    //     "622",
    //     "412",
    //     "963",
    //     "112",
    //   ],
    // },
  ]);
  return (
    <div>
      <table style={{ width: "100%" }} className="table">
        <tbody>
          {values.map((table, id) => (
            <tr key={id}>
              <th className="table-heading">
                {table.title}
                {table.head ? (
                  ""
                ) : (
                  <ErrorIcon fontSize="small" className="right" />
                )}
              </th>
              {table.head
                ? table.Data.map((d) => (
                    <th className="table-heading-2">{d}</th>
                  ))
                : table.Data.map((d) =>
                    table.title === "% evol" ? (
                      <td
                        className={
                          d.danger === true
                            ? "table-data-red"
                            : "table-data-green"
                        }
                      >
                        {d.value}
                      </td>
                    ) : (
                      <td className="table-data">{d}</td>
                    )
                  )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
