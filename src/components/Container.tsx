function Container(props: any) {
    return (
        <>
            <div id='container' className='container shadow-xl
                h-screen bg-slate-200'>
                {props.children}
            </div>
        </>
    )
}

export default Container