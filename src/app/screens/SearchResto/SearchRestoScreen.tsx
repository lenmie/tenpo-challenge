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

export default function SearchRestoScreen({ navigation }: Props) {
  const { address, area } = useStore();
  const dispatch = useDispatch();
  const [openStoresFilter, setOpenStoresFilter] = useState(true);
  const [results, setResults] = useState<Resto[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [activeInput, setActiveInput] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');
  const [modalActive, setModalActive] = useState(false);

  const mockSearch = () => {
    setErrorStatus('');
    RestoService.searchResto(searchInput, area).then(response => {
      if (typeof response === 'string') {
        setErrorStatus(response);
        return;
      }
      setResults(response);
    });
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['50%', '72%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    if (index > 0) setModalActive(true);
    if (index < 0) setModalActive(false);
  }, []);

  return (
    <SafeAreaView>
      <Container
        width="100%"
        height="100%"
        bg={modalActive ? 'white' : ' black'}
        opacity={modalActive ? 0.5 : 1}>
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

        <FilterBar
          area={area}
          modalActive={modalActive}
          openStoresFilter={openStoresFilter}
          toggleOpenStoresFilter={() => setOpenStoresFilter(!openStoresFilter)}
          handlePresentModalPress={handlePresentModalPress}
        />

        <Container style={styles.addDirectionInput}>
          <TextInput
            editable={!modalActive}
            value={searchInput}
            onChangeText={setSearchInput}
            onFocus={() => setActiveInput(true)}
            onBlur={() => setActiveInput(false)}
            onSubmitEditing={mockSearch}
            textAlignVertical="center"
            fontFamily="Gotham-Light"
            color="black"
            width={activeInput ? '100%' : '85%'}
            fontSize={[3]}
            placeholder={activeInput ? DIRECTION_INPUT_PLACEHOLDER : ''}
          />
        </Container>

        {activeInput ? null : (
          <Container
            right={10}
            top={headerHeight - inputOffset}
            position="absolute">
            <Pressable
              disabled={modalActive}
              onPress={mockSearch}
              justifyContent="center"
              alignItems="center"
              height={70}
              width={70}>
              <Image height={32} width={32} source={icons.search} />
            </Pressable>
          </Container>
        )}

        {!openStoresFilter && <NoResultsMessage />}

        {!!errorStatus.length && (
          <RestoFetchErrorMessage
            onRetryPress={mockSearch}
            message={errorStatus}
          />
        )}

        {!errorStatus.length && openStoresFilter && !!results.length && (
          <FlatList
            data={results}
            ItemSeparatorComponent={() => (
              <Box borderWidth={0.5} borderColor="grey.2" width="100%" />
            )}
            renderItem={({ item }) => <SearchRestoListRow item={item} />}
          />
        )}

        <BottomSheetModal
          keyboardBlurBehavior="restore"
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <SearchAreaModalContent
            setArea={(newArea: number) => {
              dispatch({ type: types.setArea, payload: newArea });
            }}
            areaKm={area}
          />
        </BottomSheetModal>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addDirectionInput: {
    top: headerHeight - inputOffset,
    position: 'absolute',
    padding: 15,
    borderRadius: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    height: directionInputHeight,
    width: '100%',
    backgroundColor: theme.colors.white,
  },
  addDirectionButton: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginTop: 30,
    height: 40,
    width: '70%',
    backgroundColor: theme.colors.green[2],
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    height: '100%',
    alignItems: 'center',
  },
});
