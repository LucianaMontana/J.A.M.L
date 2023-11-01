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
import {app} from "../firebase";
// Google
import {auth, provider} from "../firebase";
import { signInWithPopup } from 'firebase/auth';
// Home
import Home from '../home/Home';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        J.A.M.L
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Logueo(props) {

  const [ isRegistrando, setIsRegistrando ] = React.useState(false);
  // Usuario Anonimo
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordErorr] = React.useState('');
  // Ver contraseña
  const [showPassword, setShowPassword] = React.useState(false);
  // Usuario Google
  const [userGoogle, setUserGoogle] = React.useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  // Creacion de Usuario Registro
  const crearUsuario = (email,password) => {
    app.auth().createUserWithEmailAndPassword(email,password).then((usuarioFirebase) => {
      console.log("Usuario Creado:", usuarioFirebase);
      props.setUsuario(usuarioFirebase);
    })
  }

  //Inicio de Sesion 
  const iniciarSesion = (email,password) => {
    app.auth().signInWithEmailAndPassword(email,password).then((usuarioFirebase) => {
      console.log("Sesion Iniciada con:", usuarioFirebase.user);
      props.setUsuario(usuarioFirebase);
    })
  }

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
    if (password.length < 6 || password.length > 8 ) {
      setPasswordErorr('La contraseña debe tener entre 6 y 8 caracteres.');
      return;
    }

    //Limpiar el mensaje de error si pasa la validacion
    setPasswordErorr('');

    //Verificar creacion de usuario
    if (isRegistrando) {
      crearUsuario(email,password);
    }

    //Verificar usuario ya registrado ya puede iniciar sesion
    if (!isRegistrando) {
      iniciarSesion(email,password);
    }
  }

  // Boton Google
  const IniciarSesionGoogle =() => {
      signInWithPopup(auth, provider).then((dataGoogle)=>{ 
        setUserGoogle(dataGoogle.user.email);
        localStorage.setItem("email", dataGoogle.user.email)
      })
  }

  React.useEffect(() => {
    setUserGoogle(localStorage.getItem('email'));
  })

  return (
    <div className="background-container">
     <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h5">
            {isRegistrando ? "Registrate" : "Iniciar Sesion"}
          </Typography>
          <Box component="form" onSubmit={submitHandler}  noValidate sx={{ mt: 1 }}>
            {isRegistrando && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nombre y Apellido"
                name="username"
                autoComplete="username"
                autoFocus    
              />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              helperText={passwordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end' >
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={togglePasswordVisibility}
                      edge='end'
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            {isRegistrando && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="recordar-password"
                label="Recordar Contraseña"
                type={showPassword ? 'text' : 'password'}
                name="recordar-password"
                autoComplete="recordar-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end' >
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={togglePasswordVisibility}
                        edge='end'
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {""} 
              {isRegistrando ? "Registrate" : "Iniciar Sesion"}
            </Button>
            {userGoogle ? (<Home/>) :  
              (!isRegistrando && (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
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
                  Google
                </Button>
              ))
            }
            <Grid container>
              <Grid item>
                <Link onClick={() => setIsRegistrando(!isRegistrando)} variant="body2" style={{cursor: 'pointer'}}>
                  {isRegistrando
                    ? "¿Ya tienes cuenta? Inicia Sesion"
                    : "¿No tenes cuenta? Registrate"
                  }
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
    
  );
}