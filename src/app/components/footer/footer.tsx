"use client";

import * as React from 'react';
import { styled, useTheme, Theme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  background: 'linear-gradient(180deg, #111827 0%, #0F172A 100%)',
  color: theme.palette.grey[300],
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  borderTop: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: theme.transitions.create(['background-color', 'color', 'border-color'], {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
  letterSpacing: '0.03em',
  color: alpha(theme.palette.common.white, 0.6),
  textAlign: 'center',
  fontWeight: 400,
}));

export default function Footer() {
  return (
    <FooterContainer as="footer">
      <FooterText>
        &copy; {new Date().getFullYear()} 
      </FooterText>
    </FooterContainer>
  );
}
