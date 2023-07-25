import { BiLogoGoogle } from 'react-icons/bi'
import { NavLink } from "react-router-dom";
import Container from "../Container";
import Logo from "../Logo";
import BtnGoogleLogin from '../BtnGoogleLogin';
import { useEffect } from 'react';
import axios from 'axios';

function LoginPage(props: any) {
    
    

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
                            <BtnGoogleLogin setAuth={props.setAuth} setUsuario={ props.setUsuario } usuario={props.usuario} setPerfil={ props.setPerfil } />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default LoginPage