import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex items-center justify-center max-w-5xl mx-auto space-x-6">
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
        <Image
          src={"/documents.png"}
          alt="Documents"
          layout="fill"
          objectFit="contain"
          className="dark:hidden"
        />
        <Image
          src={"/documents-dark.png"}
          alt="Documents"
          layout="fill"
          objectFit="contain"
          className="hidden dark:block"
        />
      </div>
      <div className="relative h-[400px] w-[400px] hidden
      md:block">  
        <Image
          src={"/reading.png"}
          alt="Reading"
          layout="fill"
          objectFit="contain"
          className="dark:hidden"
        />
        <Image
          src={"/reading-dark.png"}
          alt="Reading"
          layout="fill"
          objectFit="contain"
          className="hidden dark:block"
        />
      </div>
    </div>
  );
};

export default Heroes;
