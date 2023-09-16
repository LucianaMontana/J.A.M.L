import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Grid } from '@mui/material';

function ForgotPasswordForm() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);