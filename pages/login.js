import { Auth } from '@supabase/ui';
import { useUser } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const { user, error } = useUser();
  const router = useRouter();

  if (!user) {
    return (
      <>
        {error && <p>{error.message}</p>}
        <Auth
          supabaseClient={supabaseClient}
        />
      </>
    );
  }
  else {
    router.back()
  }
   
};

export default LoginPage;