import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@supabase/auth-helpers/react';

const LoginScreen = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      switch(user.role) {
        case 'admin':
          router.push('/admin/dashboard');
          break;
        case 'user':
          router.push('/user/dashboard');
          break;
        default:
          router.push('/guest/dashboard');
      }
    }
  }, [user]);

  return (
    <div>
      <h1>Login</h1>
      {/* Login form goes here */}
    </div>
  );
};

export default LoginScreen;