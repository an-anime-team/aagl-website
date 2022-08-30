import { useRouter } from 'next/router';
import LoginPopup from './login';
import { useUser } from '@supabase/auth-helpers-react';
import Head from 'next/head';
import { Button, Modal } from "@supabase/ui";
import { useState } from 'react';
/* @todo #make-proper-nav For now this navbar is incomplete make sure to make a proper bar */
const Header = () => {
  const { user, error } = useUser();
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  function toggle() {
    setVisible(!visible);
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!user &&
        <>
            <Button onClick={toggle} type="default">
                Open modal
            </Button>
            <Modal closable visible={visible} onCancel={toggle} hideFooter >
                <LoginPopup/>
            </Modal>
        </>
     }
    </>
  )
   
};

export default Header;
