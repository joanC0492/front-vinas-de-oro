interface IProps {
  className?: string;
}
export const CardRecetaBar = ({ className }: IProps) => {
  return (
    <div className={className}>
      <div className="bg-vinas-brown-5 py-[25px] px-[30px]">
        <div className="flex gap-4">
          <div className="w-full">
            <div className="content [&_hr]:bg-[#f2ecdf] [&_hr]:h-1.5 [&_hr]:my-4 [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:pt-2">
              <p>
                <b>Ingredientes:</b>
              </p>
              <ul>
                <li>2 onzas de Pisco puro Albilla</li>
                <li>8 cubos de hielo</li>
                <li>6 gotas de zumo limón</li>
                <li>4 gotas de bitter angostura</li>
                <li>Completar con ginger ale</li>
              </ul>
              <hr />
              <p>
                <b>Método de elaboración:</b>
              </p>
              <p>Directo al vaso</p>
              <br />
              <p>
                <b>Copa:</b>
              </p>
              <p>Vaso largo</p>
              <br />
              <p>
                <b>Preparación:</b>
              </p>
              <p>Vaso largo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
