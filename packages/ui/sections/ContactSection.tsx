import { ContactSectionType, getUrl, useSendMessage } from "utils";

import { CustomForm, CustomImage, Title } from "../components";

interface ContactSectionProps {
  data: ContactSectionType;
}

export function ContactSection({ data }: ContactSectionProps) {
  const { title, subtitle, form, image, backgroundColor } = data;
  const { sendInformationModal, loading } = useSendMessage("contact");

  return (
    <div
      className={`flex flex-col md:flex-row max-w gap-6 md:gap-28 relative md:h-full`}
    >
      <div
        style={{ backgroundColor }}
        className="relative w-full h-[400px] md:h-[700px] md:w-[50%]"
      >
        <div
          className={`absolute rounded-md entrance_opacity_3 top-0 left-[50%] translate-x-[-50%] md:translate-x-[-35%] lg:translate-x-[-25%] md:top-[50%] md:translate-y-[-50%] h-full w-[300px] mt-6 md:mt-0 sm:w-[300px] md:w-[400px] sm:h-[400px] md:h-[450px] `}
        >
          <CustomImage
            classes="rounded-md"
            priority={true}
            alt={image.alt}
            src={getUrl(image.url)}
          />
        </div>
      </div>
      <div className="p-4 entrance_animation sm:py-5 md:py-10  flex flex-col justify-center gap-8">
        <div className="flex flex-col gap-2.5 md:gap-4">
          <div className="flex flex-row justify-between gap-4">
            <Title className="text-center" size="big">
              {title}
            </Title>
          </div>
          <Title size="small" HTMLtag="h2">
            {subtitle}
          </Title>
        </div>
        {form && (
          <CustomForm
            variations="contact"
            loading={loading}
            form={form}
            callback={(result: any) => sendInformationModal(result)}
          />
        )}
      </div>
      <div className="absolute h-auto w-auto transform -scale-x-100 -bottom-10 hidden sm:block sm:-right-28 md:-right-24 -z-20 max-w-4">
        <CustomImage priority={true} alt="flowers" src="/flowers.webp" />
      </div>
    </div>
  );
}
