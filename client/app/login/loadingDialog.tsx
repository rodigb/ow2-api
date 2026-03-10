import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingDialog: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default LoadingDialog;