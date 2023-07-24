function Container(props: any) {
    return (
        <>
            <div id='container' className='flex flex-row container h-screen bg-background'>
                {props.children}
            </div>
        </>
    )
}

export default Container