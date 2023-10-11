import { TitleSections } from "@/components/ui";

interface IProps {
  title: string;
  className?: string;
}
export const ContactoNosotros = ({ title, className = "" }: IProps) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="grid grid-cols-12 gap-x-4 px-4">
          <div className="lg:col-start-2 xl:col-start-3 2xl:col-start-4 | col-span-12 lg:col-span-10 xl:col-span-8 2xl:col-span-6">
            <TitleSections title={title} subtitle="Comunícate con nosotros" />
            <div className="content | mt-8 | sm:mb-8 | wp-line-left | [&>p]:mb-5">
              <div className="flex gap-x-12">
                <div>
                  <p>Puede llamarnos directamente al teléfono</p>
                  <p className="font-semibold">01 700 4500</p>
                </div>
                <div>
                  <p>Encuentranos en:</p>
                  <a
                    href="https://www.google.com.pe/maps/place/C.+Las+Begonias+441,+San+Isidro+15046/@-12.0929199,-77.0241612,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c864f07ff80d:0x126025ead9936d22!8m2!3d-12.0929199!4d-77.0241612!16s%2Fg%2F11cs6c36kd?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold">
                    Calle Las Begonias 441 Piso 11 - San Isidro
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
