import Image from "next/image";
import { Button } from "nextra-theme-docs";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-left md:text-center px-6">
      <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg border-4 border-pink-200 ">
        <img
          src="https://avatars.githubusercontent.com/u/60820542?v=4"
          alt="Izan's Profile Photo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-10 md:mt-8 md:ml-8">
        <h1 className="text-4xl font-bold">
          Hi, I’m <span className="text-pink-500">Izan</span> 👋
        </h1>
        <p className="mt-4 text-lg">
          Self-taught Software Engineer | Frontend Developer | AI Enthusiast
        </p>
        <p className="mt-2">
          Passionate about building seamless and user-friendly web applications.
        </p>
        <div className="mt-6 flex items-center md:justify-center gap-4">
          <a
            href="/showcase"
            className="px-6 py-2 text-white bg-pink-500 rounded-lg shadow hover:bg-pink-600 transition"
          >
            View My Work
          </a>
          <a
            href="mailto:huang.izan@gmail.com"
            className="px-6 py-2 border border-pink-500 rounded-lg text-pink-500 hover:bg-gray-100 transition"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
