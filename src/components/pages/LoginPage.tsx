import Navbar from "../Navbar"
import { BiLogoGoogle } from 'react-icons/bi'
import { Link } from "react-router-dom";
import Container from "../Container";
function LoginPage() {
    return (
        <>
            <Container>
            <Navbar />
            <div className="h-auto w-full grid text-center place-content-center py-32">
                <div className='grid gap-3 text-slate-900'>
                    <h1 className='drop-shadow-2xl text-5xl'>Login</h1>
                    <p className="tracking-wide">Entre com sua conta do Google</p>
                </div>
                <div className="text-center bg-pageBackground mt-5 rounded-full 
                    hover:bg-windowColor hover:text-black">
                        <a href='' className="flex flex-row place-content-center items-center text-white">
                            <span><BiLogoGoogle size={50}/> </span>
                            <Link to='/calendar'>Entre com o Google</Link>
                        </a>
                </div>
                </div>
            </Container>
        </>
    )
}

export default LoginPage