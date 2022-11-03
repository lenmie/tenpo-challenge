import styled from '@emotion/native';
import { flexbox, layout, space, system } from 'styled-system';

export const ImageBackground = styled.ImageBackground`
  ${space}
  ${layout}
  ${flexbox}
  ${system({
    resizeMode: {
      property: 'resizeMode',
      properties: ['cover', 'stretch', 'contain', 'center'],
    },
  })}
`;
