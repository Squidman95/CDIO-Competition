import React from "react";
import Card from "../Card/Card";
import "./ShowResults.scss";
import ReactApexChart from "react-apexcharts";

const ShowResults = (props) => {
  let { groups = [] } = props;

  let sortedGroups = groups
    .sort((a, b) => a.solves.length - b.solves.length - 0.01 * a.groupid)
    .reverse();

  let state = {
    series: [
      {
        data: sortedGroups.map((group, index) => group.solves.length),
        // data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 380,
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: groups.map((group, index) => group.color),
      //   colors: [
      //     "#33b2df",
      //     "#546E7A",
      //     "#d4526e",
      //     "#13d8aa",
      //     "#A5978B",
      //     "#2b908f",
      //     "#f9a3a4",
      //     "#90ee7e",
      //     "#f48024",
      //     "#69d2e7",
      //   ],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex]; // return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: groups.map(
          (group) =>
            `Group ${group.groupid} - ${group.solves.map(
              (elem) => elem.solitaireid
            )}`
        ),
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: "Results",
        align: "center",
        floating: true,
      },
      subtitle: {
        text: "",
        align: "center",
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
    },
  };

  return (
    <div className="ShowResults-Graph">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={450}
      />
      {/* {groups.map((group, index) => {
        return (
          <Card
            groupID={group.groupid}
            imageSrc="/assets/images/icons/cat-icon.png"
            header={`Group ${group.groupid}`}
            subtext={group.solves.length}
          />
        );
      })} */}
    </div>
  );
};

export default ShowResults;
