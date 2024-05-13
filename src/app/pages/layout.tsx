import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function ContentPagesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
  
    return (
      <>
        <div className="z-10 sticky top-0">
          <NavBar></NavBar>
        </div>
        <div className="z-0">
          {children}
        </div>
      </>
    );
  }