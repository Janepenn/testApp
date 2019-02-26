import React from "react";
import styled from "styled-components";
import { NavBar, NavIcon, HeadText } from "../common/index";
import { Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headText: {
    marginLeft: 10,
    textAlignVertical: "bottom"
  }
});

const LoginContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px 15px;
  background-color: white;
`;

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const TopContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  width: 100%;
`;

const BottomContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.Image``;

const Header = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
`;

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginContainer>
        <NavBar>
          <NavIcon source={require("../images/nav_pre.png")} />
        </NavBar>
        <MainContainer>
          <TopContainer>
            <Logo source={require("../images/IndoRHcare.png")} />
            <Header>
              <Image source={require("../images/maternity.png")} />
              <HeadText style={styles.headText}>Materity</HeadText>
            </Header>
          </TopContainer>
          <BottomContainer />
        </MainContainer>
      </LoginContainer>
    );
  }
}

export default LoginScreen;
