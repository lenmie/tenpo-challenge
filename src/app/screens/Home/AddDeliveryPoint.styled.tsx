import styled from '@emotion/native';
import { Text, View } from 'react-native';
import { colors } from '../../../constants/colors';

export const Container = styled(View)`
  height: 100px;
  background-color: ${colors.tenpoGreen1};
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 20px;
  color: black;
  line-spacing: 21pt;
`;
