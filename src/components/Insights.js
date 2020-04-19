import { Layout, Spin, Typography } from "antd";
import React from "react";
import InsightsCardScrollable from "./InsightsCardScrollable";
import InsightsTimeline from "./InsightsTimeline";
const { Header, Content } = Layout;
const { Text } = Typography;

class Insights extends React.Component {
  render() {
    const { insightsData, regionName } = this.props;

    const { loading, error, data } = insightsData;

    return (
      <div>
        {!loading && error == null && (
          <Layout className="Layout" style={{ paddingLeft: "54px" }}>
            <Header className="LayoutHeader">
              <Text strong className="Title">
                {"All cases in " + regionName}
              </Text>
            </Header>
            <Content className="LayoutContent">
              <div>
                <InsightsCardScrollable
                  items={data.detailedData.dataInsights}
                />
                <InsightsTimeline items={data.detailedData.timeline} />
              </div>
            </Content>
          </Layout>
        )}
        <Spin style={{ marginLeft: "10px" }} spinning={loading} size="large" />
      </div>
    );
  }
}

export default Insights;
