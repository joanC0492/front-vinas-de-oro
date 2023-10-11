interface IProps {
  title: string;
  className?: string;
  dark?: boolean;
}
export const TitleHome = ({ title, className = "", dark }: IProps) => {
  return (
    <div className={className}>
      <div
        className={`${
          dark ? "" : "bg-vinas-brown-2 px-4 py-3"
        } shadow-xl inline-block min-w-[220px]`}>
        <p className="relative flex items-center gap-x-2">
          <span className="inline-block bg-[#c20665] h-[4px] w-6" />
          <span
            className={`${
              dark ? "text-4xl" : "text-3xl"
            } inline-block text-white font-medium`}>
            {title}
          </span>
        </p>
      </div>
    </div>
  );
};
