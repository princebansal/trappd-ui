import { Col, Layout, message, Row } from "antd";
import React from "react";
import DataInsightsCard from "./DataInsightsCard";
import GamesCard from "./games/GamesCard";
import MoreInformationContainer from "./MoreInformationContainer";
const { Content } = Layout;

class Dashboard extends React.Component {
  showError = (msg) => {
    message.error(msg);
  };
  render() {
    const { onHandleToggleDetailPane, dashboardData } = this.props;
    const { error } = dashboardData;
    return (
      <div className="Dashboard">
        {error == null && (
          <Layout className="Layout">
            <Content className="DashboardLayoutContent">
              <Row gutter={[24, 24]}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                  xl={{ span: 12 }}
                >
                  <DataInsightsCard
                    onInsightsButtonClicked={onHandleToggleDetailPane}
                  />
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                  xl={{ span: 12 }}
                >
                  <GamesCard onHowToPlayClicked={onHandleToggleDetailPane} />
                </Col>
              </Row>
              <Layout className="Layout">
                <Content style={{ marginTop: "40px", padding: "10px" }}>
                  <MoreInformationContainer />
                </Content>
              </Layout>
            </Content>
          </Layout>
        )}
        {error && this.showError(error)}
      </div>
    );
  }
}

export default Dashboard;
