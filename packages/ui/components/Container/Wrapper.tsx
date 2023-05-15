import React, { PropsWithChildren } from "react";

export function Wrapper({ children, classes, ...props }: WrapperProps) {
  return (
    <div {...props} className={`max-w ${classes}`}>
      {children}
    </div>
  );
}

interface WrapperProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren<any> {}
