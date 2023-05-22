import React from "react";

export function Wrapper({ children, classes, ...props }: WrapperProps): any {
  return (
    <div
      {...props}
      className={`max-w py-3.5 px-5 sm:py-4 sm:px-7 md:px-12 ${classes}`}
    >
      {children}
    </div>
  );
}

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  classes: any;
  children: any;
}
