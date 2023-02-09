import React,{Fragment, useState} from 'react'
import FileUploader from 'devextreme-react/file-uploader';
const Uploader = () => {
    const [files, setFiles] = useState("");
    console.log("🚀 ~ file: Uploader.js:5 ~ Uploader ~ files", (files))

    const handleChange = e => {
        const fileReader = new FileReader();
        console.log("🚀 ~ file: Uploader.js:8 ~ handleChange ~ fileReader", e.target.files[0])

        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result?.routeDetails);
          setFiles(e.target.result);
        };
      };
  return (
    <Fragment>

        {/* <FileUploader onFilesUploaded={(e)=>{
          console.log(e)
        }}/> */}

        <input type="file" onChange={handleChange} />
    </Fragment>
  )
}

export default Uploader