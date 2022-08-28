// Due to a weird issue this can't be configurd as a TS file
import './../public/style.css'
import React from 'react';
import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';

export default function App({ Component, pageProps }) {
  return (
    <main className={'dark'}>
      <UserProvider supabaseClient={supabaseClient}>
        <Component {...pageProps} />
      </UserProvider>
    </main>
  );
}
