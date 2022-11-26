import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../Spinner/Spinner";
import classes from './SearchOutput.module.css';

const SearchOutput = (props) => {
    let message = null;

    if (props.term && props.results.length !== 0) {
        message = <p>Showing {props.results.length} results</p>;
    } else if (props.term) {
        message = <Spinner/>;
    } else if (props.term === null){
        message = "no results found";
    }

    let searchResults = null;
    if (props.results) {
        searchResults =
            props.results.map((results, index) => {
                return (
                    <SearchResult
                       // key={index}
                        sunrise={results.sunrise}
                        sunset={results.sunset}
                        solarNoon={results.solarNoon}
                        dayLength={results.dayLength}
                        civilTwilightBegin={results.civilTwilightBegin}
                        civilTwilightEnd={results.civilTwilightEnd}
                        nautucalTwilightBegin={results.nauticalTwilightBegin}
                        nautucalTwilightEnd={results.nauticalTwilightEnd}
                        astronomicalTwilightBegin={results.astronomicalTwilightBegin}
                        astronomicalTwilightEnd={results.astronomicalTwilightEnd}

                    />
                );
            })
    }

    return (
        <div className={classes.Result}>
            {message}
            {searchResults}
        </div>
    )
}

export default SearchOutput;