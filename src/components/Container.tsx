function Container(props: any) {
    return (
        <>
            <div className='container bg-containerColor flex flex-col h-screen items-center'>
                {props.children}
            </div>
        </>
    )
}

export default Container