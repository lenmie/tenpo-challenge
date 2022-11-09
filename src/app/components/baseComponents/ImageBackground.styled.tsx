import styled from '@emotion/native';
import { border, flexbox, layout, space, system } from 'styled-system';

export const ImageBackground = styled.ImageBackground`
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${system({
    resizeMode: {
      //@ts-ignore todo: correctly type styled 'system' tool
      property: 'resizeMode',
      //@ts-ignore
      properties: ['cover', 'stretch', 'contain', 'center'],
    },
  })}
`;
