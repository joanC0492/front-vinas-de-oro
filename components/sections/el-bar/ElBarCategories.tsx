import { Add } from "@mui/icons-material";
import Link from "next/link";

interface IProps {
  className?: string;
}

export const ElBarCategories = ({ className = "" }: IProps) => {
  return (
    <section className={className}>
      <div className="container | py-12 | px-4 md:px-0">
        <ul className="flex | flex-wrap sm:flex-nowrap | justify-center | gap-x-6 | gap-y-4 sm:gap-y-0 | mx-auto | w-full md:w-10/12 lg:w-9/12">
          {[
            { name: "Clásicos", path: "clasicos" },
            {
              name: "Fáciles y Rápidos",
              path: "faciles-y-rapidos",
            },
            { name: "Sofisticados", path: "sofisticados" },
          ].map((item, i) => (
            <li className="shadow-xl" key={i}>
              <div className="relative">
                <img
                  src="https://www.piscovinasdeoro.com.pe/img/recetas/cl-g-1%20(2).jpg"
                  alt="Pisco"
                  className="w-full"
                />
                <Link
                  href={`/el-bar/categoria/${item.path}`}
                  className="group transition-colors duration-150 bg-vinas-gray-3/70 absolute left-0 top-0 z-10 w-full h-full hover:bg-vinas-brown-2/70 flex items-center justify-center">
                  <div className="flex items-center">
                    <Add className="text-4xl text-white" />
                    <span className="group-hover:text-vinas-gray-3 transition-colors duration-150 text-vinas-brown-2 font-medium text-2xl 2xl:text-3xl text-center block max-w-[200px]">
                      {item.name}
                    </span>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
