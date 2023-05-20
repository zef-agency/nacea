import emailjs from "@emailjs/browser";

export const sendInformationModal = (res: any) => {
  const serviceID: any = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
  const templateID: any = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;
  const key: any = process.env.NEXT_PUBLIC_EMAILJS_TOKEN_PUBLIC;

  emailjs.send(serviceID, templateID, res, key).then(
    () => {
      return console.log("Success");
    },
    () => {
      return console.log("Error");
    }
  );
};
