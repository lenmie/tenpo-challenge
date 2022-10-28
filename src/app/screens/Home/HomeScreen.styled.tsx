import styled from '@emotion/native';
import { TouchableOpacity, View } from 'react-native';
import { colors } from '../../../constants/colors';

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${colors.ligthGrey};
`;

export const AddDeliveryPoint = styled(TouchableOpacity)`
  height: 100px;
  background-color: ${colors.tenpoGreen1};
`;
