function Icon(props: any) {
    return <>
        <span className={`items-center ${props.classes}`}>
            {props.type}
        </span>
    </>
}

export default Icon
