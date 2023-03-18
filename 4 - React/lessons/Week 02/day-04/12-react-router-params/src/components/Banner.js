import { Link } from "react-router-dom";

export const Banner = ({ title, link, info }) => {
  return (
    <section className="banner">
      <div className="title">{title}</div>
      {/* use the Link component from react-router-dom to instruct the navigation to a path is via react-router-dom and not via the native anchor tag of HTML */}

      {/* use the logical AND (&&) operator to render the Link component if link is truthy */}
      {link && <Link to={link}>Go</Link>}

      {/* use the logical AND (&&) operator to render the info div if info is truthy */}
      {info && (
        <div className="alert alert-primary" role="alert">
          {info}
        </div>
      )}
    </section>
  );
};
