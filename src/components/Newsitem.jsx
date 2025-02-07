import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Newsitem extends Component {
  render() {
    
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

     const defaultImage = "https://wallpaperaccess.com/full/2112558.jpg"; 
    return (
      <div className="card h-100">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '85%', zIndex: '1'}}>
          {source}
        </span>
        <img 
           src={!imageUrl ? defaultImage : imageUrl}
          className="card-img-top"
          height="200px"
          alt="News Thumbnail"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <div className="mt-auto">
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
            {newsUrl && (
              <Link to={`/summary/${encodeURIComponent(newsUrl)}`} className="btn btn-sm btn-dark ms-3">
                Summarise it!!
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;