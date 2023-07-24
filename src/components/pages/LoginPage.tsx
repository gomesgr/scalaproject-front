import Navbar from "../Navbar"
import { BiLogoGoogle } from 'react-icons/bi'
import { NavLink } from "react-router-dom";
import Container from "../Container";
function LoginPage() {
    return (
        <>
            <Container>
            <div className='w-full'>
                <Navbar />
                <div className="h-auto w-full grid text-center place-content-center py-32 align-middle">
                    <div className='grid gap-5'>
                        <h1 className='drop-shadow-2xl text-5xl'>Login</h1>
                        <p className="tracking-wide">Entre com sua conta do Google</p>
                    </div>
                    <div className="text-center bg-pageBackground mt-5 rounded-full 
                        hover:bg-windowColor hover:text-text">
                            <NavLink to='/calendario'>
                                <div id='loginBtn' className="flex flex-row place-content-center items-center">
                                    <span><BiLogoGoogle size={50}/> </span>
                                    Entre com o Google
                                </div>
                            </NavLink>
                    </div>
                </div>
            </div>
            </Container>
        </>
    )
}

export default LoginPage