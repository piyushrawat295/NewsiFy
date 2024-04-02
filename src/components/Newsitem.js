import React from "react";

const Newsitem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  sources,
}) => {
  // Set a default image URL if imageUrl is not available
  const defaultImageUrl = process.env.PUBLIC_URL + "/imagenotfound.jpg";

  return (
    <div className="my-2">
      <div className="card">
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-primary"
          style={{ left: "92%", zIndex: "1" }}
        >
          {sources}
        </span>
        <img
          src={imageUrl ? imageUrl : defaultImageUrl}
          className="card-img-top img-fluid"
          alt="..."
          style={{ width: "auto", height: "50%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 45) : ""}...</h5>
          <p className="card-text">
            {description ? description.slice(0, 80) : ""}..?
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-success"
          >
            Read Article
          </a>
          <p className="card-text my-3">
            <small className="text-body-secondary">
              By {author} on{" "}
              {new Date(date).toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
              })}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
