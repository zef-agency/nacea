import { ContactModalType, useClickOut, useModal, useSendMessage } from "utils";

import { Close } from "../../svg";
import { CustomForm } from "../Input/FormWrapper";
import { Title } from "../Typo/Title";

interface ContactModalProps {
  data: ContactModalType;
}

export function ContactModal({ data }: ContactModalProps) {
  const { title, forms } = data;
  const { closeModal } = useModal();
  const { layer } = useClickOut(closeModal);
  const { sendInformationModal, loading } = useSendMessage();

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
      className="fixed flex justify-end h-screen w-screen top-0 z-40"
    >
      <div
        ref={layer}
        className="flex flex-col gap-6 h-screen p-8 overflow-y-scroll border-l border-stroke-blue w-[90%] md:w-[50%] bg-[#FFFCF8]"
      >
        <div onClick={() => closeModal()} className="cursor-pointer">
          <Close />
        </div>
        <Title size="semiBig"> {title} </Title>
        {forms &&
          forms.map((form: any, k: number) => (
            <CustomForm
              key={k}
              variations="contact"
              loading={loading}
              form={form}
              callback={(result: any) => sendInformationModal(result)}
            />
          ))}
      </div>
    </div>
  );
}
