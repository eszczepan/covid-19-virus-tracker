import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { CasesTypeContext } from "../../../context";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll ",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const StyledTitle = styled.h3`
  margin-bottom: 2.5rem;
  text-align: center;
`;

const StyledDiv = styled.div`
  min-height: 20rem;
`;

const LineGraph = () => {
  const [data, setData] = useState({});
  const { cases } = useContext(CasesTypeContext);
  const [casesType] = cases;

  const buildChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => response.json())
        .then((data) => {
          const chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };
    fetchData();
  }, [casesType]);

  return (
    <>
      <StyledTitle>WorldWide new {casesType}</StyledTitle>
      <StyledDiv>
        {data?.length > 0 && (
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: "rgba(204, 16, 52, 0.4)",
                  borderColor: "#CC1034",
                  data: data,
                },
              ],
            }}
            options={options}
          />
        )}
      </StyledDiv>
    </>
  );
};

export default LineGraph;
