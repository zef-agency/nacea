import React from "react";
import { SlideSectionType } from "utils";

import { Title } from "../components";

interface SlideSectionProps {
  data: SlideSectionType;
}

export function SlideSection({ data }: SlideSectionProps) {
  const { events, backgroundColor } = data;

  return (
    <div className="py-6 flex whitespace-nowrap  overflow-hidden border border-y-whiteGray">
      <div className="animate-slider items-center flex gap-8">
        {events.map((event: any, k: number) => (
          <>
            <div
              style={{ backgroundColor }}
              className="rounded-full w-5 h-5"
            ></div>
            <Title size="semiBig" key={k} HTMLtag="h3">
              {event.label}
            </Title>
          </>
        ))}
        {events.map((event: any, k: number) => (
          <>
            <div
              style={{ backgroundColor }}
              className="rounded-full w-5 h-5"
            ></div>
            <Title size="semiBig" key={k} HTMLtag="h3">
              {event.label}
            </Title>
          </>
        ))}
        {events.map((event: any, k: number) => (
          <>
            <div
              style={{ backgroundColor }}
              className="rounded-full w-5 h-5"
            ></div>
            <Title size="semiBig" key={k} HTMLtag="h3">
              {event.label}
            </Title>
          </>
        ))}
      </div>
    </div>
  );
}
