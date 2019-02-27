import React from "react";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";

export const placeholderColor = "#8F9093";

export const underlineColor = "#787CFD";

export const LinearColor = [underlineColor, "#5E8FFD"];

export const NavIcon = styled.Image`
  width: 14px;
  height: 23px;
`;

export const NavBar = styled.View`
  width: 100%;
  height: 30px;
`;

export const HeadText = styled.Text`
  color: #7480fd;
  font-size: 27px;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
