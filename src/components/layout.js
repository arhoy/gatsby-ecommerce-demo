import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';

import Header from './header';
import './layout.css';
import { Footer } from './footer';

const theme = {
  colors: {
    primary: 'rgb(92, 52, 145)',
    primaryDark: 'rgb(63, 3, 122)',
    primaryLight: 'rgb(148, 103, 206)',
    primaryVeryLight: 'rgb(232, 213, 250)',
    primaryTransparent: 'rgba(92, 52, 145,0.2)',
    white: '#fff',
    black: '#1a1a1a',
    blackTransparent: 'rgba(41, 43, 46, 0.4)',
    red: 'rgb(218, 18, 31)',
  },
  pageWidth: {
    fixed: '800px',
  },
  screenSize: {
    mobileL: '600px',
  },
};

const Main = styled.section``;

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header siteTitle="Gastby Fashion Demo" />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
