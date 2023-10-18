import { CardReceta } from "@/components/receta";

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
  titleProduct: string;
}

export const ProductoReceta = ({
  className = "",
  data,
  titleProduct,
}: IProps) => {
  return (
    <div className={className}>
      <h3 className="font-bold | text-2xl | line-x-left | mb-2 | ml-12 sm:ml-0 | mr-4 sm:mr-0">
        {`Disfruta un delicioso ${titleProduct} con esta receta`}
      </h3>
      <CardReceta className="px-4 sm:px-0" data={data} />
    </div>
  );
};
