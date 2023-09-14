import { UserButton } from '@clerk/nextjs'
import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'
import Image from 'next/image'
import mbLogo from '@/public/logo.svg'


export default function Navbar() {
  return (
    <nav className='flex w-full items-center justify-between sticky p-4 px-8 h-[60px]'>
      <Image src={mbLogo} alt='logo' className='w-20 hidden md:block' />
        <Logo />
        <div className='flex gap-4 items-center'>
            <UserButton afterSignOutUrl='/' />
            <ThemeSwitcher />
        </div>
    </nav>
  )
}
