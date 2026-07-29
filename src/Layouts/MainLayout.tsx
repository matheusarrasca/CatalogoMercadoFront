import Menu from "../components/Menu/Menu";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Menu />...
      <main>
        {children}
      </main>
    </>
  );
}

export default MainLayout;