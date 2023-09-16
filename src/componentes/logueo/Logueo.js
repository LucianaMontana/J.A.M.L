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

export default function Logueo() {

  const [ isRegistrando, setIsRegistrando ] = React.useState(false);
  const [email, setEmail] = React.userState('');
  const [password, setPassword] = React.userState('');

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
    e-preventDefaul();

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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
  );
}