import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Registrate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Registrate
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin='normal'
              required
              fullWidth
              id='nombre'
              label='Nombre y Apellido:'
              name='nombre'
              autoComplete='nombre'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Gmail:'
              name='email'
              autoComplete='email'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Contraseña:'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='Telefono'
              label='Telefono:'
              name='Telefono'
              autoComplete='Telefono'
              maxlength='10'
            />
            
          </Box>
        </Grid>
      </Grid>
    );
  }
