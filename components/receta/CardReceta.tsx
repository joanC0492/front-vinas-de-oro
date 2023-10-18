import Image from "next/image";
import Link from "next/link";

interface IData {
  id: string;
  title: string;
  image: string;
  preparation: string;
  slug: string;
}
interface IProps {
  className?: string;
  data: IData;
}

export const CardReceta = ({ className = "", data }: IProps) => {
  return (
    <div className={className}>
      <div className="bg-vinas-brown-5 p-4">
        <div className="flex | flex-wrap sm:flex-nowrap | gap-4">
          <div className="w-full sm:w-3/12 | self-center | order-2 sm:order-1">
            <Image
              src={data.image}
              alt={data.title}
              width={155}
              height={155}
              className="w-full"
            />
          </div>
          <div className="w-full sm:w-9/12 | order-1 sm:order-2">
            <p className="text-xs">Receta</p>
            <p className="font-medium">{data.title}</p>
            <div
              className="leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: data.preparation,
              }}
            />
            <div className="mt-4">
              <Link href={data.slug} className="btn-main">
                LEER MAS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
