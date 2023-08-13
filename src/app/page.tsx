import Image from "next/image";

export default function Home() {
  return (
    <main
      className={
        "flex flex-col items-center p-8 gap-16 min-h-screen bg-neutral-800 text-white"
      }
    >
      <section className={"flex gap-16 justify-center"}>
        <div className={"w-32 h-32 relative"}>
          <Image
            src={"https://www.svgrepo.com/show/354113/nextjs-icon.svg"}
            alt={"next_logo"}
            fill={true}
          />
        </div>
        <div className={"w-32 h-32 relative"}>
          <Image
            src={
              "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
            }
            alt={"docker_logo"}
            fill={true}
            objectFit={"contain"}
          />
        </div>
      </section>
      <div className={"flex flex-col items-center gap-4"}>
        <h1 className={"font-bold text-4xl"}>Hello from</h1>
        <h1 className={"font-bold text-4xl"}>Next + Docker</h1>
      </div>
    </main>
  );
}
