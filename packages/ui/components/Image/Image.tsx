import Image from "next/image";
import { ImageType } from "utils";

export interface ImageProps {
  src: ImageType["url"];
  alt: string;
  priority?: boolean;
  classes?: string;
}

const imageLoader = ({ src, width }: any) => {
  return `${src}?w=${width}&q=${90}`;
};

export function CustomImage(props: ImageProps): JSX.Element {
  const { classes, priority, src, alt, ...imageProps } = props;

  return (
    <Image
      alt={alt ? alt : src}
      width={500}
      height={500}
      quality={100}
      loading={!priority ? "lazy" : "eager"}
      sizes="(max-width: 320px) 320px, (max-width: 400px) 400px, (max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"
      priority={priority}
      src={src}
      className={`w-full h-full object-cover ${classes}`}
      loader={imageLoader}
      {...imageProps}
    />
  );
}
