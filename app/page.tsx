const placeholderItems = Array.from({ length: 6 }, (_, index) => ({
  title: `Item ${index + 1}`,
  description: "This is filler text to make the page scroll.",
}));

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-3xl px-8 py-16 space-y-8">
        <div>
          <h1 className="text-5xl font-bold mt-10 text-blue-800">
            I Make Software
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Full Stack developer with over 5 years of experience across many
            different technologies.
          </p>
        </div>

        {placeholderItems.map((item) => (
          <section
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-gray-600">{item.description}</p>
          </section>
        ))}
      </main>
    </div>
  );
}
