import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  li {
    list-style: none;
    display: flex;
  }
  .city-main,
  button {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 18px;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme.black};
    @media (max-width: 700px) {
      padding: 10px;
    }
  }
`;

export default NavStyles;
