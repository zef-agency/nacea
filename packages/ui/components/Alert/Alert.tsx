import { useEffect } from "react";

export function Alert({ alert, setAlert, duration }: AlertProps) {
  useEffect(() => {
    if (alert.active === true) {
      setTimeout(() => {
        setAlert({
          ...alert,
          active: false,
        });
      }, duration);
    }
  }, [alert, duration, setAlert]);

  return (
    <p
      className={`${
        alert.active ? "opacity-100 translate-y-24" : "opacity-100 "
      } font-Montserrat transition-all duration-500  ${
        alert.success
          ? "bg-white border border-black text-black"
          : "bg-red text-white"
      } -top-20 w-fit fixed z-50 rounded-xs whitespace-nowrap  text-14 border font-sb text-grey-text-active text-center py-3 px-5  left-[50%] -translate-x-[50%]`}
    >
      {alert.message}
    </p>
  );
}

Alert.defaultProps = {
  alert: {},
  // eslint-disable-next-line no-empty-function
  setAlert: () => {},
  color: "bg-red",
  duration: 3000,
};

interface AlertProps {
  alert: any;
  setAlert: Function;
  color: string;
  duration: number;
}
