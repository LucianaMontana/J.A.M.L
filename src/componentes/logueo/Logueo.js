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
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// Credencial de Firebase
import { app } from '../firebase';
// Google y Git
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

const defaultTheme = createTheme();

export default function Logueo(props) {
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

  // Creacion de Usuario Registro
  const crearUsuario = (email, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((usuarioFirebase) => {
        console.log('Usuario Creado:', usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      });
  };

  //Inicio de Sesion
  const iniciarSesion = (email, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((usuarioFirebase) => {
        console.log('Sesion Iniciada con:', usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      });
  };

  //Boton Submit
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

    //Verificar creacion de usuario
    if (isRegistrando) {
      crearUsuario(email, password);
    }

    //Verificar usuario ya registrado ya puede iniciar sesion
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

  return;
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
        borderRadius: 4,
        px: 4,
        py: 6,
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className='background-container'>
        <ThemeProvider theme={defaultTheme}>
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component='h1'
                variant='h5'
                sx={{
                  fontFamily: 'times new roman',
                  color: 'white',
                }}
              >
                {isRegistrando ? 'Registrate' : 'Iniciar sesión'}
              </Typography>
              <Box
                component='form'
                onSubmit={submitHandler}
                noValidate
                sx={{ mt: 1 }}
              >
                {isRegistrando && (
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='username'
                    label='Nombre y Apellido'
                    name='username'
                    autoComplete='username'
                    autoFocus
                  />
                )}
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
                  type='email'
                  error={!!emailError}
                  helperText={emailError}
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
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Contraseña'
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  autoComplete='current-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={togglePasswordVisibility}
                          edge='end'
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className='checkbox'
                  sx={{
                    borderRadius: '25px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                    fontFamily: 'times new roman',
                  }}
                />
                {isRegistrando && (
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='recordar-password'
                    label='Recordar Contraseña'
                    type={showPassword ? 'text' : 'password'}
                    name='recordar-password'
                    autoComplete='recordar-password'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={togglePasswordVisibility}
                            edge='end'
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                <Grid item container xs={16} sx={{ display: 'flex' }}></Grid>
                <Grid item sm={6} sx={{ marginRight: '2%' }}></Grid>
                <TextField
                 margin='normal'

                <FormControlLabel
                  style={{
                    alignSelf: 'center',
                    marginLeft: '40px',
                    color: 'rgb(25, 118, 210)',
                    fontSize: '16px',
                  }}
                  control={<Checkbox value='remember' color='primary' />}
                  label='Recordar mis datos'
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: '25px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                    fontFamily: 'times new roman',
                    textTransform: 'none',
                  }}
                >
                  {isRegistrando ? 'Registrate' : 'Iniciar Sesion'}
                </Button>
                {userGoogle ? (
                  <Home />
                ) : (
                  !isRegistrando && (
                    <Button
                      className='blancusco'
                      type='submit'
                      variant='contained'
                      fullWidth
                      sx={{
                        mt: 1,
                        mb: 1,
                        borderRadius: '25px',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'transparent',
                          },
                        },
                        fontFamily: 'times new roman',
                        textTransform: 'none',
                        backgroundColor: 'white',
                        color: 'black',
                      }}
                      onClick={IniciarSesionGoogle}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='25'
                        height='25'
                        viewBox='0 0 48 48'
                      >
                        <path
                          fill='#FFC107'
                          d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                        ></path>
                        <path
                          fill='#FF3D00'
                          d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                        ></path>
                        <path
                          fill='#4CAF50'
                          d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                        ></path>
                        <path
                          fill='#1976D2'
                          d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                        ></path>
                      </svg>
                      Continuar con Google
                    </Button>
                  )
                )}
                {userGithub ? (
                  <Home />
                ) : (
                  !isRegistrando && (
                    <Button
                      type='submit'
                      variant='contained'
                      fullWidth
                      sx={{
                        display: 'flex', // Utiliza un contenedor flex para alinear elementos horizontalmente
                        alignItems: 'center', // Alinea verticalmente al centro
                        mt: 1,
                        mb: 1,
                        borderRadius: '25px',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'transparent',
                          },
                        },
                        fontFamily: 'times new roman',
                        textTransform: 'none',
                        backgroundColor: 'white',
                        color: 'black',
                      }}
                      onClick={IniciarSesionGithub}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='25'
                        height='25'
                        viewBox='0 0 48 48'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 48 48'
                          width='48px'
                          height='48px'
                        >
                          <path d='M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z' />
                        </svg>
                      </svg>
                      Continuar con Github
                    </Button>
                  )
                )}
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
        <Box sx={{ mt: 5 }}>
          <Copyright />
        </Box>
      </div>
    </Grid>
  </Grid>;
}
