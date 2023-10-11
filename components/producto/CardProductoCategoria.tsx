import Link from "next/link";

interface IProps {
  className?: string;
}
export const CardProductoCategoria = ({ className = "" }: IProps) => {
  return (
    <article className={className}>
      <div className="flex">
        <div className="col1 grow w-1/2">
          <img
            src="https://www.piscovinasdeoro.com.pe/img/productos/lp-g-1%20(2).jpg"
            alt=""
          />
        </div>
        <div className="col2 grow w-1/2">
          <div className="pt-[72px] pl-[35px] relative">
            <span className="absolute w-5 h-1 bg-vinas-brown-2 -left-2 top-[85px]"></span>
            <p className="text-xl font-medium text-vinas-brown-3 mb-7">
              Quebranta
            </p>
            <Link href={"/"} className="btn-main">
              CONOCER
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
