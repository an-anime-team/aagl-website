import { Auth } from '@supabase/ui';
import { useUser } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { Typography } from "@supabase/ui";

const LoginPopup = () => {
  const { user, message, error } = useUser();

  if (!user) {
    return (
      <>
        {message && <Typography.Text>{message}</Typography.Text>}
        {error && <Typography.Text type="danger">{error}</Typography.Text>}
        <Auth
          supabaseClient={supabaseClient}
          onlyThirdPartyProviders
          providers={['discord', 'github']}
          socialColors
        />
      </>
    );
  }
};

export default LoginPopup;
