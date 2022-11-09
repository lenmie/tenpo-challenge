import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../constants/icons';
import { theme } from '../../../constants/theme';
import Resto from '../../../model/Resto';
import { StackParamList } from '../../../navigation/AppNavigator';
import { RestoService } from '../../../services/RestoService';
import {
  Box,
  Container,
  Image,
  Pressable,
  Text,
} from '../../components/baseComponents';
import { TextInput } from '../../components/baseComponents/TextInput.styled';
import SearchRestoListRow from './SearchRestoListRow';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import SearchAreaModalContent from './SearchAreaModalContent';
import { useDispatch, useStore } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import NoResultsMessage from './NoResultsMessage';
import RestoFetchErrorMessage from './RestoFetchErrorMessage';
import FilterBar from './FilterBar';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const NEAR_YOU_LOCATION = 'Tu ubicacion cercana';
const DIRECTION_PLACEHOLDER = 'Calle Agustinas #546';
const DIRECTION_INPUT_PLACEHOLDER = 'Escribe nombre del restaurante que buscas';
const OPEN_STORES = 'Solo locales abiertos';
const SEARCH_AREA = 'Area de Busqueda:';
const TRY_AGAIN = 'REINTENTAR';

const directionInputHeight = 70;
const headerHeight = 150;
const filterContainerHeight = 120;
const inputOffset = 30;

// interface Props {
//   modal
// }

export default function SearchHeader({ navigation }: Props) {
  const { address, area } = useStore();
  const [openStoresFilter, setOpenStoresFilter] = useState(true);
  const [results, setResults] = useState<Resto[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [activeInput, setActiveInput] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');
  const [modalActive, setModalActive] = useState(false);


  return (
    <Container
      height={headerHeight}
      width="100%"
      bg="green.0"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      px={18}>
      <Container flexDirection="row">
        <Pressable
          disabled={modalActive}
          onPress={() => navigation.pop()}
          flexDirection="row"
          justifyContent="center"
          alignItems="center">
          <Image height={22} width={22} mr={3} source={icons.leftArrow} />
        </Pressable>
        <Container width="76%">
          <Text fontSize={[1]} fontFamily="Gotham-Bold" color="green.3">
            {NEAR_YOU_LOCATION}
          </Text>
          <Text
            numberOfLines={1}
            fontSize={[5]}
            fontFamily="Gotham-Light"
            color="green.1">
            {address ? address : DIRECTION_PLACEHOLDER}
          </Text>
        </Container>
      </Container>

      <Pressable
        disabled={modalActive}
        onPress={() => navigation.push('AddDelivery')}
        justifyContent="center"
        alignItems="center"
        height={60}
        width={60}>
        <Image height={50} width={50} source={icons.target} />
      </Pressable>
    </Container>
  );
}
