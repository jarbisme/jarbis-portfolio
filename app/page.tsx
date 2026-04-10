import Image from "next/image";

export default function Home() {
  return (
    <div
      className="main-body min-h-screen bg-white"
      style={{
        backgroundImage: "url('/noise-dots.svg')",
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="text-4xl font-bold p-8">Hello, Next.js!</h1>
    </div>
  );
}
