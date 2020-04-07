import { InfoCircleOutlined } from "@ant-design/icons";
import { List, Typography, Button } from "antd";
import React from "react";
const { Title } = Typography;

class MoreInformationContainer extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data && (
          <div>
            <div>
              <Button
                shape="circle"
                style={{
                  backgroundColor: "#f3f3f3",
                  border: "none"
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
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MoreInformationContainer;
