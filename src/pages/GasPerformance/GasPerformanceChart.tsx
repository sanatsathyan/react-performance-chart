import { useContext } from "react";

import moment from "moment";
import { Options } from "highcharts";
import { PerformanceChart } from "../../components/PerformanceChart/PerformanceChart";
import { PerformanceContext } from "../../helpers/Context";
import { IGasPerformance } from "../../data/iMock";

const options: Options = {
  chart: {
    zoomType: "xy",
    backgroundColor: "#303030",
    height: 210,
  },
  credits: {
    enabled: false,
  },
  title: undefined,
  subtitle: undefined,
  yAxis: [
    {
      // Primary yAxis
      labels: {
        format: "{value}",
        style: {
          color: "#aaaaaa",
        },
      },
      title: {
        text: null,
        style: {
          color: "#aaaaaa",
        },
      },
      opposite: true,
    },
    {
      // Secondary yAxis
      title: {
        text: null,
        style: {
          color: "#aaaaaa",
        },
      },
      labels: {
        format: "{value}thm",
        style: {
          color: "#aaaaaa",
        },
      },
    },
    {
      // Tertiary yAxis
      gridLineWidth: 1,
      gridLineColor: "#777777",
      title: {
        text: null,
        style: {
          color: "#aaaaaa",
        },
      },
      labels: {
        //format: "${value}K",
        formatter: function (object) {
          const formattedValue = parseInt(object.value.toString()) / 1000;
          return formattedValue === 0
            ? "$" + formattedValue
            : "$" + formattedValue + "K";
        },
        style: {
          color: "#aaaaaa",
        },
      },
      opposite: true,
    },
  ],
  tooltip: {
    shared: true,
  },
  legend: {
    layout: "horizontal",
    align: "center",
    x: 0,
    verticalAlign: "bottom",
    y: 0,
    floating: false,
    itemStyle: { color: "#aaaaaa" },
    itemHoverStyle: { color: "#dddddd" },
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            floating: false,
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
            x: 0,
            y: 0,
          },
          yAxis: [
            {
              labels: {
                align: "right",
                x: 0,
                y: -6,
              },
              showLastLabel: false,
            },
            {
              labels: {
                align: "left",
                x: 0,
                y: -6,
              },
              showLastLabel: false,
            },
            {
              visible: false,
            },
          ],
        },
      },
    ],
  },
};

export const GasPerformanceChart = () => {
  const apiContext = useContext<IGasPerformance>(PerformanceContext);

  const monthwiseAggregations =
    apiContext.regions[0].facilities[0].monthwiseAggregations;

  options.xAxis = [
    {
      categories: monthwiseAggregations.map((item) =>
        moment(item.monthStartDate).format("MMM")
      ),
      crosshair: true,
    },
  ];

  options.series = [
    {
      name: "thm Baseline",
      type: "column",
      yAxis: 1,
      color: "#606062",
      borderWidth: 0,
      data: monthwiseAggregations.map((item) => item.baselineConsumption),
      tooltip: {
        valueSuffix: "thm",
      },
    },
    {
      name: "thm Actual",
      type: "column",
      yAxis: 1,
      color: "#1371b4",
      borderWidth: 0,
      data: monthwiseAggregations.map((item) => item.actualConsumption),
      tooltip: {
        valueSuffix: "thm",
      },
    },
    {
      name: "Baseline Cost",
      type: "line",
      dashStyle: "ShortDash",
      yAxis: 2,
      color: "#a1762b",
      data: monthwiseAggregations.map((item) => item.baselineCost),
      tooltip: {
        valuePrefix: "$",
      },
    },
    {
      name: "Actual Cost",
      type: "line",
      yAxis: 2,
      color: "#e5a743",
      data: monthwiseAggregations.map((item) => item.actualCost),
      tooltip: {
        valueSuffix: "$",
      },
    },
  ];

  console.log(monthwiseAggregations);

  return <PerformanceChart options={options} />;
};
