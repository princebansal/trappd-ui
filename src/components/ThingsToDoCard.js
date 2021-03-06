import { SyncOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Layout, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";
const { Text, Title } = Typography;
const { Content, Footer } = Layout;
class ThingsToDoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  handleButtonClick = (event) => {
    const { items } = this.props.homePageData.data.dashboard.thingsToDoCard;
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: currentIndex + 1 > items.length - 1 ? 0 : currentIndex + 1,
    });
  };

  render() {
    const { currentIndex } = this.state;
    const { homePageData, regionName } = this.props;
    const { loading: isLoading, data } = homePageData;

    const thingsToDoCard = data != null ? data.dashboard.thingsToDoCard : null;
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
                  left: 0,
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
                opacity: "0.2",
              }}
            />
          }
        >
          {thingsToDoCard && (
            <Layout className="Layout NoBg">
              <Content
                style={{
                  padding: "24px",
                }}
              >
                <div>
                  <Text
                    style={{
                      opacity: 0.67,
                      color: "white",
                    }}
                  >
                    {"Things to do when you're in " + regionName}
                  </Text>
                  <Title level={2} style={{ color: "white", marginTop: "5px" }}>
                    {thingsToDoCard.items[currentIndex]}
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
                    display: "inline-block",
                  }}
                >
                  What else can I do?
                  <Button
                    shape="circle"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#6186E6",
                      border: "none",
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

const mapStateToProps = ({ home: { homePageData, country, regionName } }) => ({
  homePageData,
  country,
  regionName,
});
export default connect(mapStateToProps, null)(ThingsToDoCard);
