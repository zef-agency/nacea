// @ts-nocheck
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { CarousselSectionType, getUrl, Truncate } from "utils";

import {
  Button,
  CustomImage,
  Text,
  Title,
  TitleContainer,
  Wrapper,
} from "../components";
import { Links } from "../components/Buttons/Link";
import { Arrow } from "../svg";

interface CarousselSectionProps {
  data: CarousselSectionType;
}

export function CarousselSection({ data }: CarousselSectionProps) {
  const { title, subtitle, button, attributes } = data;
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const [loaded, setLoaded] = useState(false);

  const items = attributes[0].events
    ? attributes[0].events
    : attributes[0].products;
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      origin: 0,
      perView: items.length >= 4 ? 4 : items.length,
      spacing: 5,
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: {
          origin: 0,
          perView: 3,
          spacing: 10,
        },
      },
      "(max-width: 850px)": {
        slides: {
          origin: 0,
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 460px)": {
        slides: {
          origin: 0,
          perView: 1,
          spacing: 10,
        },
      },
    },
  });

  return (
    <div className="py-5 md:py-12">
      <TitleContainer title={title} subtitle={subtitle} />
      <Wrapper classes="flex flex-col sm:mt-8 gap-8 items-center">
        <div ref={sliderRef} className="keen-slider">
          <RenderCards object={items} />
        </div>
        {loaded && instanceRef.current && (
          <div className="flex flex-row gap-3">
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
                items.length - instanceRef.current?.options?.slides?.perView
              }
              onClick={(e: any) => {
                e.stopPropagation() || instanceRef.current?.next();
              }}
            />
          </div>
        )}

        {button && (
          <Button
            className="w-full sm:w-fit"
            icon={<Arrow />}
            color={button.color}
            href={button.link}
          >
            {button.label}
          </Button>
        )}
      </Wrapper>
    </div>
  );
}

const RenderCards = ({ object }: any) => {
  return (
    <>
      {object.map((card: any, i: number) => (
        <div
          key={i}
          className={`keen-slider__slide number-slide${i} flex items-center justify-center`}
        >
          <div className="flex flex-col justify-start items-center w-[270px] md:max-w-[275px] mx-0 my-auto">
            <div className="mb-2 w-[270px] md:max-w-[275px] h-[207px]">
              <CustomImage
                classes=" rounded-xl"
                priority={true}
                alt={card.image.alt}
                src={getUrl(card.image.url)}
              />
            </div>
            <div className="w-full">
              <Title className="mb-1" size="regular" HTMLtag="h3">
                {card.label}
              </Title>
              <Text> {Truncate(card.intro, 80)} </Text>
              {card.button && (
                <Links
                  className="w-full sm:w-fit"
                  leftIcon
                  weight="semiBold"
                  icon={<Arrow color={card.button.color} />}
                  color={card.button.color}
                  href={card.button.link}
                >
                  {card.button.label}
                </Links>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

function ArrowCommand(props: {
  left?: boolean;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: any) => void;
}) {
  return (
    <div
      style={{
        transform: props.left ? "rotate(180deg)" : "rotate(0deg)",
        backgroundColor: props.disabled ? "#F4E7C4" : "#FFD874",
      }}
      className={`px-4 py-2  rounded-xs   ${
        props.disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      // eslint-disable-next-line no-empty-function
      onClick={!props.disabled ? props.onClick : () => {}}
    >
      {props.left ? <Arrow color="black" /> : <Arrow color="black" />}
    </div>
  );
}
