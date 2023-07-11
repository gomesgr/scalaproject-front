function Container(props: any) {
    return (
        <>
            <div id='container' className='container bg-slate-100 shadow-xl
                flex flex-row h-screen'>
                {props.children}
            </div>
        </>
    )
}

export default Container