import { Mail } from "lucide-react";
import { Button } from "../components/ui/button";

function Home() {
  return (
    <section id="home" className="grid min-h-[84vh] items-center gap-10 py-16 md:grid-cols-2">
      <div className="order-2 md:order-1">
        <img
          src="https://picsum.photos/700/500?random=11"
          alt="Profile silhouette placeholder"
          className="h-auto w-full max-w-lg rounded-xl border border-slate-800 object-cover shadow-2xl shadow-cyan-900/30"
        />
      </div>

      <div className="order-1 md:order-2">
        <h1 className="text-5xl font-semibold leading-tight text-slate-100 md:text-6xl">
          hi, <span className="text-cyan-300">zulaikha</span> here.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          I build polished, reliable web experiences with a focus on usability,
          accessibility, and performance for real-world products.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-8"
          onClick={() => {
            window.location.href = "mailto:hello@example.com";
          }}
        >
          <Mail size={18} />
          Say hi!
        </Button>
      </div>
    </section>
  );
}

export default Home;
