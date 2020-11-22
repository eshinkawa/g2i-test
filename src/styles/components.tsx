import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { FontStyles, FontSize, Colors, ScreenWidth, Spacing } from './base';
import SearchInfo from '../views/ProductsList/components/searchInfo';

const CenteredContainerStr = `
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

export const CenteredContainer = styled.View`
    ${CenteredContainerStr};
    background-color: ${(props: string) => props.bgColor || Colors.white};
`;

export const SafeAreaCenteredContainer = styled.SafeAreaView`
    ${CenteredContainerStr};
    background-color: ${(props: string) => props.bgColor || Colors.whiteGrey};
`;