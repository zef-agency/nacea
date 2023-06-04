// @ts-nocheck
import Image from "next/image";
import {
  GetInstagramPosts,
  InstagramSectionType,
  Truncate,
  useSlider,
} from "utils";

import { ArrowCommand, Button, Text, TitleContainer } from "../components";
import { Arrow } from "../svg";

interface InstagramSectionProps {
  data: InstagramSectionType;
}

export function InstagramSection({ data }: InstagramSectionProps) {
  const { title, subtitle, button } = data;
  const { posts, isPostsLoading, isPostsError } = GetInstagramPosts();
  const config = {
    slides: {
      origin: 0,
      perView: 1,
      spacing: 5,
    },
  };
  const { sliderRef, instanceRef, currentSlide, loaded } = useSlider(config);

  if (isPostsError) {
    return <> Erreur lors du chargement des posts ... </>;
  }

  if (isPostsLoading) {
    return <> Chargement des posts ... </>;
  }

  return (
    <div className="py-5 md:py-12 flex flex-col items-center">
      <TitleContainer title={title} subtitle={subtitle} />
      <div className="hidden sm:grid grid-cols-1 gap-6 md:gap-10 sm:grid-cols-2 md:grid-cols-instagram auto-cols-min justify-center mx-2 md:mx-26  my-6 sm:my-16">
        {posts &&
          posts.map((postInsta: any, i: number) => (
            // eslint-disable-next-line @next/next/no-img-element
            <div
              key={i}
              className="relative group transition-all w-fit w-[300px] cursor-pointer"
            >
              <div className="group-hover:brightness-40 transition-all w-[300px] h-[280px] md:w-[320px] md:h-[280px]">
                <Image
                  alt={postInsta.caption}
                  fill={true}
                  className="object-cover w-full h-full rounded-xl"
                  src={postInsta.media_url}
                />
              </div>
              <Text
                variations="white"
                size="smallest"
                className="absolute max-w-[70%] w-full text-center transition-all group-hover:opacity-100 opacity-0 z-40 bottom-6 left-[50%] translate-x-[-50%] "
              >
                {Truncate(postInsta.caption, 70)}
              </Text>
            </div>
          ))}
      </div>

      <div ref={sliderRef} className="keen-slider mt-4">
        <RenderPosts object={posts} />
      </div>
      {loaded && instanceRef.current && (
        <div className="flex sm:hidden flex-row gap-3 my-6">
          <ArrowCommand
            left
            disabled={currentSlide === 0}
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
          />

          <ArrowCommand
            disabled={
              currentSlide ===
              posts.length - instanceRef.current?.options?.slides?.perView
            }
            onClick={(e: any) => {
              e.stopPropagation() || instanceRef.current?.next();
            }}
          />
        </div>
      )}

      {button && (
        <Button icon={<Arrow />} color={button.color} href={button.link}>
          {button.label}
        </Button>
      )}
    </div>
  );
}

const RenderPosts = ({ object }: any) => {
  return (
    <>
      {object.map((postInsta: any, i: number) => (
        <div
          key={i}
          className={`keen-slider__slide number-slide${i} sm:hidden flex items-center justify-center relative  w-fit w-[300px] cursor-pointer`}
        >
          <div className="brightness-40  w-[300px] h-[280px] md:w-[320px] md:h-[280px]">
            <Image
              alt={postInsta.caption}
              fill={true}
              className="object-cover w-full h-full rounded-xl"
              src={postInsta.media_url}
            />
          </div>
          <Text
            variations="white"
            size="smallest"
            className="absolute max-w-[50%] w-full text-center z-40 bottom-6 left-[50%] translate-x-[-50%] "
          >
            {Truncate(postInsta.caption, 70)}
          </Text>
        </div>
      ))}
    </>
  );
};
