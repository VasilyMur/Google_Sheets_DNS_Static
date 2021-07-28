import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';

const NavMobileButton = ({ toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    toggleMenu();
  };

  return (
    <Container>
      <Wrap>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleClick}
          width={28}
          height={15}
          strokeWidth={3}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.2}
        />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  text-align: right;
  padding: 0 2rem;
  cursor: pointer;
  @media (min-width: 900px) {
    display: none;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: right;
`;

export default NavMobileButton;
