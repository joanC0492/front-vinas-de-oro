interface IProps {
  className?: string;
}

export const TitleNoticia: React.FC<IProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <p className="pl-3 font-bold text-vinas-brown-2 text-base">Noticias</p>
      <h2 className="pl-3 font-medium text-4xl text-vinas-brown-3 relative before:content-[''] before:absolute before:bg-vinas-brown-3 before:h-8 before:w-[1px] before:top-1 before:left-0">
        Lo último
      </h2>
    </div>
  );
};
