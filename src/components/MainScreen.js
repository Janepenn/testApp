import React from "react";
import styled from "styled-components/native";
import { Text, Image } from "react-native";

const MainContainer = styled.View`
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Background = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MenuRow = styled.View`
  flex: 1;
  width: 80%;
  flex-direction: row;
  justify-content: center;
`;

const TabContainer = styled.TouchableOpacity`
  justify-content: space-around;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 10px;
  margin: 5px;
  width: 50%;
`;

const MenuContainer = styled.View`
  width: 100%;
  height: 65%;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const menus = [
  { title: "Pediatra", image: require("../images/pediatra.png") },
  { title: "Elderly", image: require("../images/elderly.png") },
  { title: "Maternity", image: require("../images/maternity.png") },
  {
    title: "Early Detection Cancer",
    image: require("../images/detection.png")
  },
  { title: "Cardiac Problem", image: require("../images/cardiac.png") },
  { title: "Remote Health", image: require("../images/remote.png") }
];

const Tab = ({ menu }) => {
  return (
    <TabContainer>
      <Image source={menu.image} />
      <Text>{menu.title}</Text>
    </TabContainer>
  );
};

const MainScreen = props => {
  return (
    <MainContainer>
      <Background source={require("../images/background.png")} />
      <MenuContainer>
        <MenuRow>
          <Tab menu={menus[0]} />
          <Tab menu={menus[1]} />
        </MenuRow>
        <MenuRow>
          <Tab menu={menus[2]} />
          <Tab menu={menus[3]} />
        </MenuRow>
        <MenuRow>
          <Tab menu={menus[4]} />
          <Tab menu={menus[5]} />
        </MenuRow>
      </MenuContainer>
    </MainContainer>
  );
};

export default MainScreen;
