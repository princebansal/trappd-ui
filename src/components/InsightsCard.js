import { Card, Typography } from "antd";
import React from "react";
const { Title } = Typography;
class InsightsCard extends React.Component {
  render() {
    const { title, value } = this.props.cardDetails;
    console.log(this.props.counter);
    return (
      <div>
        <Card
          style={{ marginRight: "20px" }}
          className="InsightsCard"
          title={title}
          headStyle={{ border: "none" }}
          bodyStyle={{ paddingTop: 0, paddingBottom: "10px" }}
        >
          <Title level={4}>{value}</Title>
        </Card>
      </div>
    );
  }
}

export default InsightsCard;
