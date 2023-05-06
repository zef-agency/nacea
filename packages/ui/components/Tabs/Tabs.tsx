import React from "react";
import { useHasHydrated, useTabs } from "utils";

interface TabProps {
  tabs: string[];
}

export function Tabs({ tabs }: TabProps) {
  const hasHydrated = useHasHydrated();
  const itemZustand = useTabs((state) => state.item);
  const addTab = useTabs((state) => state.addTab);

  const item = hasHydrated ? itemZustand : [];

  return (
    <div className="flex items-center gap-5 border-b border-blue-600 w-full">
      {tabs.map((tab, i) => (
        <p
          key={i}
          className={
            item === tab
              ? "border-b-2 pb-1 dark:border-gray-300 border-gray-900 text-sm cursor-pointer"
              : "text-gray-600 pb-1 text-sm cursor-pointer"
          }
          onClick={() => addTab(tab)}
        >
          {tab}
        </p>
      ))}
    </div>
  );
}
