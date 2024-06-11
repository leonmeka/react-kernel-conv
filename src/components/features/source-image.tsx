import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { useFileInput } from "@/hooks/use-file-input";

interface SourceImageProps {
  image: string | undefined;
  onImageChange: (base64: string) => void;
}

export const SourceImage = ({ image, onImageChange }: SourceImageProps) => {
  const { handleClick, handleDrop, handleDragOver } = useFileInput({
    onImageChange,
  });

  return (
    <Card>
      <CardHeader
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-[500px] h-[500px] cursor-pointer"
      >
        {image && (
          <img
            src={image}
            width={500}
            height={500}
            className="object-cover rounded-md overflow-hidden w-full h-full"
          />
        )}

        {!image && (
          <div className="flex flex-col items-center justify-center w-full h-full rounded-lg">
            <span className="text-sm text-muted-foreground">
              Drag & drop your image here or click to browse
            </span>
          </div>
        )}
      </CardHeader>

      <CardFooter>
        <span className="text-xs text-muted-foreground">Source Image</span>
      </CardFooter>
    </Card>
  );
};
