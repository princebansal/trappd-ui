import { ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Layout, Typography } from "antd";
import React from "react";
const { Text, Title } = Typography;
const { Content, Footer } = Layout;
class DataInsightsCard extends React.Component {
  render() {
    const { data, city, isLoading } = this.props;
    return (
      <div>
        <Card
          className="DataInsightCard"
          loading={isLoading}
          style={{ position: "relative" }}
          headStyle={{ border: "none" }}
          bodyStyle={
            !isLoading
              ? {
                  padding: 0,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  left: 0,
                }
              : {}
          }
          extra={
            <Text
              style={{
                borderRadius: "29px",
                borderStyle: "none",
                backgroundColor: "#99CFDA",
                padding: "10px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {data != null ? data.date : "-"}
            </Text>
          }
          title={
            <Avatar
              src="dataInsightsCard.png"
              style={{
                backgroundColor: "transparent",
                backgroundImage: "none",
                width: "100px",
                height: "100px",
                opacity: "0.4",
              }}
            />
          }
        >
          {data && (
            <Layout className="Layout NoBg">
              <Content
                style={{
                  padding: "24px",
                }}
              >
                {data.items.map((item) => (
                  <div>
                    <Text style={{ opacity: 0.67, color: "white" }}>
                      {item.title}
                    </Text>
                    <Title
                      level={2}
                      style={{ color: "white", marginTop: "5px" }}
                    >
                      {item.value}
                    </Title>
                  </div>
                ))}
              </Content>
              <Footer
                className="DataInsightsCardFooter"
                style={{ backgroundColor: "#3BA5BC", padding: "12px 24px" }}
              >
                <Text
                  style={{
                    opacity: 0.67,
                    color: "white",
                    display: "inline-block",
                  }}
                >
                  {"View all cases in" + city}
                  <Button
                    shape="circle"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#59BCD2",
                      border: "none",
                    }}
                    icon={<ArrowRightOutlined style={{ color: "white" }} />}
                    onClick={this.props.onInsightsButtonClicked}
                  />
                </Text>
              </Footer>
            </Layout>
          )}
        </Card>
      </div>
    );
  }
}

export default DataInsightsCard;
