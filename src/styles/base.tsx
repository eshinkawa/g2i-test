import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Colors = {
  white: '#fff',
  green: '#19ab53',
  lightGreen: '#51c07d',
  darkGreen: '#009a46',
  headerGreen: '#00ac4f',
  grey: '#7f8788',
  lightGrey: '#ACA9A5',
  whiteGrey: '#eee',
  black: '#17171A',
  yellow: '#fcc729',
  orange: '#FDB933',
  pink: '#FE0061',
  actionBlue: '#00adef'
};

export const FontStyles = {
  light: 'OpenSans-Light',
  regular: 'OpenSans-Regular',
  semiBold: 'OpenSans-SemiBold',
  bold: 'OpenSans-Bold',
  extraBold: 'OpenSans-ExtraBold',
};

export const FontSize = {
  XSmall: 12,
  Small: 14,
  Medium: 16,
  Large: 18,
  XLarge: 24,
  XXLarge: 30,
};

export const Spacing = {
  XSmall: 4,
  Small: 8,
  Medium: 16,
  Large: 24,
  XLarge: 32,
};

const CenteredContainerStr = `
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CenteredContainer = styled.View`
  ${CenteredContainerStr};
  background-color: ${(props: string) => props.bgColor || Colors.white};
`;

export const SafeAreaContainer = styled.SafeAreaView`
  ${CenteredContainerStr};
  background-color: ${(props: string) => props.bgColor || Colors.whiteGrey};
  flex: 1;
`;

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;
