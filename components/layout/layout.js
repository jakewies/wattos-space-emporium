import React from 'react';
import styled from 'styled-components';
import Header from './header';

function Layout({ children }) {
  return (
    <Container>
      <Content>
        <Header />
        <Main>{children}</Main>
      </Content>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
`;

const Main = styled.main`
  flex: 1;
`;
