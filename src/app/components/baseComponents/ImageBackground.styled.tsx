import styled from '@emotion/native';
import { border, flexbox, layout, space, system } from 'styled-system';

export const ImageBackground = styled.ImageBackground`
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${system({
    resizeMode: {
      property: 'resizeMode',
      properties: ['cover', 'stretch', 'contain', 'center'],
    },
  })}
`;
