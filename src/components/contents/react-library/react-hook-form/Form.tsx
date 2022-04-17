import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <h2>Basic</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('text', { required: true })}
          variant={'outlined'}
          label={'Text Value'} //optional
        />
        {errors.text && <Typography>This field is required</Typography>}
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default Form;
