import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, timeperiod }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 4) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    let date = new Date(coinHistory?.data?.history[i].timestamp * 1000);
    if (timeperiod.includes("h")) {
      date = `${date.getHours()}:${date.getMinutes()}`;
    } else {
      date = `${date.getDay()}/${date.toLocaleString("default", {
        month: "short",
      })}`;
    }
    coinTimestamp.push(date);
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change:{" "}
            <span
              className={
                coinHistory?.data?.change < 0 ? "light-red" : "light-green"
              }
            >
              {coinHistory?.data?.change}%
            </span>
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
