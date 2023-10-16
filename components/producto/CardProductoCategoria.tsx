import Link from "next/link";
import { ElBar } from "@/interfaces/el-bar-category";

interface IProps {
  className?: string;
  data: ElBar;
}
export const CardProductoCategoria = ({ className = "", data }: IProps) => {
  return (
    <article className={className}>
      <div className="flex">
        <div className="col1 grow w-1/2">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="col2 grow w-1/2">
          <div className="pt-[72px] pl-[35px] relative">
            <span className="absolute w-5 h-1 bg-vinas-brown-2 -left-2 top-[85px]"></span>
            <p className="text-xl font-medium text-vinas-brown-3 mb-7">
              {data.title}
            </p>
            <Link href={data.slug} className="btn-main">
              CONOCER
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
