import Image from "next/image";

export function RenderIcon({ icon }: { icon: string }) {
  const size = 400;

  switch (icon) {
    case "Fleurs":
      return (
        <Image
          width={size}
          height={size}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 12vw"
          alt="ble"
          src="/ble.png"
        />
      );
    case "Caravane":
      return (
        <Image
          width={size}
          height={size}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 12vw"
          alt="caravane"
          src="/trucks.png"
        />
      );
    default:
      return <></>;
  }
}
