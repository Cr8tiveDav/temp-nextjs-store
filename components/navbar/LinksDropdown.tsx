import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import UserIcon from './UserIcon';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import SignOutLink from './SignOutLink';
import { auth } from '@clerk/nextjs/server';

const LinksDropdown = async () => {
  const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;
  console.log('isAdminUser:', isAdminUser);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='lg'
          className='flex gap-4 max-w-[100px]'
        >
          <LuAlignLeft className='h-5 w-5' />
          <UserIcon />
          <span className='sr-only'>Open links menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='w-40' sideOffset={10}>
        <SignedOut>
          {/* Login */}
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Login</button>
            </SignInButton>
            {/* <SignInButton mode='modal'>
              <button className='w-full text-left'>Login</button>
            </SignInButton> */}

            {/* <Link href='/sign-in' className='w-full text-left'>
              Login
            </Link> */}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* Register */}
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>Register</button>
            </SignUpButton>
            {/* <SignUpButton mode='modal'> */}
            {/* </SignUpButton> */}

            {/* <button className='w-full text-left'>Register</button> */}

            {/* <Link href='/sign-up' className='w-full text-left'>
              Register
            </Link> */}
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((link) => {
            if (link.href.startsWith('/admin') && !isAdminUser) return null;
            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className='capitalize w-full'>
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          {/* Logout */}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
