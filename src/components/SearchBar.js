import React from "react";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
import SearchCard from "./SearchCard";
import { Select, Typography, Row, Col, Avatar, Card, Button } from "antd";
import moment from "moment";
import { Space, Spin } from "antd";
const { Text, Title } = Typography;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [results, setResults] = React.useState([]);

  const onSubmit = async () => {
    console.log("THIS WAS CLICKED");

    setLoading(true);
    try {
      const response = await axios.request({
        method: "GET",
        url: "https://bing-web-search1.p.rapidapi.com/search",
        params: {
          q: searchQuery,
          mkt: "en-us",
          safeSearch: "Off",
          textFormat: "Raw",
          freshness: "Day",
        },
        headers: {
          "content-type": "application/octet-stream",
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "4d29c11990mshc5c91615a5d414ep1dce51jsnd0e89cd6162d",
          "X-RapidAPI-Host": "bing-web-search1.p.rapidapi.com",
        },
      });
      setResults(response.data.value);
      //   console.log("SEARCH RESULTS ->");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log(results);
    }
  };

  return (
    <>
      <Title level={3}>Client for Bing Search API</Title>
      <input
        type="text"
        placeholder="Search something"
        style={{ padding: "10px", margin: "10px", border: "solid black 2px" }}
        onChange={(event) => setSearchQuery(event.target.value)}
      ></input>

      <Button
        type="primary"
        shape="circle"
        icon={<SearchOutlined />}
        onClick={onSubmit}
      />
      {loading && (
        <h1>
          <Spin size="large" />
        </h1>
      )}
      {/* {results.map((res) => (
        <SearchCard prop={res}/>
      ))} */}
      <Row gutter={[100, 100]} style={{margin:"50px 20px"}}>
        {results.map((result, i) => (
          <Col xs={24} sm={12} lg={6} key={i}>
            <Card hoverable className="news-card">
              <a href={result.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {result.name.substring(0, 40)}...
                  </Title>
                  <img
                    src={result?.image?.thumbnail?.contentUrl || demoImage}
                    alt=""
                  />
                </div>
                <p>
                  {result.description.length > 100
                    ? `${result.description.substring(0, 100)}...`
                    : result.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        result.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt=""
                    />
                    <Text className="provider-name">
                      {result.provider[0]?.name.substring(0, 12)}
                    </Text>
                  </div>
                  <Text>
                    {moment(result.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SearchBar;
