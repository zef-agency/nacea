import { CardErrors, CardSectionType } from "utils";

import { Button, CustomForm, Title } from "../components";

interface CardSectionProps {
  data: CardSectionType;
}

export function CardSection({ data }: CardSectionProps) {
  const { button, title, form } = data;

  return (
    <div className="my-6">
      <Title> {title} </Title>
      {button && (
        <Button href={button.link} color={button.color}>
          {button.label}
        </Button>
      )}
      {form && (
        <CustomForm
          form={form}
          callback={(result: any) => console.log("result", result)}
        />
      )}
    </div>
  );
}
