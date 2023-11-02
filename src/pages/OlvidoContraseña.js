import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <TextField
        type={showPassword ? 'text' : 'password'}
        label='Contraseña'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        variant='outlined'
      />
      <IconButton onClick={handlePasswordToggle} edge='end'>
        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </IconButton>
    </div>
  );
};

export default PasswordInput;
