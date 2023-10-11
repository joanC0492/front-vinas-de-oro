import Image from "next/image";
import Link from "next/link";

interface IProps {
  className?: string;
}
export const CardReceta = ({ className }: IProps) => {
  return (
    <div className={className}>
      <div className="bg-vinas-brown-5 p-4">
        <div className="flex | flex-wrap sm:flex-nowrap | gap-4">
          <div className="w-full sm:w-3/12 | self-center | order-2 sm:order-1">
            <Image
              src={
                "https://www.piscovinasdeoro.com.pe/img/recetas/fr-g-1%20(4).jpg"
              }
              alt="Receta"
              width={155}
              height={155}
              className="w-full"
            />
          </div>
          <div className="w-full sm:w-9/12 | order-1 sm:order-2">
            <p className="text-xs">Receta</p>
            <p className="font-medium">Pisco Sour</p>
            <p className="leading-relaxed">
              Preparación: Enfriar el vaso. Colocar los insumos dentro del
              shaker en el orden de la receta establecida. Batir por 12 segundos
              con intensidad, ser...
            </p>
            <div className="mt-4">
              <Link href="" className="btn-main">
                LEER MAS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
