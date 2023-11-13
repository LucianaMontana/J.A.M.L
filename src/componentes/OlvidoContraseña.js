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
    alert(`Se ha enviado un correo de recuperación a tu Gmail${email}`);
  };
  return (
    <Grid>
      <h2>¿Has olvidado tu contraseña?</h2>
    </Grid>
  );
}
export default OlvidoContraseña;
