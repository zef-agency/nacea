import React from "react";
import { CardSectionType } from "utils";

import { Button, Input, Title } from "../components";

interface CardSectionProps {
  data: CardSectionType;
}

export function CardSection({ data }: CardSectionProps) {
  const { button, input, title } = data;

  return (
    <div className="my-6">
      <Title> {title} </Title>
      {button && (
        <Button href={button.link} color={button.color}>
          {button.label}
        </Button>
      )}
      <form>
        {input && input.map((inp, k) => <Input key={k} input={inp} />)}
        <Button type="submit" color="#128382">
          Appuyer ici
        </Button>
      </form>
    </div>
  );
}
