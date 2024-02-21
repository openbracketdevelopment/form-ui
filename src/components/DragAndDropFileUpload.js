import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const DragAndDropFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  useEffect(() => {
    if (uploadStatus === "Complete") {
      // Show Upload Complete message for 3 seconds
      const timeout = setTimeout(() => {
        setUploadStatus("");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [uploadStatus]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadStatus("");
    uploadFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    setUploadStatus("");
    uploadFile(file);
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    setUploadStatus("");
    setFilePreview(null);
  };

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "UPLOAD_ENDPOINT_HERE");
    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(progress);
      }
    });
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          setUploadStatus("Complete");
        } else {
          setUploadStatus("Upload failed");
        }
      }
    };
    xhr.send(formData);
  };

  return (
    <div className="flex flex-col items-center mb-4">
      {selectedFile ? (
        <>
          {/* UI after file has been uploaded */}
          <div className="w-full border border-gray rounded-lg flex flex-col items-center justify-center p-5 mb-4">
            <div
              className="grid justify-center w-full border-dashed border-2 border-gray rounded-lg pt-8 pl-4 pr-4 cursor-pointer mb-4"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="p-4 w-full mb-4">
                <div className="flex flex-col justify-between items-center relative">
                  <button
                    onClick={handleRemove}
                    className="absolute -top-1 -right-1 bg-blue rounded-full"
                  >
                    <IoCloseOutline className="text-white" />
                  </button>
                  {filePreview && (
                    <img
                      src={filePreview}
                      alt=""
                      className="h-[100px] w-[130px] object-cover rounded-lg mb-2"
                    />
                  )}
                  <div>
                    <p className="font-raleway-regular text-gray-200 text-center">
                      {selectedFile.name}
                    </p>
                    <p className="text-center text-gray-100 text-xs">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleRemove}
              className="bg-blue-500 text-white block text-center bg-blue min-w-[250px] px-4 py-2 rounded-md cursor-pointer"
            >
              Remove
            </button>
          </div>
          {/* Progress bar */}
          <div className="grid grid-cols-custom-column-icon w-full p-2 pt-3 border-gray-300 border-t border-b">
            <img
              src="/assets/images/image-icon.svg"
              alt=""
              className="w-[20px] flex justify-self-center mb-3"
            />
            <div className="progress-bar">
              <div className="w-full grid grid-cols-2 items-end mb-1">
                <p className="font-raleway-regular text-gray-200">
                  {selectedFile.name}
                </p>
                <p className="text-right text-gray-100 text-xs">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <div className="bg-gray-200 h-[3px] w-full">
                <div
                  className="bg-orange h-[3px]"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {uploadStatus === "Complete" && (
            <p className="text-black">Upload Complete</p>
          )}
        </>
      ) : (
        <>
          {/* Drag and Drop UI */}
          <div className="w-full border border-gray rounded-lg flex flex-col items-center justify-center p-5 mb-4">
            <div
              className="grid justify-center w-full border-dashed border-2 border-gray rounded-lg pt-11 pb-8 pl-4 pr-4 cursor-pointer mb-4"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <img
                src="/assets/images/file-icon.svg"
                alt=""
                className="w-[20px] flex justify-self-center mb-3"
              />
              <p className="font-raleway-regular">
                Drag & Drop Here Or
                <label
                  htmlFor="file-upload"
                  className="font-raleway-bold mt-2 text-blue p-2 rounded cursor-pointer"
                >
                  Browse
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".jpg,.jpeg,.png,.gif"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </p>
            </div>
            <div>
              <label
                htmlFor="upload-manifest"
                className="bg-blue-500 font-raleway-bold text-white block text-center bg-blue min-w-[200px] sm:min-w-[250px] px-4 py-2 rounded-md cursor-pointer"
              >
                Upload Manifest
              </label>
              <input
                id="upload-manifest"
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </div>
          <div className="grid grid-cols-custom-column-icon w-full p-2 pt-3 border-gray-300 border-t border-b">
            <img
              src="/assets/images/image-icon.svg"
              alt=""
              className="w-[20px] flex justify-self-center mb-3"
            />
            <div className="progress-bar">
              <div className="w-full grid grid-cols-2 items-end mb-1">
                <p className="font-raleway-regular text-gray-200">
                  WN-DAL-0726-NH20166.csv
                </p>
                <p className="text-right text-gray-100 text-xs">
                  <span className="align-text-bottom">5.7</span>MB
                </p>
              </div>
              <div className="bg-gray-200 h-[3px] w-full">
                <div
                  className="bg-orange h-[3px]"
                  style={{ width: `2%` }}
                ></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DragAndDropFileUpload;
