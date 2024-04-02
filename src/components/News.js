import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import './compo.css';

const News = ({ country, pagesize, category, mode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capatalizeFirstL = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    document.title = `${capatalizeFirstL(category)}-NewsiFy`
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);

      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=195a98ecc68e4729aed627da1269b51b&page=${page}&pagesize=${pagesize}`;
      const response = await fetch(url);
      const data = await response.json();

      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handlePreviousClick = async () => {
    if (page > 1) {
      setPage(page - 1);
      fetchData(page - 1);
    }
  };

  const handleNextClick = async () => {
    const maxPages = Math.ceil(totalResults / pagesize);
    if (page < maxPages) {
      setPage(page + 1);
      fetchData(page + 1);
    }
  };

  const headlineStyle = {
    color: mode === 'light' ? 'black' : 'white', // Set text color based on mode
  };

  return (
    <>
      <div className="container my-2">
        <div className="styled_container my-3 text-center">
          <h1 style={headlineStyle}>NewsiFy - {capatalizeFirstL(category)} Headlines</h1>
        </div>
        {loading && <Spinner />}

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {articles && articles.map((element) => (
            <div className="col" key={element.url}>
              <Newsitem
                title={element.title?.slice(0, 45) || ""}
                description={element.description?.slice(0, 80) || ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                sources={element.source.name}
              />
            </div>
          ))}
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            disabled={page <= 1}
            className="butt"
            onClick={handlePreviousClick}
            type="button"
          >
            <span>Previous</span>
          </button>
          <button
            className="button"
            disabled={page >= Math.ceil(totalResults / pagesize)}
            onClick={handleNextClick}
            type="button"
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

News.defaultProps = {
  country: 'in',
  pagesize: 20,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News