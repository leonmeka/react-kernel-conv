import { useState } from "react";

export const useKernelConvolution = () => {
  const [output, setOutput] = useState<string | undefined>(undefined);

  const process = (base64: string, kernel: number[][]) => {
    const img = new Image();
    img.src = base64;

    const applyConvolution = (imageData: ImageData, kernel: number[][]) => {
      const { width, height, data } = imageData;
      const kRows = kernel.length;
      const kCols = kernel[0].length;
      const kCenterX = Math.floor(kCols / 2);
      const kCenterY = Math.floor(kRows / 2);

      const kernelSum = kernel.flat().reduce((acc, val) => acc + val, 0) || 1;

      const outputData = new Uint8ClampedArray(data.length);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let r = 0,
            g = 0,
            b = 0;
          for (let ky = 0; ky < kRows; ky++) {
            const yOffset = y + ky - kCenterY;
            if (yOffset >= 0 && yOffset < height) {
              for (let kx = 0; kx < kCols; kx++) {
                const xOffset = x + kx - kCenterX;
                if (xOffset >= 0 && xOffset < width) {
                  const pixelIndex = (yOffset * width + xOffset) * 4;
                  const weight = kernel[ky][kx];
                  r += data[pixelIndex] * weight;
                  g += data[pixelIndex + 1] * weight;
                  b += data[pixelIndex + 2] * weight;
                }
              }
            }
          }
          const outputIndex = (y * width + x) * 4;
          outputData[outputIndex] = Math.min(Math.max(r / kernelSum, 0), 255);
          outputData[outputIndex + 1] = Math.min(
            Math.max(g / kernelSum, 0),
            255
          );
          outputData[outputIndex + 2] = Math.min(
            Math.max(b / kernelSum, 0),
            255
          );
          outputData[outputIndex + 3] = data[outputIndex + 3];
        }
      }

      return new ImageData(outputData, width, height);
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) return;

      const width = img.width;
      const height = img.height;
      canvas.width = width;
      canvas.height = height;

      context.drawImage(img, 0, 0, width, height);
      const imageData = context.getImageData(0, 0, width, height);
      const outputImageData = applyConvolution(imageData, kernel);

      context.putImageData(outputImageData, 0, 0);
      setOutput(canvas.toDataURL());
    };
  };

  return { output, process };
};
