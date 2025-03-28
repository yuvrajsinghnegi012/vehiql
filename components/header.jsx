import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ArrowLeft, CarFront, Layout } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ isAdminPage = false }) => {
  const isAdmin = false;

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? "/admin" : "/"} className="flex">
          <Image
            src={"/logo.png"}
            alt="Vehiql Logo"
            width={200}
            height={60}
            className="h-12 2-auto object-contain"
          />
          {
            isAdminPage && (
              <span className="text-xs font-extralight">admin</span>
            )
          }
        </Link>

        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <Link href="/" className="cursor-pointer">
              <Button varient="outline" className="flex items-center gap-2">
                <ArrowLeft size={18} />
                <span>Back To App</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              <Link href="/saved-cars">
                <Button className="cursor-pointer">
                  <CarFront size={18} />
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </Link>
              {
                !isAdmin ? (<Link href="/reservations">
                  <Button className="bg-white cursor-pointer text-black hover:bg-white/80">
                    <CarFront size={18}/>
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
                ) : (
                  <Link href="/admin">
                    <Button className="bg-white cursor-pointer text-black hover:bg-white/80">
                      <Layout size={18} />
                      <span className="hidden md:inline">Admin Portal</span>
                    </Button>
                  </Link>
                )
              }
            </SignedIn>
          )}

          <SignedOut>
            <SignInButton forceRedirectUrl="/">
              <Button varient="outline" className="cursor-pointer">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10"
                }
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header;