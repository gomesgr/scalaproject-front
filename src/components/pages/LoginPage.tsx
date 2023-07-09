import Navbar from "../Navbar"
import {BiLogoGoogle} from 'react-icons/bi'
function LoginPage() {
    return (
        <>
            <Navbar />
            <div className="align-middle h-full w-full text-white grid text-center place-content-center">
                <div className='grid gap-3'>
                    <h1 className='drop-shadow-2xl text-5xl'>Login</h1>
                    <p className="tracking-wide">Entre com sua conta do Google</p>
                </div>
                <div className="text-center bg-pageBackground mt-5 rounded-full 
                    hover:bg-windowColor hover:text-black">
                        <a href='' className="flex flex-row place-content-center items-center">
                            <span><BiLogoGoogle size={50}/> </span>
                            <span>Entre com o Google</span>
                        </a>
                </div>
            </div>
        </>
    )
}

export default LoginPage