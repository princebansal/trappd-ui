import { Card, Layout, Typography, Button, Avatar } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import React from "react";
const { Text, Title } = Typography;
const { Content, Footer } = Layout;
class ThingsToDoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }
  handleButtonClick = event => {
    console.log(event);
    const { items } = this.props;
    this.setState({
      currentIndex: Math.floor(Math.random() * items.length)
    });
  };

  render() {
    const { currentIndex } = this.state;
    const { city, items, isLoading } = this.props;
    return (
      <div>
        <Card
          className="ThingsToDoCard"
          style={{ position: "relative" }}
          loading={isLoading}
          headStyle={{ border: "none" }}
          bodyStyle={
            !isLoading
              ? {
                  padding: 0,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  left: 0
                }
              : {}
          }
          title={
            <Avatar
              src="thingsToDoCard.png"
              style={{
                backgroundColor: "transparent",
                backgroundImage: "none",
                width: "100px",
                height: "100px",
                opacity: "0.2"
              }}
            />
          }
        >
          {items && (
            <Layout className="Layout NoBg">
              <Content
                style={{
                  padding: "24px"
                }}
              >
                <div>
                  <Text
                    style={{
                      opacity: 0.67,
                      color: "white"
                    }}
                  >
                    {"Things to do when you're in " + city}
                  </Text>
                  <Title level={2} style={{ color: "white", marginTop: "5px" }}>
                    {items[currentIndex]}
                  </Title>
                </div>
              </Content>
              <Footer
                className="LayoutFooter"
                style={{ backgroundColor: "#3B5FBC", padding: "12px 24px" }}
              >
                <Text
                  style={{
                    opacity: 0.67,
                    color: "white",
                    display: "inline-block"
                  }}
                >
                  What else can I do?
                  <Button
                    shape="circle"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#6186E6",
                      border: "none"
                    }}
                    icon={<SyncOutlined style={{ color: "white" }} />}
                    onClick={this.handleButtonClick}
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

export default ThingsToDoCard;
