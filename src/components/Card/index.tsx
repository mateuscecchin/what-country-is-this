import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { TextInfo } from "../TextInfo";

interface RootProps extends LinkProps {
  children: React.ReactNode;
}

interface InfoProps {
  name: string;
  population: number;
  region: string;
  capital: string[];
}

function Root({ children, ...rest }: RootProps) {
  return (
    <Link
      className="sm:min-w-[300px] sm:min-h-[400px] max-w-[300px] max-h-[400px] mx-auto bg-slate-700 rounded-lg shadow-2xl  overflow-hidden group hover:bg-slate-600 hover:cursor-pointer hover:-scale-[-1.05]  hover:after:scale-[1] duration-300"
      {...rest}
    >
      {children}
    </Link>
  );
}

function ImageComponent({ img }: any) {
  return (
    <div className="flex flex-1 min-w-[300px]">
      <Image priority src={img} alt="Imagem do pais" width={1} height={1} className="h-[150px] w-full object-cover group-hover:opacity-70"/>
    </div>
  );
}

function Info({ name, population, region, capital }: InfoProps) {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6 font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] fold:max-w-full">{name}</h1>
      <div className="flex flex-1 flex-col gap-3">
        <TextInfo label="Population" value={population} />
        <TextInfo label="Capital" value={capital} />
        <TextInfo label="Region" value={region} />
      </div>
    </div>
  );
}

function Group({ children }: any) {
  return (
    <div className="flex flex-col flex-1 sm:mx-auto md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24">
      {children}
    </div>
  );
}

export const Card = { Root, Image: ImageComponent, Info, Group };
