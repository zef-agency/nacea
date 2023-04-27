import React, { PropsWithChildren } from "react";

export function Wrapper({ children, ...props }: WrapperProps) {
  return (
    <div
      {...props}
      className="md:max-w-maximum relative
			h-full w-full xs:py-8 py-12 padding-global"
    >
      {children}
    </div>
  );
}

interface WrapperProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren<any> {}
