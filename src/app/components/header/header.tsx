"use client";

import * as React from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        height: theme.spacing(9),
        backgroundColor: '#0f172a',
        color: theme.palette.grey[300],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.3)',
        zIndex: theme.zIndex.appBar,
        position: 'sticky',
        top: 0,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.02em',
          userSelect: 'none',
        }}
      >
   
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <IconButton
          sx={{
            color: theme.palette.grey[300],
            '&:hover': {
              color: theme.palette.primary.light,
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
            },
          }}
          aria-label="notifications"
        >
          <NotificationsIcon />
        </IconButton>

        <IconButton
          sx={{
            color: theme.palette.grey[300],
            '&:hover': {
              color: theme.palette.primary.light,
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
            },
          }}
          aria-label="profile"
        >
          <AccountCircleIcon />
        </IconButton>

        <IconButton
          sx={{
            color: theme.palette.grey[300],
            '&:hover': {
              color: theme.palette.error.main,
              backgroundColor: alpha(theme.palette.error.main, 0.1),
            },
          }}
          aria-label="logout"
        >
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
