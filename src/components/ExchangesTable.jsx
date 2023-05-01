import React from "react";
import { Table, Col } from "antd";
import { useGetCoinExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import millify from "millify";

function ExchangesTable({ coinId }) {
  const { data, isFetching } = useGetCoinExchangesQuery(coinId);
  const exchanges = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  const dataa = exchanges.map((e, index) => ({
    key: index,
    // col1: e.rank,
    col2: (
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img src={e.iconUrl} style={{ maxHeight: "30px" }} />
        {e.name}
      </div>
    ),
    col3:
      "$" +
      (e.price < 100 && e.price > 10
        ? (e.price * 1).toFixed(2)
        : e.price > 10
        ? Math.floor(e.price)
        : (e.price * 1).toFixed(4)),
    col4: e.numberOfMarkets,
    col5: (e.btcPrice * 1).toPrecision(3),
  }));

  const colummns = [
    // {
    //   title: 'Rank',
    //   dataIndex: 'col1',
    //   key: 'col1',
    //   width: '5%',
    // },
    {
      title: "Name",
      dataIndex: "col2",
      key: "col2",
      width: "20%",
    },
    {
      title: "Price",
      dataIndex: "col3",
      key: "col3",
    },
    {
      title: "Markets",
      dataIndex: "col4",
      key: "col4",
    },
    {
      title: "Btc_Price",
      dataIndex: "col5",
      key: "col5",
    },
  ];

  return (
    <Col style={{ overflow: "auto", marginTop: "40px" }}>
      <Table columns={colummns} dataSource={dataa} />;
    </Col>
  );
}

export default ExchangesTable;
