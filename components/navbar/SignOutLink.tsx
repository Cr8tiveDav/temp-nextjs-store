'use client';

import { SignOutButton } from '@clerk/nextjs';
import { toast } from 'sonner';

const SignOutLink = () => {
  const handleLogout = () => {
    toast('Logout Successful');
  };
  return (
    <SignOutButton redirectUrl='/'>
      <button onClick={handleLogout}>Logout</button>
    </SignOutButton>
  );
};
export default SignOutLink;
