import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background text-foreground">
      <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background dark:bg-background sm:items-start">
        <a          className="absolute top-4 right-[13rem] flex h-12 w-44 items-center justify-center rounded-full bg-transparent border border-black px-5 text-black transition-colors hover:bg-black hover:text-white"
          href="https://docs.google.com/document/d/1yZoqTBQvoE-OHxnTNbLbd_J2bOBDVXCerd0E5tMH4Nc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Latest project
        </a>
        <a          className="absolute top-4 right-[3rem] flex h-12 w-32 items-center justify-center rounded-full bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ingmarsmits@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        <div className="flex flex-col items-left gap-6 text-left sm:items-start sm:text-left">
          <h1 className="max-w-xs text-4xl font-serif leading-10 tracking-tight text-blue-700 dark:text-blue-500">
            Ingmar Smits
          </h1>
          <h1 className="max-w-md text-lg leading-8 text-cyan-400 dark:text-cyan-600">
            Hello, I'm Ingmar Smits, a high school student interested in web development, programming and artificial intelligence. This is my personal website, where I share my projects and thoughts on technology. 

          </h1>
        </div>
        <Image
          className="mx-auto transform -translate-x-100 -translate-y-50"
          src="/researchable-logo.png"
          alt="researchable logo"
          width={200}
          height={200}
        />
      </main>
    </div>
  );
}
