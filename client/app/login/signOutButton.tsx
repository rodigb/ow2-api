import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
    const router = useRouter();

    const handleSignOut = () => {
        localStorage.removeItem('jwt');
        router.push('/login');
    };

    return (
        <Button variant="contained" color="error" onClick={handleSignOut}>
            Sign Out
        </Button>
    );
}