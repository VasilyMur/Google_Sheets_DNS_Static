import styled from 'styled-components';

const ButtonStyles = styled.button`
  background: #000;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  padding: 10px 25px;
  margin: 20px 0 0;
  width: auto;
  min-width: 90px;
  line-height: 1.42;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  cursor: pointer;
  border: 2px solid transparent;
  margin-right: 10px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export default ButtonStyles;
