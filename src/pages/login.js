import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../styles/login.css';

export default function SignIn() {
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
      className='background-image'
      container
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
        <Typography component='h1' variant='h5' color='primary'>
          𝕴𝖓𝖎𝖈𝖎𝖆𝖗 𝕾𝖊𝖘𝖎ó𝖓
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            className='checkbox'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Gmail:'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            className='checkbox'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Contraseña:'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='𝕽𝖊𝖈𝖔𝖗𝖉𝖆𝖗 𝖒𝖎𝖘 𝖉𝖆𝖙𝖔𝖘'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            𝕴𝖓𝖎𝖈𝖎𝖆𝖗 𝕾𝖊𝖘𝖎ó𝖓
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='/OlvidoContraseña' variant='body2'>
                has olvidado tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href='/Registro' variant='body2'>
                {'No tenes cuenta? Registrate!'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}