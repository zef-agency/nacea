import NextImage, { ImageProps as NextImageProps } from "next/image";
import React from "react";
import { ImageType } from "types";

export interface ImageProps extends NextImageProps {
  src: ImageType["url"];
  priority?: boolean;
}

export function Image(props: ImageProps): JSX.Element {
  const { priority, ...imageProps } = props;

  return (
    <div className={"w-full h-full relative z-0"}>
      <NextImage
        width={1000}
        height={1000}
        layout="responsive"
        objectFit="contain"
        priority={priority}
        {...imageProps}
      />
    </div>
  );
}
