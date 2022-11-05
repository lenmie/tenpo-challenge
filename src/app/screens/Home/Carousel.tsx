import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Box, Container, Text } from '../../components/baseComponents';

const { height } = Dimensions.get('screen');

interface Props {
  content: any[];
  title: string;
  ItemComponent: React.ComponentType<any>;
}

export default function Carousel(props: Props) {
  const { ItemComponent, content, title } = props;

  return (
    <Container>
      <Container ml={15} height={height * 0.05} justifyContent="center">
        <Text fontSize={[5]} color="black" fontFamily="Gotham-Bold">
          {title}
        </Text>
      </Container>
      <FlatList
        ItemSeparatorComponent={() => <Box width={10} />}
        ListHeaderComponent={() => <Box width={15} />}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemComponent item={item} />}
        data={content}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
