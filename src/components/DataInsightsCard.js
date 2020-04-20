import { ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Layout, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";
import { changeActiveDetailPane } from "../redux/actions/home/home";
const { Text, Title } = Typography;
const { Content, Footer } = Layout;
class DataInsightsCard extends React.Component {
  render() {
    const { homePageData, regionName } = this.props;
    const { loading: isLoading, data } = homePageData;

    const dataInsightsCard =
      data != null ? data.dashboard.dataInsightsCard : null;

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
              {dataInsightsCard != null ? dataInsightsCard.date : "-"}
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
          {dataInsightsCard && (
            <Layout className="Layout NoBg">
              <Content
                style={{
                  padding: "24px",
                }}
              >
                {dataInsightsCard.items.map((item) => (
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
                style={{ backgroundColor: "#3BA5BC", padding: "12px 24px" }}
              >
                <Text
                  style={{
                    opacity: 0.67,
                    color: "white",
                    display: "inline-block",
                  }}
                >
                  {"View all cases in " + regionName}
                  <Button
                    className="DataInsightsCardFooterMobile"
                    shape="circle"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#59BCD2",
                      border: "none",
                    }}
                    icon={<ArrowRightOutlined style={{ color: "white" }} />}
                    onClick={this.props.onInsightsButtonClicked}
                  />
                  <Button
                    className="DataInsightsCardFooterDesktop"
                    shape="circle"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#59BCD2",
                      border: "none",
                    }}
                    icon={<ArrowRightOutlined style={{ color: "white" }} />}
                    onClick={this.props.setActiveDetailPaneToInsights}
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
const mapDispatchToProps = (dispatch) => {
  return {
    setActiveDetailPaneToInsights: () =>
      dispatch(changeActiveDetailPane("insights")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DataInsightsCard);
