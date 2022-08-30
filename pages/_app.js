import './../public/style.css'
import React from 'react';
import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import Header from '../components/head';
/* @todo #add-chakra Add chakra-ui for faster UI development */

export default function App({ Component, pageProps }) {
  return (
    <main className={'dark'}>
      <UserProvider supabaseClient={supabaseClient}>
        <Header/>
        <Component {...pageProps} />
      </UserProvider>
    </main>
  );
}
