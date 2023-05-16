import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import { CarousselSectionType, getUrl, Truncate } from "utils";

import {
  Button,
  CustomImage,
  Text,
  Title,
  TitleContainer,
  Wrapper,
} from "../components";
import { Arrow } from "../svg";

interface CarousselSectionProps {
  data: CarousselSectionType;
}

export function CarousselSection({ data }: CarousselSectionProps) {
  const { title, subtitle, button, attributes } = data;
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      origin: 0,
      perView: 4,
      spacing: 10,
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
    <div className="pt-4 md:pt-8">
      <TitleContainer title={title} subtitle={subtitle} />
      <Wrapper classes="flex flex-col mt-8 gap-8 items-center">
        <div ref={sliderRef} className="keen-slider ">
          <RenderCards
            object={
              attributes[0].events
                ? attributes[0].events
                : attributes[0].products
            }
          />
        </div>
        <div className="flex flex-row gap-3">
          <ArrowCommand
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
          />
          <ArrowCommand
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
          />
        </div>
        <Button
          className="w-full sm:w-fit"
          icon={<Arrow />}
          color={button.color}
          href={button.link}
        >
          {button.label}
        </Button>
      </Wrapper>
    </div>
  );
}

const RenderCards = ({ object }: any) => {
  return (
    <>
      {object.map((card: any, i: number) => (
        <div key={i} className={`keen-slider__slide number-slide${i}`}>
          <div className="flex flex-col items-center max-w-[280px]">
            <div className="mb-2">
              <CustomImage
                priority={true}
                alt={card.image.alt}
                src={getUrl(card.image.url)}
              />
            </div>
            <div className="w-full">
              <Title size="medium">{card.label}</Title>
              <Text> {Truncate(card.intro, 80)} </Text>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

function ArrowCommand(props: {
  left?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: EventTarget) => void;
}) {
  return (
    <div
      style={{ transform: props.left ? "rotate(180deg)" : "rotate(0deg)" }}
      className="px-4 py-2  rounded-xs bg-[#FFD874] cursor-pointer"
      onClick={props.onClick}
    >
      {props.left ? <Arrow color="black" /> : <Arrow color="black" />}
    </div>
  );
}
