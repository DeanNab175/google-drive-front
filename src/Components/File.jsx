
const File = ({idx, url, name, onChangeVideo, fileActiveClass, onChangeFileActiveIdx}) => {

    const onClickVideo = (e) => {
        e.stopPropagation()
        onChangeVideo(url, name)
        onChangeFileActiveIdx(parseInt(idx))
    }

    return (
        <div onClick={onClickVideo} className={fileActiveClass}>
            <h4>{name}</h4>
        </div>
    )
}

export default File;