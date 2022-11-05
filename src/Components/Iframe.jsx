const Iframe = ({srcLink, vidTitle}) => {
    return (
        <iframe className="responsive-iframe" src={srcLink} title={vidTitle}></iframe>
    )
}

export default Iframe;