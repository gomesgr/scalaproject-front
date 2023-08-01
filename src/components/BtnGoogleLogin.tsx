import { BiLogoGoogle } from 'react-icons/bi'

import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleProfile, urlMembro } from './Constants'

export default function BtnGoogleLogin(props: any) {
    const navigate = useNavigate()

    // TODO
    // Quando o usuário loga denovo, retorna o código 500 (pois já existe um usuário na tabela)
    const saveProfile = () => {
        try {
            const profile: GoogleProfile = JSON.parse(
                localStorage.getItem('perfil')!
            )
            console.log(profile)
            axios
                .post(`${urlMembro}/${profile.email}`, {
                    nome: profile.given_name,
                    usuario: profile.name,
                    administrador: '0',
                })
                .then((resp) => console.log(resp))
                .catch((err) => console.error(err))
        } catch (ex) {
            console.error(ex)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('perfil')) {
            navigate('/calendario')
        }
        if (props.usuario) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${props.usuario.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${props.usuario.acces_token}`,
                            Accept: 'application/json',
                        },
                    }
                )
                .then((resp) => {
                    props.setPerfil(resp.data)
                    localStorage.setItem('perfil', JSON.stringify(resp.data))
                })
                .then((_) =>
                    localStorage.setItem(
                        'usuario',
                        JSON.stringify(props.usuario)
                    )
                )
                .then((_) => saveProfile())
                .then((_) => navigate('/calendario'))
                .catch((err) => console.error(err))
        }
    }, [props.usuario])

    const login = useGoogleLogin({
        onSuccess: (resp) => {
            props.setUsuario(resp)
        },
        onError: (error) => console.error('Erro', error),
    })

    return (
        <button onClick={() => login()}>
            <div
                id='loginBtn'
                className='flex flex-row place-content-center items-center'
            >
                <span className='relative flex h-3 w-3'>
                    <span className='animate-ping absolute left-5/6 bottom-5 inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
                    <span className='relative inline-flex left-5/6 bottom-5 rounded-full h-3 w-3 bg-red-400'></span>
                </span>
                <BiLogoGoogle size={50} />
                Entre com o Google
            </div>
        </button>
    )
}
