import React from 'react';
import { Dimensions } from 'react-native';

import {
  Box,
  Container,
  Pressable,
  Text,
} from '../../components/baseComponents';

const { width } = Dimensions.get('screen');
const bigDotSize = 20;
const dotSize = 12;
const barWidth = width * 0.82;
const marginX = (width - barWidth) * 0.5;
const middle = width * 0.5;
const middleRight = middle * 0.5 + marginX * 0.5;
const middleLeft = middle * 0.5 + marginX * 0.5 - dotSize * 0.5;
const dotLabelMarginTop = 10;
const dotLabelMarginX = marginX - 8;

interface OptionDotProps {
  index: number;
  currentArea: number;
  setArea: Function;
}

const FIRST_OPTION_LABEL = '1 KM';
const LAST_OPTION_LABEL = '5 KM';

function OptionDot({ index, setArea, currentArea }: OptionDotProps) {
  return currentArea === index ? (
    <Pressable
      height={bigDotSize}
      width={bigDotSize}
      borderRadius={50}
      borderWidth={3}
      borderColor="green.1"
      bg="green.0"
    />
  ) : (
    <Pressable
      my={10}
      onPress={() => setArea(index)}
      height={dotSize}
      width={dotSize}
      borderRadius={50}
      bg="green.1"
    />
  );
}
interface OptionLabelProps {
  index: number;
  currentArea: number;
  label: string;
}

function OptionLabel({ index, currentArea, label }: OptionLabelProps) {
  return currentArea === index ? (
    <Text fontFamily={'Gotham-Bold'} fontSize={[2]} color="green.1">
      {label}
    </Text>
  ) : (
    <Text fontFamily={'Gotham-Light'} fontSize={[2]} color="black">
      {label}
    </Text>
  );
}

interface Props {
  setArea: Function;
  area: number;
}

export default function AreaModalKMBar({ setArea, area }: Props) {
  return (
    <Container
      flex={1}
      width="100%"
      mt={10}
      justifyContent="center"
      alignItems="center">
      <Box width={barWidth} borderTopWidth={4} borderColor="green.1" />

      <Container
        position="absolute"
        top={dotLabelMarginTop}
        left={dotLabelMarginX}>
        <OptionLabel index={1} currentArea={area} label={FIRST_OPTION_LABEL} />
      </Container>
      <Container position="absolute" left={marginX}>
        <OptionDot index={1} currentArea={area} setArea={setArea} />
      </Container>

      <Container position="absolute" left={middleLeft}>
        <OptionDot index={2} currentArea={area} setArea={setArea} />
      </Container>

      <Container position="absolute" right={middle}>
        <OptionDot index={3} currentArea={area} setArea={setArea} />
      </Container>

      <Container position="absolute" right={middleRight}>
        <OptionDot index={4} currentArea={area} setArea={setArea} />
      </Container>

      <Container
        position="absolute"
        top={dotLabelMarginTop}
        right={dotLabelMarginX}>
        <OptionLabel index={5} currentArea={area} label={LAST_OPTION_LABEL} />
      </Container>
      <Container position="absolute" right={marginX}>
        <OptionDot index={5} currentArea={area} setArea={setArea} />
      </Container>
    </Container>
  );
}
