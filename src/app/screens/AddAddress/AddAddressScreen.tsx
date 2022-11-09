import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { theme } from '../../../constants/theme';
import { StackParamList } from '../../../navigation/AppNavigator';
import { Box, Container, Image, Text } from '../../components/baseComponents';
import { TextInput as StyledTextInput } from '../../components/baseComponents/TextInput.styled';
import { MapsService } from '../../../services/MapsService';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Candidate } from '../../../interfaces/interfaces';
import AddressFooterRow from './AddressFooterRow';
import AddressRow from './AddressRow';
import icons from '../../../constants/icons';

type Props = NativeStackScreenProps<StackParamList, 'AddAddress'>;
export type AddAddressScreenNavigationProp = Props['navigation'];

const directionInputHeight = 70;
const timeoutValue = 500;

const DIRECTION_INPUT_PLACEHOLDER = 'Escribe tu direccion';
const TITLE = 'Agregar direccion de entrega';
const WAITING = 'Esperando tu ubicacion...';

export default function AddAddressScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Candidate[]>([]);
  const [emptyInput, setEmptyInput] = useState(true);

  const searchTimeout = useRef<number>(0);
  const textInputRef = useRef<TextInput>(null);

  const updateResults = (res: Candidate[]) => {
    const resultsCopy = [...results];
    resultsCopy.unshift(...res);
    while (resultsCopy.length > 4) {
      resultsCopy.pop();
    }

    setResults(resultsCopy);
  };

  const onChangeText = (term: string) => {
    if (term.length) {
      setEmptyInput(false);
      setQuery(term);
      if (searchTimeout) clearTimeout(searchTimeout.current);

      searchTimeout.current = setTimeout(() => {
        MapsService.getAddresses(term).then(updateResults);
      }, timeoutValue);
    } else {
      setEmptyInput(true);
      setQuery('');
      textInputRef.current?.clear();
    }
  };

  return (
    <SafeAreaView>
      <Container width="100%">
        <Container
          height={90}
          width="100%"
          bg="green.0"
          alignItems="center"
          justifyContent="center">
          <Container
            flexDirection="row"
            justifyContent="center"
            alignItems="center">
            <Image mr={2} source={icons.map} height={28} width={25} />
            <Text fontSize={[5]} fontFamily="Gotham-Light" color="green.1">
              {emptyInput ? WAITING : TITLE}
            </Text>
          </Container>
        </Container>
      </Container>
      <Container>
        {!!results.length && (
          <FlatList
            data={results}
            ListHeaderComponent={() => <Box height={50} bg="white" />}
            ItemSeparatorComponent={() => (
              <Box borderWidth={0.5} borderColor="grey.2" width="100%" />
            )}
            ListFooterComponent={() => (
              <>
                <Box borderWidth={0.5} borderColor="grey.2" width="100%" />
                <AddressFooterRow />
              </>
            )}
            renderItem={({ item }) => (
              <AddressRow
                address={item.formatted_address}
                name={item.name}
                location={item.geometry.location}
              />
            )}
          />
        )}
        {!results.length && (
          <>
            <Box height={50} bg="white" />
            <AddressFooterRow />
          </>
        )}
      </Container>
      <Container top={70} width="100%" position="absolute">
        <StyledTextInput
          autoFocus
          ref={textInputRef}
          onChangeText={onChangeText}
          value={query}
          textAlignVertical="center"
          style={styles.addDirectionInput}
          placeholder={DIRECTION_INPUT_PLACEHOLDER}
        />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addDirectionInput: {
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    height: directionInputHeight,
    width: '100%',
    backgroundColor: theme.colors.white,
    fontSize: 16,
    fontFamily: 'Gotham-Light',
    color: theme.colors.green[1],
  },
});
