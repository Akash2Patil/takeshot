import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  // 📸 Capture photo
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) setCapturedImage(imageSrc);
  }, []);

  // 💾 Download captured image
  const downloadImage = useCallback(() => {
    if (capturedImage) {
      const link = document.createElement("a");
      link.href = capturedImage;
      link.download = `captured_image_${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [capturedImage]);

  // 🔄 Retake photo
  const retake = useCallback(() => {
    setCapturedImage(null);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 gap-6">
      {!capturedImage ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="rounded-2xl shadow-xl border-4 border-blue-500"
          />
          <button
            onClick={capture}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Capture Photo
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <img
            src={capturedImage}
            alt="Captured"
            className="rounded-xl shadow-lg border border-gray-300"
          />
          <div className="flex gap-4">
            <button
              onClick={downloadImage}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
            >
              Download
            </button>
            <button
              onClick={retake}
              className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
            >
              Retake
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
