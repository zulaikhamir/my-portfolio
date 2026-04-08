function Home() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 px-4 text-center text-slate-900">
      <div>
        <h1 className="text-5xl font-bold md:text-6xl">I&apos;m Zulaikha.</h1>
        <p className="mt-4 text-xl text-slate-700 md:text-2xl">
          A passionate Web Developer building awesome websites.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 text-lg text-white transition-colors hover:bg-slate-700"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Home;
