import NavBar from "@/components/NavBar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
    const navbar = ['Item1', 'Item2', 'Item3']
  
    return (
      <>
      <NavBar></NavBar>
      {children}
      </>
    );
  }