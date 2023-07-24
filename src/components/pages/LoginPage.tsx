import { BiLogoGoogle } from 'react-icons/bi'
import { NavLink } from "react-router-dom";
import Container from "../Container";
import Logo from "../Logo";
function LoginPage() {
    return (
        <>
            <Container>
                <div className='w-full grid grid-cols-4 justify-center'>
                    <div className='m-auto'>
                        <Logo classes='scale-200 hover:-translate-y-5 transition ease-out' />
                    </div>
                    <div className="w-full grid text-center place-content-center col-span-3">
                        <div className='grid gap-5'>
                            <h1 className='text-5xl'>Login</h1>
                            <p className="tracking-wider">Entre com sua conta do Google</p>
                        </div>
                        <div className="text-center mt-5">
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