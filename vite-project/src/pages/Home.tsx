import AboutMe from "../components/about-me/about-me.tsx";

export default function Home() {
  return (
    <div className="d-flex align-items-center flex-column">
      <AboutMe />
      <AboutMe />
      <AboutMe />
    </div>
  );
}
