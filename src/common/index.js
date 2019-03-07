import React from "react";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";

export const placeholderColor = "#83868E";

export const underlineColor = "#2AA1D1";

export const LinearColor = [underlineColor, "#1186B6"];

export const NavIcon = styled.Image`
  width: 14px;
  height: 23px;
`;

export const NavBar = styled.View`
  width: 100%;
  height: 30px;
`;

export const HeadText = styled.Text`
  color: #2aa1d1;
  font-size: 30px;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
