"use client";
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
    const router = useRouter();

    const handleSignOut = () => {
        if(!localStorage.getItem('jwt')) {
            router.push('/login');
            return;
        }
        localStorage.removeItem('jwt');
        router.push('/login');
    };

    const isJWTPresent = !!localStorage.getItem('jwt');



    return (
        <Button variant="contained" color="error" onClick={handleSignOut}>
            {isJWTPresent ? 'Sign Out' : 'Sign In'}
        </Button>
    );
}