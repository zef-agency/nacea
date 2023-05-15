import React from "react";
import { ContactSectionType } from "utils";

interface ContactSectionProps {
  data: ContactSectionType;
}

export function ContactSection({ data }: ContactSectionProps) {
  const { title, subtitle, form, image, backgroundColor } = data;

  return <div>ContactSection</div>;
}
