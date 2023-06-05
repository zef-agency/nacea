import { ContactModalType, useClickOut, useModal, useSendMessage } from "utils";

import { Close } from "../../svg";
import { CustomForm } from "../Input/FormWrapper";
import { Title } from "../Typo/Title";

interface ContactModalProps {
  data: ContactModalType;
  visible: boolean;
}

export function ContactModal({ data }: ContactModalProps) {
  const { title, forms } = data;
  const { closeModal } = useModal();
  const { layer } = useClickOut(closeModal);
  const { sendInformationModal, loading } = useSendMessage("devis");

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
      className="fixed flex justify-end h-screen w-screen top-0 z-40"
    >
      <div
        ref={layer}
        className={` flex flex-col gap-6 h-screen mb-6 p-5 sm:p-6 md:p-8 overflow-y-scroll border-l border-stroke-blue w-[100%] sm:w-[75%] md:w-[50%] bg-[#FFFCF8]`}
      >
        <div className="flex entrance_animation items-center gap-2 sm:gap-4">
          <div onClick={() => closeModal()} className="cursor-pointer">
            <Close />
          </div>
          <Title size="semiBig">{title}</Title>
        </div>
        {forms &&
          forms.map((form: any, k: number) => (
            <CustomForm
              key={k}
              variations="contact"
              reset={true}
              loading={loading}
              form={form}
              callback={(result: any) => sendInformationModal(result)}
            />
          ))}
      </div>
    </div>
  );
}
