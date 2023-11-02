import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { app } from '../firebase';

function Logueo({ isUserLoggedIn, setIsUserLoggedIn }) {
  const [isRegistrando, setIsRegistrando] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const crearUsuario = (email, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((usuarioFirebase) => {
        setIsUserLoggedIn(true);
      });
  };

  const iniciarSesion = (email, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((usuarioFirebase) => {
        setIsUserLoggedIn(true);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isRegistrando) {
      crearUsuario(email, password);
    }

    if (!isRegistrando) {
      iniciarSesion(email, password);
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            {isRegistrando ? 'Registrate' : 'Iniciar Sesion'}
          </Typography>
          <Box
            component='form'
            onSubmit={submitHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Correo'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Contraseña'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              {isRegistrando ? 'Registrate' : 'Iniciar Sesion'}
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  onClick={() => setIsRegistrando(!isRegistrando)}
                  variant='body2'
                  style={{ cursor: 'pointer' }}
                >
                  {isRegistrando
                    ? '¿Ya tienes cuenta? Inicia Sesion'
                    : '¿No tienes cuenta? Registrate'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Logueo;
