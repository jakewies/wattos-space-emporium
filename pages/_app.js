import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ProductsProvider, CartProvider } from '../components';

const theme = {
  colors: {
    black: '#111',
    white: '#fff',
    lightgrey: '#E8E8E8',
    grey: '#B9B9B9',
    darkgrey: '#999999',
    blue: '#0E58ED',
    darkblue: '#0C49C2'
  },
  pillHeight: '2.5rem'
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <ProductsProvider>
            <CartProvider>
              <Component {...pageProps} />
              <GlobalStyle />
            </CartProvider>
          </ProductsProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 
      "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, 
      "Helvetica Neue", sans-serif;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* End Reset */
  html {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 14px;

    @media (min-width: 900px) {
      font-size: 16px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html, body, #__next {
    height: 100%
  }
`;
