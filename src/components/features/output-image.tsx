import { Card, CardFooter, CardHeader } from "@/components/ui/card";

interface OutputImageProps {
  image: string | undefined;
}

export const OutputImage = ({ image }: OutputImageProps) => {
  return (
    <Card>
      <CardHeader className="w-[500px] h-[500px] cursor-pointer">
        {image && (
          <img
            src={image}
            width={500}
            height={500}
            className="object-cover rounded-md overflow-hidden w-full h-full"
          />
        )}
      </CardHeader>

      <CardFooter>
        <span className="text-xs text-muted-foreground">Output Image</span>
      </CardFooter>
    </Card>
  );
};
