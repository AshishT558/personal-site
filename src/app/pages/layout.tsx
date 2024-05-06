import NavBar from "@/components/NavBar";

export default function ContentPagesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
  
    return (
      <>
      <NavBar></NavBar>
      {children}
      </>
    );
  }