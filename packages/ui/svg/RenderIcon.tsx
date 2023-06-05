import Image from "next/image";

export function RenderIcon({ icon }: { icon: string }) {
  const size = 400;

  switch (icon) {
    case "Fleurs":
      return (
        <Image
          priority={true}
          width={size}
          height={size}
          alt="ble"
          src="/ble.png"
        />
      );
    case "Caravane":
      return (
        <Image
          priority={true}
          width={size}
          height={size}
          alt="caravane"
          src="/trucks.png"
        />
      );
    default:
      return <></>;
  }
}
