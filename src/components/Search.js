import React, {useContext } from "react";
import Context from "../Context";
import SearchResults from "./SearchResults";
import ReactPaginate from 'react-paginate';

function Search() {
  const { searchResults, searchTerm } = useContext(Context);
  let titles = []

  console.log(searchResults)

  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="row ">
            <div className="col-md-12">
            {searchResults.length > 0 ? (
                <SearchResults data={searchResults} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="row ">
              <div className="col-md-12">
                <ReactPaginate containerClassName="menu" marginPagesDisplayed={1}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Search;
