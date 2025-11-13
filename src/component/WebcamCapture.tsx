import { Camera, Download, RotateCcw } from "lucide-react";
import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "./global/Button";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  // Capture photo
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) setCapturedImage(imageSrc);
  }, []);

  // Download captured image
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

  // Retake photo
  const retake = useCallback(() => {
    setCapturedImage(null);
  }, []);

  return (
    <div className="flex flex-col w-4xl mx-auto items-center justify-center min-h-screen gap-3">
      {!capturedImage ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="rounded-2xl shadow-xl border-4 border-green-500"
          />
          <Button onClick={capture}>
            <Camera className="text-black" />
          </Button>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <img
            src={capturedImage}
            alt="Captured"
            className="rounded-xl shadow-lg border border-gray-300"
          />

          <div className="flex gap-4">
            <Button onClick={downloadImage}>
              <Download className="text-black" />
            </Button>

            <Button onClick={retake}>
              <RotateCcw className="text-black" />
            </Button>
          </div>

        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
