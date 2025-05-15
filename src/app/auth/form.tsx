"use client";

import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/navigation';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const router = useRouter();

  const handleGoogleClick = () => {
    router.push('/dashboard');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#1a1a1a',
        padding: 4,
      }}
    >
      <Paper
        elevation={16}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          padding: { xs: 4, sm: 8 },
          borderRadius: '20px',
          backgroundColor: '#212121',
          color: '#E0E0E0',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
          maxWidth: 500,
          width: '100%',
          margin: 'auto',
          transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.9)',
          }
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
            Dashboard Login
          </Typography>
          <Typography variant="subtitle1" color="#B0B0B0">
          </Typography>
        </Box>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <TextField
            label="E-mail of Gebruikersnaam"
            variant="outlined"
            fullWidth
            required
            size="medium"
            InputLabelProps={{
              style: { color: '#B0B0B0' },
            }}
            InputProps={{
              style: { color: '#FFFFFF', borderRadius: '10px' },
              sx: {
                '& fieldset': {
                  borderColor: '#424242',
                },
                '&:hover fieldset': {
                  borderColor: '#616161',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#BDBDBD',
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#2c2c2c',
              },
            }}
          />

          <TextField
            label="Wachtwoord"
            variant="outlined"
            fullWidth
            type="password"
            required
            size="medium"
              InputLabelProps={{
                style: { color: '#B0B0B0' },
              }}
            InputProps={{
              style: { color: '#FFFFFF', borderRadius: '10px' },
                sx: {
                  '& fieldset': {
                    borderColor: '#424242',
                  },
                  '&:hover fieldset': {
                    borderColor: '#616161',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#BDBDBD',
                  },
                },
            }}
              sx={{
                '& .MuiOutlinedInput-root': {
                    backgroundColor: '#2c2c2c',
                },
              }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              mt: 2,
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '14px 24px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
              transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out',
              backgroundColor: '#6200ea',
              '&:hover': {
                backgroundColor: '#3700b3',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Log in
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
          <Divider sx={{ flexGrow: 1, mr: 1, borderColor: '#424242' }} />
          <Typography variant="body2" color="#B0B0B0">
            OF
          </Typography>
          <Divider sx={{ flexGrow: 1, ml: 1, borderColor: '#424242' }} />
        </Box>

        <Button
          variant="outlined"
          fullWidth
          size="large"
          startIcon={<GoogleIcon sx={{ fontSize: '1.5rem' }} />}
          onClick={handleGoogleClick}
          sx={{
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            padding: '14px 24px',
            color: '#4285F4',
            borderColor: '#4285F4',
            transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, transform 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: 'rgba(66, 133, 244, 0.15)',
              borderColor: '#357ae8',
              transform: 'translateY(-2px)',
            },
          }}
        >
          Log in met Google
        </Button>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="#B0B0B0">
            Wachtwoord vergeten?
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;