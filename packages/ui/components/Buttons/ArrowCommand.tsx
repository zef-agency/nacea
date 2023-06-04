import { Arrow } from "../../svg";

export function ArrowCommand(props: {
  left?: boolean;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: any) => void;
}) {
  return (
    <div
      style={{
        transform: props.left ? "rotate(180deg)" : "rotate(0deg)",
        backgroundColor: props.disabled ? "#F4E7C4" : "#FFD874",
      }}
      className={`px-4 py-2  rounded-xs   ${
        props.disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      // eslint-disable-next-line no-empty-function
      onClick={!props.disabled ? props.onClick : () => {}}
    >
      {props.left ? <Arrow color="black" /> : <Arrow color="black" />}
    </div>
  );
}
