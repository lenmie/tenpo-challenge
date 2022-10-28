import styled from '@emotion/native';
import { View } from 'react-native';
import { colors } from '../../../constants/colors';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const Container = styled(View)`
  height: 256px;
  background-color: ${colors.ligthGrey};
`;

export const AddressMap = styled(MapView)`
  height: 100%,
  width: 100%,
`;
