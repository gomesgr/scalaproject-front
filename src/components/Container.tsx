function Container(props: any) {
    return (
        <>
            <div className='container bg-slate-100 shadow-xl
                flex flex-col h-screen'>
                {props.children}
            </div>
        </>
    )
}

export default Container