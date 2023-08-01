import { NavLink } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
    return (
        <>
            <header className='w-full top-0'>
                <div className='flex items-center justify-between bg-secondary py-2 px-10 rounded-sm'>
                    <a href=''>
                        <Logo />
                    </a>
                    <nav className='w-auto'>
                        <ul
                            id='navbar'
                            className='flex flex-row gap-24 text-lg'
                        >
                            <li>
                                <NavLink to='/'>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>Sobre mim</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
