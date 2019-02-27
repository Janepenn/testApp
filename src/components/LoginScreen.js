import React from "react";
import styled from "styled-components";
import {
  NavBar,
  NavIcon,
  HeadText,
  placeholderColor,
  underlineColor,
  LinearColor,
  Gradient
} from "../common/index";
import { Text, Image, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  headText: {
    marginLeft: 10,
    textAlignVertical: "bottom"
  },
  button: {
    height: 50
  },
  text: {
    color: "white"
  },
  input: {
    marginTop: 10
  },
  gradient: {
    borderRadius: 5
  }
});

const LoginContainer = styled.View`
  flex: 1;
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

const InputContainer = styled.View`
  justify-content: space-around;
  width: 100%;
`;

const LoginButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
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
          <BottomContainer>
            <InputContainer>
              <TextInput
                placeholder="Email"
                placeholderTextColor={placeholderColor}
                underlineColorAndroid={underlineColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={placeholderColor}
                underlineColorAndroid={underlineColor}
                secureTextEntry={true}
              />
            </InputContainer>
            <LoginButton style={styles.button}>
              <Gradient
                colors={LinearColor}
                angle={90}
                useAngle={true}
                style={styles.gradient}
              >
                <Text style={styles.text}>SIGN IN</Text>
              </Gradient>
            </LoginButton>
          </BottomContainer>
        </MainContainer>
      </LoginContainer>
    );
  }
}

export default LoginScreen;
