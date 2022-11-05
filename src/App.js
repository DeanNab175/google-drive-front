import { useState, useEffect } from "react";
import axios from "axios";
import Folder from "./Components/Folder";
import Iframe from "./Components/Iframe";
import { sortByKey, modifyUrl } from "./FunctionUtility"
import DrivesDropDown from "./Components/DrivesDropDown";

const App = () => {
  const [files, setFiles] = useState([])
  const [videoUrl, setVideoUrl] = useState("")
  const [videoTitle, setVideoTitle] = useState("")
  const [folderActiveClass, setFolderActiveClass] = useState(null)
  const [driveEmail, setDriveEmail] = useState("3dsmax.mayacryeng@gmail.com")
  
  useEffect(() => {
    const driveUrl = `https://driveapi.pythonanywhere.com/${driveEmail}`
    getVideos(driveUrl)
  }, [driveEmail])

  const getVideos = async (url) => {
    // check if google drive files is already in local storage
    const googleDriveFiles = localStorage.getItem("gdrivefiles")

    if(googleDriveFiles) {
      const lsFiles = JSON.parse(googleDriveFiles)
      const sortedLSFirstEl = sortByKey(lsFiles[0].folderContent, 'name')[0]
      
      setFiles(lsFiles)
      setVideoUrl(modifyUrl(sortedLSFirstEl.webViewLink))
      setVideoTitle(sortedLSFirstEl.name)
    } else {
      axios.get(url)
        .then(res => {
          const filteredArr = res.data.filter((folder) => {
            return folder.folderContent.length !== 0
          })
          const sortedArr = sortByKey(filteredArr, 'folderName')
          const sortedFirstEl = sortByKey(sortedArr[0].folderContent, 'name')[0]
          
          localStorage.setItem("gdrivefiles", JSON.stringify(sortedArr))
          setFiles(sortedArr)
          setVideoUrl(modifyUrl(sortedFirstEl.webViewLink))
          setVideoTitle(sortedFirstEl.name)
        })
        .catch(err => console.log(err))

    }
  }

  const onChangeVideo = (url, title) => {
    setVideoUrl(modifyUrl(url))
    setVideoTitle(title)
  }

  const onChangeFolderActiveIdx = (idx) => {
    setFolderActiveClass(idx)
  }

  const handleDriveEmailChange = (e) => {
    localStorage.clear()
    setDriveEmail(e.target.value)
    setFiles([])
    setVideoUrl("")
    setVideoTitle("")
  }


  return (
    <div className="App">
      <div className="container">
        <DrivesDropDown
          driveEmail={driveEmail}
          handleDriveEmailChange={handleDriveEmailChange}
        />
      </div>

      <div className="container grid-container">
        <div className="video-wrap">
          {
            videoUrl &&
            <div className="video-box">
              <Iframe srcLink={videoUrl} />
            </div>
          }
          
          {
            videoTitle && <h1>{videoTitle}</h1>
          }
        </div>
        
        <div className="folder-wrap">
          { files &&
            files.map( ({folderContent, folderId, folderName}, index) => {
              return (
                <Folder
                  key={folderId}
                  idx={index}
                  folderId={"folder-" + index}
                  folderName={folderName}
                  content={folderContent}
                  onChangeVideo={onChangeVideo}
                  folderActiveClass={folderActiveClass === index ? "active" : ""}
                  onChangeFolderActiveIdx={() => onChangeFolderActiveIdx(index)}
                  />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
