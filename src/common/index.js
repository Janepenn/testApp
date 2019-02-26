import React from "react";
import { ActivityIndicator, Text, Modal } from "react-native";
import styled from "styled-components/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Image } from "react-native";
import CacheImage from "../CacheImage";
import { getCurrentLocale } from "../../utils/lang";

export const lightGrey = "#a1a1a1";

export const greyBackground = "#f4f5f8";

export const lightBlue = "#72A1F5";

export const lightRed = "#f57f66";

const greyText = "#767F88";

export const LoadingCover = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const VBox = styled.View`
  justify-content: ${props => props.v || "center"};
  align-items: ${props => props.h || "flex-start"};
  border-width: ${props => (props.bColor ? 1 : 0)};
  border-color: ${props => props.bColor || "black"};
`;

export const VBoxVT = VBox.extend`
  justify-content: flex-start;
`;

export const HBox = styled.View`
  flex-direction: row;
  justify-content: ${props => props.h || "flex-start"};
  align-items: ${props => props.v || "center"};
  border-width: ${props => (props.bColor ? 1 : 0)};
`;

export const HBoxVC = HBox.extend`
  align-items: center;
`;

export const HBoxVcHsb = HBoxVC.extend`
  align-items: center;
  justify-content: space-between;
`;

export const GreyText = styled.Text`
  color: ${greyText};
  font-size: 16px;
`;

export const LightGreyText = styled.Text`
  color: #a1a1a1;
  font-size: 16px;
`;

export const LargeGreyText = GreyText.extend`
  font-size: 18px;
`;

export const BlueText = GreyText.extend`
  color: ${lightBlue}
  font-size: 16px;
`;

export const DarkBlueText = GreyText.extend`
  color: #656b7f;
  font-size: 16px;
`;

export const LargeBlueText = GreyText.extend`
  color: ${lightBlue}
  font-size: 22px;
`;

const IconBackground = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

export class DefaultUserPhoto extends React.PureComponent {
  render() {
    const { size, uri, url } = this.props;
    console.log("try to display user photo ", this.props);
    const defaultUserPhoto = (
      <IconBackground>
        <SimpleLineIcons name="user" size={size || 32} color="grey" />
      </IconBackground>
    );

    return (
      <CacheImage
        {...this.props}
        style={{ height: 64, width: 64 }}
        defaultImage={defaultUserPhoto}
      />
    );
  }
}

export const LoadingView = () => (
  <Modal
    transparent={true}
    onRequestClose={() => console.log("loading closed")}
  >
    <LoadingCover>
      <ActivityIndicator size="large" color={lightBlue} />
    </LoadingCover>
  </Modal>
);

export const CoverView = props => (
  <Modal
    transparent={true}
    onRequestClose={() => console.log("loading closed")}
  >
    <LoadingCover>{props.children}</LoadingCover>
  </Modal>
);

const LoadingContainer = styled.View`
  height: 100%;
  background: #f0efef;
`;

export const LoadingWrapper = ({ loading, children }) => (
  <LoadingContainer>
    {children}
    {loading && <LoadingView />}
  </LoadingContainer>
);

const ItemContainer = HBoxVC.extend`
  justify-content: space-between;
  background-color: white;
  padding: 5px;
  margin: 0 10px;
  border-top-left-radius: ${props => (props.first ? "5px" : 0)};
  border-top-right-radius: ${props => (props.first ? "5px" : 0)};
`;

const ItemButton = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
`;

export class ListItem extends React.PureComponent {
  render() {
    const { item, first, onPress, selected } = this.props;
    const locale = getCurrentLocale();
    return (
      <ItemContainer first={first}>
        <ItemButton onPress={onPress}>
          {selected ? (
            <BlueText>{item.name || item[locale]}</BlueText>
          ) : (
            <GreyText>{item.name || item[locale]}</GreyText>
          )}
        </ItemButton>
        {selected ? <Entypo name="check" size={18} color={lightBlue} /> : null}
      </ItemContainer>
    );
  }
}

export const StyledHeader = styled.View`
  flex-direction: row;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
`;

const ButtonContainer = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const Button = ({ label, onPress, color }) => (
  <ButtonContainer
    onPress={onPress}
    style={{ backgroundColor: color || lightBlue }}
  >
    <Text style={{ color: "white" }}>{label}</Text>
  </ButtonContainer>
);
