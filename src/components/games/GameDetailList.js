import { Col, Layout, Row, Spin, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";
import GameDetailCard from "./GameDetailCard";
const { Header, Content } = Layout;
const { Text } = Typography;

class GameDetailList extends React.Component {
  render() {
    const { quickGameData } = this.props;

    const { loading, error, data } = quickGameData;

    const { quickGameList: items } = data || {};
    return (
      <div>
        {!loading && error == null && data && (
          <Layout
            className="Layout"
            style={{ paddingLeft: "54px", paddingRight: "20px" }}
          >
            <Header className="LayoutHeader">
              <Row>
                <Col span={8}>
                  <Text strong className="Title">
                    Games
                  </Text>
                </Col>
                {/* <Col align="right" span={16}>
                  <Select
                    placeholder="Select category"
                    onChange={this.onGameCategoryChanged}
                  >
                    <Option>Tech</Option>
                    <Option>Non Tech</Option>
                    <Option>Group</Option>
                  </Select>
                </Col> */}
              </Row>
            </Header>
            <Content className="LayoutContent">
              <div>
                {items &&
                  items.map((card) => <GameDetailCard cardDetails={card} />)}
              </div>
            </Content>
          </Layout>
        )}
        <Spin style={{ marginLeft: "10px" }} spinning={loading} size="large" />
      </div>
    );
  }
}

const mapStateToProps = ({ home: { quickGameData } }) => ({
  quickGameData,
});
export default connect(mapStateToProps, null)(GameDetailList);
