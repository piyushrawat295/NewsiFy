// Newsitem.js
import React, { Component } from 'react';

class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, sources } = this.props;

    // Set a default image URL if imageUrl is not available
    const defaultImageUrl = process.env.PUBLIC_URL + '/imagenotfound.jpg';

    return (
      <div className="my-2">
        <div className='card'>
        {/* <div className="card" style={{ position: 'relative', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}> */}
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-primary" style={{ left: '92%', zIndex: '1' }}>
            {sources}
          </span>
          <img
            src={!imageUrl ? defaultImageUrl : imageUrl}
            className="card-img-top img-fluid"
            alt="..."
            style={{ width: 'auto', height: '100%' }}
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 45) : ""}...</h5>
            <p className="card-text">{description ? description.slice(0, 80) : ""}..?</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success">
              Read Article
            </a>
            <p className="card-text my-3"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
