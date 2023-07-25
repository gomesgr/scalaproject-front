import { BiLogoGoogle } from "react-icons/bi";

import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function BtnGoogleLogin(props: any) {
    const navigate = useNavigate()
    
    useEffect(() => {
        if (localStorage.getItem('perfil') === '1') {
            navigate('/calendario')
        }
        console.log(props.usuario)
        if (props.usuario) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${props.usuario.access_token}`, {
                headers: {
                    Authorization: `Bearer ${props.usuario.acces_token}`,
                    Accept: 'application/json'
                }
            }).then((resp) => props.setPerfil(resp.data))
                .then((_) => localStorage.setItem('perfil', '1'))
                .then((_) => props.setAuth(true))
                .then((_) => navigate('/calendario'))
                .catch((err) => console.error(err))
        }
    }, [props.usuario])

    const login = useGoogleLogin({
        onSuccess: (resp) => {
            props.setUsuario(resp)
        },
        onError: (error) => console.error('Erro', error)
    })

    return <button onClick={() => login()}>
        <div id='loginBtn' className="flex flex-row place-content-center items-center">
            <span><BiLogoGoogle size={50}/> </span>
            Entre com o Google
        </div>
    </button>
}