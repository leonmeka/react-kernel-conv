# Kernel Convolution Playground

This is a simple playground to visualize the effect of different kernels on an image. The kernels are applied to the image using convolution. The playground is writte in typescript and uses the canvas API to draw the images.

<img width="1912" alt="image" src="https://github.com/leonmeka/kernel-conv/assets/15350962/83d0eeaf-5d39-4061-b3a5-c077d0b3aee4">

## Theory

An image kernel is a small matrix used to apply effects like the ones you might find in Photoshop or Gimp, such as blurring, sharpening, outlining or embossing. They're also used in machine learning for 'feature extraction', a technique for determining the most important portions of an image. In this context the process is referred to more generally as "convolution" (see: convolutional neural networks.)

The kernel is applied to each pixel in the image, resulting in a new image that highlights or emphasizes the features captured by the kernel. The kernel is a small matrix that is applied to the image using convolution.

The convolution operation involves sliding the kernel over the image, multiplying the kernel values with the pixel values in the neighborhood of the current pixel, and summing the results to get the new pixel value. This process is repeated for each pixel in the image, resulting in a new image that highlights or emphasizes the features captured by the kernel.

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

```
[
  [-1, 0, 1],
  [-2, 0, 2],
  [-1, 0, 1]
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
