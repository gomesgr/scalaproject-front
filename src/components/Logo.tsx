import SVGLogo from '../assets/logo.svg'
function Logo(props: any) {
    return (
        <>
            <img src={SVGLogo} alt='Logo' className={`w-12 md:w-max ${props.classes}`}></img>
        </>
    )


}

export default Logo