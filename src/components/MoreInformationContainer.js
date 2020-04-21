import { InfoCircleOutlined } from "@ant-design/icons";
import { List, Typography, Button, Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
const { Title } = Typography;

class MoreInformationContainer extends React.Component {
  render() {
    const { homePageData } = this.props;

    const data =
      homePageData.data != null
        ? homePageData.data.dashboard.moreInformation
        : null;
    return (
      <div>
        {data && (
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 16 }}
              xl={{ span: 16 }}
            >
              <div>
                <Button
                  shape="circle"
                  style={{
                    backgroundColor: "#f3f3f3",
                    border: "none",
                  }}
                  icon={<InfoCircleOutlined style={{ color: "black" }} />}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <Title level={3}>{data.title}</Title>
                <Title level={4}>{data.heading}</Title>
                <List
                  size="large"
                  dataSource={data.instructions}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </div>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ home: { homePageData } }) => ({
  homePageData,
});
export default connect(mapStateToProps, null)(MoreInformationContainer);
