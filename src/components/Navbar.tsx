import Logo from './Logo';

function Navbar() {
    return (
        <>
        <header className='border-b border-slate-600 w-full top-0'>
            <div className='flex items-center justify-between bg-slate-300 p-5'>
                <a href=""><Logo /></a>
                <nav className='flex w-auto items-center gap-5 md:gap-24'>
                    <ul className='text-base flex gap-12 md:gap-24 md:text-[24px]'>
                        <li>
                            <a href="" className='transition duration-300 ease-out
                         hover:border-black hover:border-b-4 active'>Login</a>
                        </li>
                        <li>
                            <a href="" className='text-unselectedText transition duration-300 ease-out
                         hover:border-black hover:border-b-4 hover:text-black'>Sobre mim</a>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </header>
        </>
    )
}

export default Navbar;