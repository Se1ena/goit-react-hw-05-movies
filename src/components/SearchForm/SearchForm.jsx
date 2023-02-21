import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, FormBtn } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input name="search"></Input>
      <FormBtn type="submit">Search</FormBtn>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;