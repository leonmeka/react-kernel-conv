import { KernelInput } from "@/components/features/kernel-input";
import { OutputImage } from "@/components/features/output-image";
import { SourceImage } from "@/components/features/source-image";
import { useEffect, useState } from "react";
import { useKernelConvolution } from "./hooks/use-kernel-convolution";

import DefaultImage from "./assets/test_image.png";

function App() {
  const { output, process } = useKernelConvolution();

  const [image, setImage] = useState<string | undefined>(DefaultImage);
  const [kernel, setKernel] = useState<number[][]>(
    Array(3).fill(Array(3).fill(1))
  );

  useEffect(() => {
    if (!image) {
      return;
    }

    process(image, kernel);
  }, [image, kernel, process]);

  return (
    <div className="bg-background min-h-screen flex flex-col p-16">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">
          Image Kernel Convolution
        </h1>
        <p className="text-xl text-muted-foreground mt-2">
          A playground to apply kernel convolution on images
        </p>
      </header>

      <main className="flex-grow flex flex-col lg:flex-row items-center justify-center gap-16">
        <SourceImage image={image} onImageChange={setImage} />
        <KernelInput kernel={kernel} onKernelChange={setKernel} />
        <OutputImage image={output} />
      </main>
    </div>
  );
}

export default App;
