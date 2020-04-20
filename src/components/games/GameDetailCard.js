import { Card, Typography } from "antd";
import React from "react";
const { Text } = Typography;
class GameDetailCard extends React.Component {
  render() {
    const { title, detail } = this.props.cardDetails;
    return (
      <div style={{ marginTop: "20px" }}>
        <Card
          className="GameDetailCard"
          title={title}
          headStyle={{ border: "none" }}
          bodyStyle={{ paddingTop: 0, paddingBottom: "10px" }}
        >
          <div>
            <Text style={{ fontWeight: "bold" }}>How to play</Text>
          </div>
          <div>
            <Text>{detail}</Text>
          </div>
        </Card>
      </div>
    );
  }
}

export default GameDetailCard;
