import styled from '@emotion/native';
import { layout, space, system } from 'styled-system';

export const Image = styled.Image`
  ${space}
  ${layout}
  ${system({
    resizeMode: {
      //@ts-ignore todo: correctly type styled 'system' tool
      property: 'resizeMode',
      //@ts-ignore
      properties: ['cover', 'stretch', 'contain', 'center'],
    },
  })}
`;
