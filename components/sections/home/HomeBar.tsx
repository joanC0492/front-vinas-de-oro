import { HomeBarCarrousel } from "@/components/home/HomeBarCarrousel";
import { TitleHome } from "@/components/ui";

interface IProps {
  className?: string;
}

export const HomeBar = ({ className = "" }: IProps) => {
  return (
    <div className={className}>
      <div className="container py-14">
        <div className="grid grid-cols-12 | px-4 lg:px-0">
          <div className="col-start-1 lg:col-start-2 xl:col-start-3 | col-span-12 lg:col-span-10 xl:col-span-8">
            <TitleHome title="El bar" />
            <HomeBarCarrousel className="mt-4 md:mt-0"/>
          </div>
        </div>
      </div>
    </div>
  );
};
