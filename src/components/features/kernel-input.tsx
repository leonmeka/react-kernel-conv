import { ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

interface KernelInputProps {
  kernel: number[][];
  onKernelChange: (kernel: number[][]) => void;
}

export const KernelInput = ({ kernel, onKernelChange }: KernelInputProps) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    rowIdx: number,
    colIdx: number
  ) => {
    const { value } = e.target;
    const newKernel = kernel.map((row, rowIndex) =>
      row.map((col, colIndex) =>
        rowIndex === rowIdx && colIndex === colIdx ? +value : col
      )
    );

    onKernelChange(newKernel);
  };

  const handleReset = () => {
    onKernelChange([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  };

  const handleRandom = () =>
    onKernelChange(
      Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () => Math.floor(Math.random() * 3) - 1)
      )
    );

  return (
    <Card className="w-64">
      <CardHeader>
        <CardTitle>Kernel</CardTitle>
        <CardDescription>Define the kernel matrix</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-2 grid-cols-3">
        {kernel.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <Input
              key={`${rowIndex}-${colIndex}`}
              type="number"
              value={value}
              onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
            />
          ))
        )}
      </CardContent>

      <CardFooter className="flex gap-2 w-full">
        <Button onClick={handleRandom} className="w-full">
          Random
        </Button>
        <Button onClick={handleReset} variant={"secondary"} className="w-full">
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};
