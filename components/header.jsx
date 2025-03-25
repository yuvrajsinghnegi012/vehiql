import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="px-4 mx-auto text-center bg-orange-500">
      <h1>Dream Car Showcase</h1>
      <SignedIn>
        <UserButton className="cursor-pointer"/>
      </SignedIn>
    </header>
  )
}

export default Header;