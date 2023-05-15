import { Menu, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";

interface DropdownProps {
  trigger: any;
}

export function Dropdown({
  trigger,
  children,
}: DropdownProps & PropsWithChildren<any>) {
  return (
    <Menu as="div" className="relative h-fit">
      <Menu.Button> {trigger} </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute flex flex-col gap-5 py-3.5 px-4 rounded-xs bg-white right-0 z-10 mt-2 w-48 origin-top-right shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
