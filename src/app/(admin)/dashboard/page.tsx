"use client";

import React from "react";
import { Box } from "@mui/material";
import Dashboard from "@/app/components/grid/grid";


export default function AdminPage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3, 
        bgcolor: 'background.default', 
        overflowY: 'auto', 
        width: '100%', 
        boxSizing: 'border-box', 
      }}
    >
      <Dashboard />
    </Box>
  );
}
