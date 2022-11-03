import styled from '@emotion/native';
import { layout, space, system } from 'styled-system';

export const Image = styled.Image`
  ${space}
  ${layout}
  ${system({
    resizeMode: {
      property: 'resizeMode',
      properties: ['cover', 'stretch', 'contain', 'center'],
    },
  })}
`;
