export const tabArray = ["Accueil", "Profile", "Account", "Dashboard"];

interface RenderTabContentProps {
  item: any;
}

export const RenderTabContent = ({ item }: RenderTabContentProps) => {
  const solo: React.ReactElement[] = tabArray.reduce(
    (acc: React.ReactElement[], tab, i) => {
      if (tab === item) {
        acc.push(<p key={i}> Hello {tab}</p>);
      }
      return acc;
    },
    []
  );

  return <> {solo} </>;
};
