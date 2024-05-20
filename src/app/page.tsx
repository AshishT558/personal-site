import ButtonLink from "@/components/ButtonLink";
import "@/app/animations.css"
import PreviewCombined from "@/components/PreviewCombined";

export default function Home() {
  return (
    <main className="fade-in scroll-smooth">
      <div id="landing_page" className="h-screen flex flex-col items-center justify-center pb-20">
        <h1 className="text-7xl ml-5 mr-5 pb-5">Hello, I'm Ashish</h1>
        <p className="text-lg ml-5 mr-5 pb-20">
          Software Development • Data Science • Artificial Intelligence • Machine Learning
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

