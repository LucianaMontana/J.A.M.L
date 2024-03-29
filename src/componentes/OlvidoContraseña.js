import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Grid } from '@mui/material';

function OlvidoContraseña() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = () => {
    alert(`Se ha enviado un correo de recuperación a tu Gmail: ${email}`);
  };
  return (
    <Grid
      container
      className='background-image'
      component='main'
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        item
        container
        xs={4}
        className='login-box'
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 className='blancusco1'>¿Has olvidado tu contraseña?</h2>
        <p className='blancusco1'>
          Ingresa tu correo electrónico para recibir instrucciones de
          recuperación:
        </p>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Correo Electrónico'
          name='email'
          autoComplete='email'
          autoFocus
          value={email}
          onChange={handleEmailChange}
          className='checkbox'
          sx={{
            borderRadius: '25px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent',
              },
            },
            fontFamily: 'times new roman',
            borderColor: 'transparent',
          }}
        />
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleResetPassword}
          sx={{ borderRadius: '25px', textTransform: 'none' }}
        >
          Enviar Instrucciones de Recuperación
        </Button>
      </Grid>
    </Grid>
  );
}
export default OlvidoContraseña;
