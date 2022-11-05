import { useState } from "react";
import File from "./File"
import { sortByKey } from "../FunctionUtility"

const Folder = ({idx, folderId, folderName, content, onChangeVideo, folderActiveClass, onChangeFolderActiveIdx}) => {
    const [showFiles, setShowFiles] = useState(false)
    const [fileActiveClass, setFileActiveClass] = useState(null)

    const onShowFiles = (e) => {
        e.stopPropagation()
        setShowFiles(showFiles ? false : true)
        onChangeFolderActiveIdx(parseInt(idx))
    }

    const onChangeFileActiveIdx = (idx) => {
        setFileActiveClass(idx)
    }
    
    return (
        <div id={folderId} className={`folder ${folderActiveClass} ${(showFiles ? "open" : "")}`} onClick={onShowFiles}>
            <h3>{folderName.toLowerCase()}</h3>
            { showFiles &&
                <div className="files">
                    {
                        sortByKey(content, 'name').map(({id, name, webViewLink}, index) => {
                            return (
                                <File
                                    key={id}
                                    idx={index}
                                    url={webViewLink}
                                    name={name}
                                    onChangeVideo={onChangeVideo}
                                    fileActiveClass={fileActiveClass === index ? "active" : ""}
                                    onChangeFileActiveIdx={() => onChangeFileActiveIdx(index)}
                                />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Folder;