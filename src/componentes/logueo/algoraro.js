/*  import * as React from 'react';
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
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// Credencial de Firebase
import { app } from '../firebase';
// Google
import { auth, providerGoogle, providerGithub } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
// Home
import Home from '../home/Home';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        J.A.M.L
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};
const defaultTheme = createTheme();

export default function Algoraro(props) {
  const [isRegistrando, setIsRegistrando] = React.useState(false);
  // Usuario Anonimo
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordErorr] = React.useState('');
  // Ver contraseña
  const [showPassword, setShowPassword] = React.useState(false);
  // Usuario Google
  const [userGoogle, setUserGoogle] = React.useState('');
  // Usuario Github
  const [userGithub, setUserGithub] = React.useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

    //Validacion de correo electronico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Ingresa un correo electronico valido.');
      return;
    }

    //Limpiar el mensaje de error si pasa la validacion
    setEmailError('');

    //Validacion de la logitud de la contraseña
    if (password.length < 6 || password.length > 8) {
      setPasswordErorr('La contraseña debe tener entre 6 y 8 caracteres.');
      return;
    }

    //Limpiar el mensaje de error si pasa la validacion
    setPasswordErorr('');

    if (isRegistrando) {
      crearUsuario(email, password);
    }

    if (!isRegistrando) {
      iniciarSesion(email, password);
    }
  };

  // Boton Google
  const IniciarSesionGoogle = () => {
    signInWithPopup(auth, providerGoogle).then((dataGoogle) => {
      setUserGoogle(dataGoogle.user.email);
      localStorage.setItem('email', dataGoogle.user.email);
    });
  };

  React.useEffect(() => {
    setUserGoogle(localStorage.getItem('email'));
  });

  // Boton Github
  const IniciarSesionGithub = () => {
    signInWithPopup(auth, providerGithub).then((dataGithub) => {
      setUserGithub(dataGithub.user.email);
      localStorage.setItem('email', dataGithub.user.email);
    });
  };

  React.useEffect(() => {
    setUserGithub(localStorage.getItem('email'));
  });

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
        xs={3.5}
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
          <FormControlLabel
            style={{
              alignSelf: 'center',
              marginLeft: '50px',
              color: 'rgb(25, 118, 210)',
              fontSize: '16px',
            }}
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
            <Grid
              item
              xs={8}
              style={{ alignSelf: 'center', marginLeft: '60px' }}
            >
              <Link href='/OlvidoContraseña' variant='body2'>
                𝐻𝒶𝓈 𝑜𝓁𝓋𝒾𝒹𝒶𝒹𝑜 𝓉𝓊 𝒸𝑜𝓃𝓉𝓇𝒶𝓈𝑒ñ𝒶?
              </Link>
            </Grid>
            <Grid
              item
              xs={9}
              style={{
                marginBottom: '-30px',
                alignSelf: 'center',
                marginLeft: '60px',
              }}
            >
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
*/
