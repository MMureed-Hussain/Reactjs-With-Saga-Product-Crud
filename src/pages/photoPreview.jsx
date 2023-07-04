import React, { useState } from "react";
import axios from "axios";

const photoPreview = () => {
  const [file, setFile] = useState(null);

  const uploadSingleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const upload = () => {
    const formData = new FormData();
    formData.append("image", file);

    let url = "http://localhost:8000/upload.php";
    axios.post(url, formData).then((res) => {
      console.warn(res.data);
    });
  };

  let imgPreview;
  if (file) {
    imgPreview = <img src={file} alt="" />;
  }

  return (
    <form>
      <div className="form-group preview">{imgPreview}</div>

      <div className="form-group">
        <input
          type="file"
          className="form-control"
          onChange={uploadSingleFile}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={upload}
      >
        Upload
      </button>
    </form>
  );
};

export default photoPreview;
