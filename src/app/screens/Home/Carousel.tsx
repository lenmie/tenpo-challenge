import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Container } from '../../components/Container.styled';
import { Text } from '../../components/Text.styled';

const { height } = Dimensions.get('screen');

interface Props {
  content: any[];
  title: string;
  ItemComponent: React.ComponentType<any>;
}

export default function Carousel(props: Props) {
  const { ItemComponent, content, title } = props;

  return (
    <Container ml={10}>
      <Container height={height * 0.05} justifyContent="center">
        <Text fontSize={[3]} color="black" fontFamily="Gotham-Bold">
          {title}
        </Text>
      </Container>
      <FlatList
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemComponent item={item} />}
        data={content}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
