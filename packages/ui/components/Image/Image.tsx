import Image from "next/image";
import React from "react";
import { ImageType } from "utils";

export interface ImageProps {
  src: ImageType["url"];
  alt: string;
  priority?: boolean;
}

const imageLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export function CustomImage(props: ImageProps): JSX.Element {
  const { priority, src, alt, ...imageProps } = props;

  return (
    <div className={"w-full h-full relative z-0"}>
      <Image
        alt={alt}
        width={1000}
        height={1000}
        priority={priority}
        src={src}
        loader={imageLoader}
        {...imageProps}
      />
    </div>
  );
}
