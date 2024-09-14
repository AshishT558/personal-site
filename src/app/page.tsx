import ButtonLink from "@/components/ButtonLink";
import "@/app/animations.css"
import PreviewCombined from "@/components/PreviewCombined";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <main className="fade-in scroll-smooth">
      <div id="landing_page" className="h-screen flex flex-col items-center justify-center pb-20">
        <h2 className="text-8xl mx-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-700">Ashish Thomas</h2>
        <p className="text-2xl ml-5 mr-5 pt-5 pb-20">
          <Typewriter></Typewriter>
          </p>
          <div className="flex flex-row lg:gap-20">
            <ButtonLink text="About Me" page="/#about_preview"></ButtonLink>
            <ButtonLink text="Experience" page="/#experience_preview"></ButtonLink>
            <ButtonLink text="Projects" page="/#projects_preview"></ButtonLink>
          </div>
      </div>
      <PreviewCombined></PreviewCombined>
    </main>
  );
}

