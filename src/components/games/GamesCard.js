import { SyncOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Layout, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";
import { changeActiveDetailPane } from "../../redux/actions/home/home";
const { Text, Title } = Typography;
const { Content, Footer } = Layout;
class GamesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  handleButtonClick = (event) => {
    const {
      data: { quickGameList: items },
    } = this.props.quickGameData;
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: currentIndex + 1 > items.length - 1 ? 0 : currentIndex + 1,
    });
  };

  handleHowToPlayClicked = (event) => {
    this.props.setActiveDetailPaneToGames();
  };

  render() {
    const { currentIndex } = this.state;
    const { quickGameData } = this.props;
    const { isLoading, data } = quickGameData;
    const { quickGameList: items } = data || {};
    return (
      <div>
        <Card
          className="GamesCard"
          style={{ position: "relative" }}
          loading={isLoading}
          headStyle={{ border: "none" }}
          bodyStyle={
            !isLoading
              ? {
                  padding: 0,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  left: 0,
                }
              : {}
          }
          title={
            <Avatar
              src="gamesCard.png"
              style={{
                backgroundColor: "transparent",
                backgroundImage: "none",
                width: "100px",
                height: "100px",
                opacity: "0.2",
              }}
            />
          }
        >
          {items && (
            <Layout className="Layout NoBg">
              <Content
                style={{
                  padding: "24px",
                }}
              >
                <div>
                  <Text
                    style={{
                      opacity: 0.67,
                      color: "white",
                    }}
                  >
                    Games to play
                  </Text>
                  <Title level={2} style={{ color: "white", marginTop: "5px" }}>
                    {items[currentIndex].title}
                  </Title>
                </div>
                <div>
                  <Button
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#6186E6",
                      border: "none",
                      color: "white",
                      borderRadius: 20,
                    }}
                    onClick={this.handleHowToPlayClicked}
                  >
                    How to play
                  </Button>
                </div>
              </Content>
              <Footer
                className="LayoutFooter"
                style={{ backgroundColor: "#3B5FBC", padding: "12px 24px" }}
              >
                <Text
                  style={{
                    opacity: 0.67,
                    color: "white",
                    display: "inline-block",
                  }}
                >
                  Tell me another game
                  <Button
                    shape="circle"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#6186E6",
                      border: "none",
                    }}
                    icon={<SyncOutlined style={{ color: "white" }} />}
                    onClick={this.handleButtonClick}
                  />
                </Text>
              </Footer>
            </Layout>
          )}
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ home: { quickGameData } }) => ({
  quickGameData,
});
const mapDispatchToProps = (dispatch) => {
  return {
    setActiveDetailPaneToGames: () => dispatch(changeActiveDetailPane("games")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GamesCard);
