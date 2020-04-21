import { CloseCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Result, Row, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";
import {
  loadGeo,
  loadHomePageDataV2,
  loadQuickGameData,
} from "../redux/actions/home/home";
import Dashboard from "./Dashboard";
import DetailPane from "./DetailPane";
import SelectRegionContainer from "./SelectRegionContainer";

const { Header, Footer, Content, Sider } = Layout;
const { Title, Text } = Typography;
class Home extends React.Component {
  state = {
    siderCollapsed: true,
    siderWidth: window.screen.availWidth,
  };
  componentDidMount() {
    this.props.loadGeo(this.props.country);
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
    const {
      geo,
      loadHomePageData,
      loadQuickGameData,
      homePageData,
      country,
      regionName,
    } = this.props;
    return (
      <div>
        <Layout className="Layout">
          <Header className="LayoutHeader">
            <Row>
              <Col align="center" span={24} className="HomePageBanner">
                <Text strong className="Title">
                  This website is under development. Please do not rely on the
                  given statistics.
                </Text>
              </Col>
            </Row>
          </Header>
          <Layout className="Layout" style={{ marginTop: "20px" }}>
            <Content className="LayoutContent">
              <div>
                <Row align="middle" className="HomeToolbar">
                  <Col xs={0} sm={0} md={1} lg={1}>
                    <Title level={2}>trappd</Title>
                  </Col>
                  <Col flex="auto">
                    <SelectRegionContainer
                      geo={geo}
                      onGeoChanged={(geoValue, geoType) => {
                        loadHomePageData(geoValue, geoType, country);
                        loadQuickGameData();
                      }}
                    />
                  </Col>
                </Row>
                {regionName !== null ? (
                  <Row>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 24 }}
                      md={{ span: 24 }}
                      lg={{ span: 16 }}
                      xl={{ span: 16 }}
                    >
                      <Dashboard
                        onHandleToggleDetailPane={this.toggleSider}
                        dashboardData={homePageData}
                        isLoading={homePageData.loading}
                        regionName={regionName}
                      />
                    </Col>

                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 0 }}
                      lg={{ span: 8 }}
                      xl={{ span: 8 }}
                    >
                      <DetailPane />
                    </Col>
                  </Row>
                ) : (
                  <Result
                    icon={<InfoCircleOutlined style={{ color: "#ededed" }} />}
                    extra={
                      <Title level={4} style={{ color: "#b0b0b0" }}>
                        Please select your city above
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

              {regionName != null ? <DetailPane /> : <div />}
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

const mapStateToProps = ({
  home: { geo, homePageData, country, regionName },
}) => ({
  geo,
  homePageData,
  country,
  regionName,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadGeo: (countryCode) => dispatch(loadGeo(countryCode)),
    loadHomePageData: (geoValue, geoType, countryCode) =>
      dispatch(loadHomePageDataV2(geoValue, geoType, countryCode)),
    loadQuickGameData: () => dispatch(loadQuickGameData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
