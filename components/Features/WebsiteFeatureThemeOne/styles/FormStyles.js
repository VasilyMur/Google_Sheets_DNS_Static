import styled from 'styled-components';

const FormStyles = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 5px;
  }
  input {
    font-size: 16px;
    border: 1px solid #ccc;
    letter-spacing: 1.5px;
    height: 35px;
    padding: 2px 10px;
    min-width: 300px;
  }
  button {
    border: 0;
    background: #1b1b1b;
    color: #fff;
    height: 35px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    min-width: 175px;
    &:hover {
      background: #222;
      cursor: pointer;
    }
  }
  .garbage {
    display: none;
  }
`;

export default FormStyles;
