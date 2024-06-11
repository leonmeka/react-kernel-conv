import { DragEvent } from "react";

interface UseFileProps {
  onImageChange: (base64: string) => void;
}

export const useFileInput = ({ onImageChange }: UseFileProps) => {
  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      onImageChange(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        processFile(file);
      }
    };

    input.click();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  return {
    handleClick,
    handleDrop,
    handleDragOver,
  };
};
