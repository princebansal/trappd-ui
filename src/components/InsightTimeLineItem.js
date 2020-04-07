import { Col, Row, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;
class InsightTimeLineItem extends React.Component {
  render() {
    const { date, day, title, subtitle } = this.props.details;
    console.log(this.props.counter);
    return (
      <div>
        <Row>
          <Col span={4}>
            <div>
              <Text style={{ color: "#69BACC" }} level={4} strong>
                {date}
              </Text>
            </div>
            <div>
              <Text style={{ color: "#69BACC" }} level={4} strong>
                {day}
              </Text>
            </div>
          </Col>
          <Col>
            <Title level={3} style={{ marginBottom: 0 }}>
              {title}
            </Title>
            <Text level={4}>{subtitle}</Text>
          </Col>
        </Row>
      </div>
    );
  }
}

export default InsightTimeLineItem;
