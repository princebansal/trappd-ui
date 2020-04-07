import { Timeline } from "antd";
import React from "react";
import InsightTimeLineItem from "./InsightTimeLineItem";
class InsightsTimeline extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div style={{ marginTop: "20px" }}>
        <Timeline mode="left">
          {items.map(timelineItem => (
            <Timeline.Item color="#69BACC">
              <InsightTimeLineItem details={timelineItem} />
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    );
  }
}

export default InsightsTimeline;
