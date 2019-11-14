import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  text-align: center;
`;

export const Footer = () => {
  return <Div>This is a footer</Div>;
};
