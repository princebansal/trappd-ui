import { Col, Layout, message, Row } from "antd";
import React from "react";
import DataInsightsCard from "./DataInsightsCard";
import MoreInformationContainer from "./MoreInformationContainer";
import ThingsToDoCard from "./ThingsToDoCard";
const { Content } = Layout;

class Dashboard extends React.Component {
  showError = (msg) => {
    message.error(msg);
  };
  render() {
    const { onInsightsButtonClicked, dashboardData, regionName } = this.props;
    const { loading, error, data } = dashboardData;
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
                    onInsightsButtonClicked={onInsightsButtonClicked}
                    data={data != null ? data.dashboard.dataInsightsCard : null}
                    city={regionName}
                    isLoading={loading}
                  />
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                  xl={{ span: 12 }}
                >
                  <ThingsToDoCard
                    items={
                      data != null ? data.dashboard.thingsToDoCard.items : null
                    }
                    city={regionName}
                    isLoading={loading}
                  />
                </Col>
              </Row>
              <Layout className="Layout">
                <Content style={{ marginTop: "40px" }}>
                  <MoreInformationContainer
                    data={data != null ? data.dashboard.moreInformation : null}
                  />
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
