import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NotFound = () => (
  <Container>
    <Wrap>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </Wrap>
  </Container>
);

export default NotFound;
const Container = styled.div``;
const Wrap = styled.div`
  max-width: 294px;
  margin: 120px auto 0;
  a {
    text-decoration: underline;
  }
`;
