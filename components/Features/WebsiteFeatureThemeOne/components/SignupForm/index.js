import React from 'react';
import styled from 'styled-components';
// import useForm from '../hooks/useForm';
import FormStyles from '../../styles/FormStyles';

const SignupForm = () => {
  console.log('form');
  //   const {
  //     values,
  //     error,
  //     message,
  //     isLoading,
  //     captureInput,
  //     submitForm,
  //   } = useForm();

  return (
    <Container>
      <FormStyles>
        {/* <FormStyles onSubmit={submitForm}> */}
        <input
          //   disabled={isLoading}
          //   value={values.email}
          //   onChange={captureInput}
          type="email"
          name="email"
          placeholder="Email"
        />

        <input
          //   disabled={isLoading}
          //   onChange={captureInput}
          //   value={values.garbage}
          type="garbage"
          name="garbage"
          className="garbage"
        />
        <button type="submit">Sign up</button>
        {/* <button disabled={isLoading} type="submit">
          {isLoading ? 'Отправляю запрос...' : 'Отправить'}
        </button> */}
      </FormStyles>
      {/* <div>
        {error ? <span className="formError">Ошибка: {error}</span> : ''}
        {message ? <span className="formMessage">{message}</span> : ''}
      </div> */}
    </Container>
  );
};

export default SignupForm;

const Container = styled.div`
  .formError {
    font-size: 12px;
    text-transform: uppercase;
    color: rgb(254, 44, 85);
  }
  .formMessage {
    font-size: 12px;
    text-transform: uppercase;
    color: #00e640;
  }
`;
