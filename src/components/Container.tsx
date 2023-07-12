import Navbar from "./Navbar"

function Container(props: any) {
    return (
        <>
            <div id='container' className='container shadow-xl
                flex flex-row h-screen'>
                {props.children}
            </div>
        </>
    )
}

export default Container