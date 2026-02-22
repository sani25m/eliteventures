import { Link } from "react-router-dom";

/**
 * Company logo image (Elite Ventures FZE).
 * Served from public/company-logo.jpg.
 */
const LOGO_SRC = "/company-logo.jpg";

export default function CompanyLogo({
  to = "/",
  className = "",
  imgClassName = "",
  showLink = true,
}) {
  const img = (
    <img
      src={LOGO_SRC}
      alt="Elite Ventures (FZE) - Your Partner in Global Ventures"
      className={`max-h-12 w-auto object-contain object-left ${imgClassName}`}
      width={160}
      height={48}
    />
  );

  if (showLink && to) {
    return (
      <Link to={to} className={`inline-flex items-center focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 rounded ${className}`}>
        {img}
      </Link>
    );
  }

  return <div className={`inline-flex items-center ${className}`}>{img}</div>;
}
