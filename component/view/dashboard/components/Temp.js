import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Area } from "@ant-design/plots";
import { Button } from "antd";

export default function TempComp() {
  let [data, setData] = useState([
    {
      Date: "2010-01",
      scales: 1998,
    },
    {
      Date: "2010-02",
      scales: 1850,
    },
    {
      Date: "2010-03",
      scales: 1720,
    },
    {
      Date: "2010-04",
      scales: 1818,
    },
    {
      Date: "2010-05",
      scales: 1920,
    },
    {
      Date: "2010-06",
      scales: 1802,
    },
    {
      Date: "2010-07",
      scales: 1945,
    },
    {
      Date: "2010-08",
      scales: 1856,
    },
    {
      Date: "2010-09",
      scales: 2107,
    },
    {
      Date: "2010-10",
      scales: 2140,
    },
    {
      Date: "2010-11",
      scales: 2311,
    },
    {
      Date: "2010-12",
      scales: 1972,
    },
    {
      Date: "2011-01",
      scales: 1760,
    },
    {
      Date: "2011-02",
      scales: 1824,
    },
  ]);

  const config = {
    data,
    xField: "Date",
    yField: "scales",
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
  };

  return (
    <>
      <Area {...config} />
      <Button
        onClick={() => {
          let val = {
            Date: "2011-02",
            scales: 1824,
          };
          data.push(val);
          setData(data);
        }}
      >
        Click
      </Button>
    </>
  );
}
