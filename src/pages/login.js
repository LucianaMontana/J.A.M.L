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
        xs={3.50}
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
        𝓘𝓷𝓲𝓬𝓲𝓪𝓻 𝓢𝓮𝓼𝓲𝓸𝓷
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            className='checkbox'
            margin='normal'
            required
            fullWidth
            id='email'
            label='𝒢𝓂𝒶𝒾𝓁:'
            name='email'
            autoComplete='email'
            autoFocus
            sx={{
              borderRadius: '25px', 
              '& .MuiOutlinedInput-root': {
              '& fieldset': {
              borderColor: 'transparent',
              },
              },
              }}
          />
          <TextField
            className='checkbox'
            margin='normal'
            required
            fullWidth
            name='password'
            label='𝒞𝑜𝓃𝓉𝓇𝒶𝓈𝑒ñ𝒶:'
            type='password'
            id='password'
            autoComplete='current-password'
            sx={{
              borderRadius: '25px', 
              '& .MuiOutlinedInput-root': {
              '& fieldset': {
              borderColor: 'transparent', 
              },
              },
              }}
          />
          <FormControlLabel style={{alignSelf:'center', marginLeft:'50px', color:'rgb(25, 118, 210)', fontSize:'16px'}}
            control={<Checkbox value='remember' color='primary' />}
            label='𝑅𝑒𝒸𝑜𝓇𝒹𝒶𝓇 𝓂𝒾𝓈 𝒹𝒶𝓉𝑜𝓈'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            𝓘𝓷𝓲𝓬𝓲𝓪𝓻 𝓢𝓮𝓼𝓲𝓸𝓷
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={8} style={{alignSelf: 'center', marginLeft:'60px'}}>
              <Link href='/OlvidoContraseña' variant='body2'>
              𝐻𝒶𝓈 𝑜𝓁𝓋𝒾𝒹𝒶𝒹𝑜 𝓉𝓊 𝒸𝑜𝓃𝓉𝓇𝒶𝓈𝑒ñ𝒶?
              </Link>
            </Grid>
            <Grid item xs={9} style={{marginBottom:'-30px', alignSelf: 'center', marginLeft:'60px'}}>
              <Link href='/registro' variant='body2'>
                {'𝒩𝑜 𝓉𝑒𝓃𝑒𝓈 𝒸𝓊𝑒𝓃𝓉𝒶? 𝑅𝑒𝑔𝒾𝓈𝓉𝓇𝒶𝓉𝑒!'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}