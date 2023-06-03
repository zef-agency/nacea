import Image from "next/image";
import { ImageType } from "utils";

export interface ImageProps {
  src: ImageType["url"];
  alt: string;
  priority?: boolean;
  classes?: string;
}

const imageLoader = ({ src, width }: any) => {
  return `${src}?w=${width}&q=${50}`;
};

export function CustomImage(props: ImageProps): JSX.Element {
  const { classes, priority, src, alt, ...imageProps } = props;

  return (
    <Image
      alt={alt}
      width={500}
      height={500}
      quality={75}
      priority={priority}
      src={src}
      className={`w-full h-full object-cover ${classes}`}
      loader={imageLoader}
      {...imageProps}
    />
  );
}
