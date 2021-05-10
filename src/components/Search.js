import React, {useContext } from "react";
import Context from "../Context";
import SearchResults from "./SearchResults";

function Search() {
  const { searchResults } = useContext(Context);
  let titles = []



  if (searchResults > 0) {
    for(let i=0; i<searchResults.length; i++) {
      titles.push(searchResults[i].title)
    }
  }


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
              {/* {searchResults.length > 0 ? (
                <MovieContainer data={searchResults} />
              ) : (
                <p>Loading...</p>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Search;
