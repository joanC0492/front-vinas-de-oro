import { LinkedIn, Facebook } from "@mui/icons-material";

interface IProps {
  slug: string;
  className?: string;
}
export const SharedRrss = ({ slug, className = "" }: IProps) => {
  const sharedNews = (rrss: string, urlRrss: string, urlPage: string): void => {
    const url: string =
      urlRrss + encodeURIComponent(`${window.location.href}/${urlPage}`);
    window.open(url, `Compartir en ${rrss}`, "width=600,height=400");
  };

  return (
    <div className={className}>
      <p className="text-sm">Compartir</p>
      <ul className="flex space-x-1">
        <li>
          <button
            onClick={() =>
              sharedNews(
                "Facebook",
                "https://www.facebook.com/sharer/sharer.php?u=",
                slug
              )
            }>
            <Facebook className="text-3xl text-[#0A73F7]" />
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              sharedNews(
                "LinkedIn",
                "https://www.linkedin.com/shareArticle?url=",
                slug
              )
            }>
            <LinkedIn className="text-3xl text-[#0E76A8]" />
          </button>
        </li>
      </ul>
    </div>
  );
};
