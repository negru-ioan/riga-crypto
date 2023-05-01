import React from "react";
import { Col, Typography, Select } from "antd";
import ExchangesTable from "./ExchangesTable";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import { Option } from "antd/lib/mentions";

const { Title } = Typography;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptosQuery(20);
  const [coinId, setCoinId] = React.useState("Qwsogvtv82FCd");

  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={2} style={{ textAlign: "center", marginTop: "25px" }}>
        Explore Cryptocurrency Exchanges
      </Title>
      <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
        <Select
          showSearch
          className="select-news"
          placeholder="Select a Crypto"
          optionFilterProp="children"
          onChange={(value, option) => setCoinId(option.key)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {data?.data?.coins?.map((currency) => (
            <Option key={currency.uuid} value={currency.name}>
              {currency.name}
            </Option>
          ))}
        </Select>
      </Col>
      <ExchangesTable coinId={coinId} />
    </>
  );
};

export default Exchanges;
