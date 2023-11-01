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
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordErorr] = React.useState('');
  //Ver contraseña
  const [showPassword, setShowPassword] = React.useState(false);

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