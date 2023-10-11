import { pageData } from "@/data/pageData";

export const HomeMotto = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${pageData.Home.section.moto.background})`,
        }}>
        <p className="text-vinas-brown-2 | text-3xl sm:text-4xl lg:text-5xl | text-center | py-8 sm:py-10 lg:py-14">{pageData.Home.section.moto.title}</p>
      </div>
    </div>
  );
};
