import React from "react";
import InsightsCard from "./InsightsCard";
class InsightsCardScrollable extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div
        style={{ overflowX: "scroll", display: "flex" }}
        className="HideScrollbar"
      >
        {items.map(card => (
          <InsightsCard cardDetails={card} />
        ))}
      </div>
    );
  }
}

export default InsightsCardScrollable;
