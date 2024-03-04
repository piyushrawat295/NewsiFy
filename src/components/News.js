import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import './compo.css';

class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 20,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  capatalizeFirstL = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,

    }
    document.title = `${this.capatalizeFirstL(this.props.category)}-NewsiFy`

  };

  async componentDidMount() {
    await this.fetchData();
  }

  handlePreviousClick = async () => {
    const { page } = this.state;
    if (page > 1) {
      await this.fetchData(page - 1);
    }
  };

  handleNextClick = async () => {
    const { page, totalResults } = this.state;
    const maxPages = Math.ceil(totalResults / this.props.pagesize);
    console.log("Page:", page);
    console.log("Max Pages:", maxPages);

    if (page < maxPages) {
      await this.fetchData(page + 1);
    }
  };

  fetchData = async (page = 1) => {
    try {
      this.setState({ loading: true });

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=195a98ecc68e4729aed627da1269b51b&page=${page}&pagesize=${this.props.pagesize}`;
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        page,
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  };


  render() {
    const { articles, loading, page, totalResults, maxPages } = this.state;
    console.log("Page:", page);
    console.log("Total Results:", totalResults);
    console.log("Pagesize:", this.props.pagesize);
    const { mode } = this.props;

    const headlineStyle = {
      color: mode === 'light' ? 'black' : 'white', // Set text color based on mode
    };

    return (
      <>

        <div className="container my-2">
          <div className="styled_container my-3 text-center">
            <h1 style={headlineStyle}>NewsiFy - {this.capatalizeFirstL(this.props.category)} Headlines</h1>
          </div>
          {/* Other News component content goes here */}
        </div>

        <div className="container my-4">
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
              disabled={this.state.page <= 1}
              className="butt"
              onClick={this.handlePreviousClick}
              type="button"
            >
              <span>Previous</span>
            </button>
            <button
              className="button"
              disabled={page >= maxPages}

              onClick={this.handleNextClick}
              type="button"
            >
              <span>Next</span>
            </button>
          </div>
        </div>

      </>
    );
  }
}

export default News;
