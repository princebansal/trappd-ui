import { Col, Layout, Row, Button, Typography, Divider, Result } from "antd";
import React from "react";
import { connect } from "react-redux";
import { loadCities, loadHomePageData } from "../redux/actions/home/home";
import Dashboard from "./Dashboard";

import { CloseCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Insights from "./Insights";
import SelectCityContainer from "./SelectCityContainer";

const { Header, Footer, Content, Sider } = Layout;
const { Title } = Typography;
class Home extends React.Component {
  state = {
    siderCollapsed: true,
    siderWidth: window.screen.availWidth,
  };
  componentDidMount() {
    this.props.loadCities(this.props.country);
  }

  toggleSider = () => {
    this.setState({
      siderCollapsed: !this.state.siderCollapsed,
      siderWidth: window.screen.availWidth,
    });
  };
  onSiderCloseClicked = () => {
    this.setState({
      siderCollapsed: true,
    });
  };

  render() {
    const { siderCollapsed, siderWidth } = this.state;
    const { cities, loadHomePageData, homePageData, country } = this.props;
    console.log(this.props.counter);
    return (
      <div className="Home">
        <Layout className="Layout">
          <Header className="LayoutHeader">
            <div className="logo">
              <Title level={1}>
                <Divider type="vertical" style={{ height: "30px" }} />
                trappd
              </Title>

              <Divider type="vertical" />
            </div>
          </Header>
          <Layout className="Layout" style={{ marginTop: "20px" }}>
            <Content className="LayoutContent">
              <div>
                <SelectCityContainer
                  cities={cities}
                  onCityChanged={(city) => loadHomePageData(city, country)}
                />
                {homePageData.data != null || homePageData.loading ? (
                  <Row>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 24 }}
                      md={{ span: 24 }}
                      lg={{ span: 16 }}
                      xl={{ span: 16 }}
                    >
                      <Dashboard
                        onInsightsButtonClicked={this.toggleSider}
                        dashboardData={homePageData}
                        isLoading={homePageData.loading}
                      />
                    </Col>

                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 0 }}
                      lg={{ span: 8 }}
                      xl={{ span: 8 }}
                    >
                      <Insights insightsData={homePageData} />
                    </Col>
                  </Row>
                ) : (
                  <Result
                    icon={<InfoCircleOutlined style={{ color: "#ededed" }} />}
                    extra={
                      <Title level={4} style={{ color: "#b0b0b0" }}>
                        {homePageData.error != null
                          ? homePageData.error
                          : "Please select your city above"}
                      </Title>
                    }
                  />
                )}
              </div>
            </Content>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              className="InsightsSider"
              trigger={null}
              collapsible
              collapsed={siderCollapsed}
              width={siderWidth}
              onCollapse={(collapse, type) => {
                console.log(collapse, type);
              }}
              style={{
                display: siderCollapsed ? "none" : "block",
              }}
            >
              <Button
                shape="circle"
                style={{
                  border: "none",
                  backgroundColor: "#f3f3f3",
                  marginLeft: "20px",
                }}
                icon={<CloseCircleOutlined style={{ color: "black" }} />}
                onClick={this.onSiderCloseClicked}
              />

              {homePageData.data && <Insights insightsData={homePageData} />}
            </Sider>
          </Layout>

          <Footer
            className={
              homePageData.data != null || homePageData.loading
                ? "MainFooter"
                : "MainFooterSticky"
            }
          >
            © The Easy Company Product
          </Footer>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = ({ home: { cities, homePageData, country } }) => ({
  cities,
  homePageData,
  country,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadCities: (countryCode) => dispatch(loadCities(countryCode)),
    loadHomePageData: (cityCode, countryCode) =>
      dispatch(loadHomePageData(cityCode, countryCode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
