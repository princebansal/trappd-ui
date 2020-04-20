import { message } from "antd";
import React from "react";
import { connect } from "react-redux";
import GameDetailList from "./games/GameDetailList";
import Insights from "./insights/Insights";

class DetailPane extends React.Component {
  showError = (msg) => {
    message.error(msg);
  };
  render() {
    const { activeDetailPane } = this.props;
    return (
      <div>
        {{
          insights: <Insights />,
          games: <GameDetailList />,
        }[activeDetailPane] || <div />}
      </div>
    );
  }
}

const mapStateToProps = ({ home: { activeDetailPane } }) => ({
  activeDetailPane,
});
export default connect(mapStateToProps, null)(DetailPane);
