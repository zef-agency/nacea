import React, { PropsWithChildren } from "react";

export function Container({
  children,
  id,
  classAdd,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      id={id}
      className={`flex items-center ${classAdd} justify-center w-full`}
    >
      <div className="md:max-w-maximum w-full py-8 sm:py-12 padding-global">
        {children}
      </div>
    </div>
  );
}

interface ContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren<any> {
  id: string;
  classAdd?: string;
}
