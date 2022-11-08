import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
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
import { StoreContext } from '../../UserContext';
import SearchRestoListRow from './SearchRestoListRow';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import SearchAreaModalContent from './SearchAreaModalContent';
var { width, height } = Dimensions.get('window');
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
  const {
    ['area']: [areaKm, setAreaKm],
  } = useContext(StoreContext);
  const {
    ['address']: [addressName],
  } = useContext(StoreContext);

  const [openStoresFilter, setOpenStoresFilter] = useState(true);
  const [results, setResults] = useState<Resto[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [activeInput, setActiveInput] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');
  const [modalActive, setModalActive] = useState(false);

  const mockSearch = () => {
    setErrorStatus('');
    RestoService.searchResto(searchInput, areaKm).then(response => {
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
                {addressName ? addressName : DIRECTION_PLACEHOLDER}
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

        <Container
          bg="grey.2"
          height={filterContainerHeight}
          pt={40}
          justifyContent="space-around"
          alignItems="center"
          flexDirection="row">
          <Pressable
            disabled={modalActive}
            opacity={openStoresFilter ? 1 : 0.2}
            onPress={() => setOpenStoresFilter(!openStoresFilter)}
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            borderColor="green.1"
            borderWidth={1}
            borderRadius={5}
            height={40}
            width={180}>
            <Text fontSize={[2]} fontFamily="Gotham-Light" color="green.1">
              {OPEN_STORES}
            </Text>
            <Image height={22} width={22} ml={1} source={icons.check} />
          </Pressable>

          <Pressable
            disabled={modalActive}
            onPress={handlePresentModalPress}
            justifyContent="center"
            alignItems="center"
            borderColor="green.1"
            borderWidth={1}
            borderRadius={5}
            height={40}
            width={180}>
            <Text fontSize={[2]} fontFamily="Gotham-Light" color="green.1">
              {SEARCH_AREA}
              <Text fontFamily="Gotham-Bold" color="green.1">
                {`${areaKm} KM`}
              </Text>
            </Text>
          </Pressable>
        </Container>

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

        {!openStoresFilter && (
          <Container flex={1}>
            <Container
              mt={150}
              mx={30}
              justifyContent="center"
              alignItems="center">
              <Text fontSize={[3]} color="green.2" fontFamily="Gotham-Bold">
                Lo sentimos
              </Text>
              <Text
                textAlign="center"
                fontSize={[6]}
                color="grey.1"
                fontFamily="Gotham-Light">
                En este momento no hay locales abiertos en el area de busqueda
                determinada.
              </Text>
            </Container>
          </Container>
        )}

        {!!errorStatus.length && (
          <Container flex={1}>
            <Container
              mt={150}
              mx={30}
              justifyContent="center"
              alignItems="center">
              <Text fontSize={[3]} color="green.2" fontFamily="Gotham-Bold">
                Lo sentimos
              </Text>
              <Text
                textAlign="center"
                fontSize={[5]}
                color="grey.1"
                fontFamily="Gotham-Light">
                {errorStatus}
              </Text>
              <TouchableOpacity
                style={styles.addDirectionButton}
                onPress={mockSearch}>
                <Text fontSize={[3]} fontFamily="Gotham-Bold" color="white">
                  {TRY_AGAIN}
                </Text>
              </TouchableOpacity>
            </Container>
          </Container>
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
          <SearchAreaModalContent setArea={setAreaKm} areaKm={areaKm} />
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
