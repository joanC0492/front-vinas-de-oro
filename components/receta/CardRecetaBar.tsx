interface IProps {
  className?: string;
  data: string;
}
export const CardRecetaBar = ({ className = "", data }: IProps) => {
  return (
    <div className={className}>
      <div className="bg-vinas-brown-5 py-[25px] px-[30px]">
        <div className="flex gap-4">
          <div className="w-full">
            <div
              className="content [&_hr]:bg-[#f2ecdf] [&_hr]:h-1.5 [&_hr]:my-4 [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:pt-2"
              dangerouslySetInnerHTML={{ __html: `${data}` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
