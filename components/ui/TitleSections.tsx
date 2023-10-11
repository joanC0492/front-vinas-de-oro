interface IProps {
  title: string;
  subtitle: string;
  className?: string;
  line?: boolean;
}

export const TitleSections: React.FC<IProps> = ({
  title,
  subtitle,
  className = "",
  line = false,
}) => {
  return (
    <div className={`${className} `}>
      <p className="font-bold text-vinas-brown-2 text-base">{title}</p>
      <h2
        className={`font-medium text-4xl text-vinas-brown-3 relative max-w-sm ${
          line ? "line-left" : ""
        }`}>
        {subtitle}
      </h2>
    </div>
  );
};
