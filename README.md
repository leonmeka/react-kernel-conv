# Kernel Convolution Playground

This is a simple playground to visualize the effect of different kernels on an image. The kernels are applied to the image using convolution. The playground is writte in typescript and uses the canvas API to draw the images.

<img width="1912" alt="image" src="https://github.com/leonmeka/kernel-conv/assets/15350962/83d0eeaf-5d39-4061-b3a5-c077d0b3aee4">

## Theory

Image kernels are fundamental tools in image processing, serving various purposes such as blurring, sharpening, edge detection, and feature extraction. These kernels, typically small matrices, are applied to images through a process called convolution.

### Kernel Convolution
Convolution involves sliding the kernel over the image, performing a mathematical operation at each position. This operation consists of multiplying the kernel values with the corresponding pixel values in the neighborhood of the current pixel and summing the results. This process is repeated for each pixel, generating a new image that reflects the features emphasized by the kernel.

### Understanding Kernel Matrices
Kernels are represented by small matrices, typically square, with odd dimensions (e.g., 3x3, 5x5). Each value in the matrix dictates the weight or influence of the corresponding pixel in the convolution operation.

## Applications

1. Image Processing: Kernels are extensively used in traditional image editing software like Photoshop or Gimp to apply effects like blurring, sharpening, outlining, and embossing.

2. Feature Extraction: In machine learning, kernels play a crucial role in convolutional neural networks (CNNs) for feature extraction. They help in identifying essential patterns and structures within images, enabling tasks like object recognition and image classification.

## Setup

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open your browser and go to `localhost:3000`

## Usage

1. Upload an image
2. Define a kernel
3. Click on the "Apply Kernel" button
4. The result of the convolution will be displayed

## Examples

Here are a few examples of kernels and their effect on an image:

### "Do nothing" kernel

![nothing](https://github.com/leonmeka/kernel-conv/assets/15350962/f550484d-0d90-45dc-91f5-ceafa6aed138)


A 3x3 matrix with the center value being 1 and all other values being 0. When applied to an image, it has no effect on the image.

```
[
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
```

### Gaussian blur kernel

![gaussian](https://github.com/leonmeka/kernel-conv/assets/15350962/b2ca21cb-b096-4634-b69e-91d10a74d13d)


The Gaussian blur kernel is used to blur an image. It smooths out the image by averaging the pixel values in the neighborhood of each pixel.

```
[
  [1, 2, 1],
  [2, 4, 2],
  [1, 2, 1]
]
```

### Edge detection kernel (Sobel)

![sobel](https://github.com/leonmeka/kernel-conv/assets/15350962/d1749625-07ee-4994-bf26-456950358b99)

The Sobel kernel is used for edge detection. It highlights the edges in an image by computing the gradient of the image intensity at each pixel.

This portion of the Sobel kernel highlights horizontal edges. It detects changes in intensity from left to right or vice versa, effectively tracing horizontal edges within the image.

```
[
  [-1, 0, 1],
  [-2, 0, 2],
  [-1, 0, 1]
]
```

In contrast, this segment of the Sobel kernel targets vertical edges. It identifies variations in intensity from top to bottom or bottom to top, effectively capturing vertical edges present in the image.
```
[
  [-1, -2, -1],
  [0, 0, 0],
  [1, 2, 1]
]
```

### Sharpen kernel (Laplacian)

![laplacian](https://github.com/leonmeka/kernel-conv/assets/15350962/c7f7c317-4b22-47f9-8ba0-abe1e7cc2557)

The sharpen kernel is used to sharpen an image. It enhances the edges in an image by subtracting the blurred version of the image from the original image.

```
[
  [0, -1, 0],
  [-1, 5, -1],
  [0, -1, 0]
]
```
