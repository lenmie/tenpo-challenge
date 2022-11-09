import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamList } from '../../../navigation/AppNavigator';
import { Container } from '../../components/baseComponents';
import HomeContentContainer from './HomeContentContainer';
import HomeTopContainer from './HomeTopContainer';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;
export type HomeScreenNavigationProp = Props['navigation'];

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Container width="100%" height=" 100%" bg="grey.3">
        <ScrollView>
          <HomeTopContainer />
          <HomeContentContainer />
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}
