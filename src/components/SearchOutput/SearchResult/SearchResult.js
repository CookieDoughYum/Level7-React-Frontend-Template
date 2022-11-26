import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
           <h1>sunrise: {props.sunrise}</h1>
           <h2>sunset: {props.sunset}</h2>
           <h3>solarNoon: {props.solarNoon}</h3>
           <h4>dayLength: {props.dayLength}</h4>
           <h5>civilTwilightBegin: {props.civilTwilightBegin}</h5>
           <h6>civilTwilightEnd: {props.civilTwilightEnd}</h6>
           <h7>nauticalTwilightBegin: {props.nauticalTwilightBegin}</h7>
           <h8>nauticalTwilightEnd: {props.nauticalTwilightEnd}</h8>
           <h9>astronomicalTwilightBegin: {props.astronomicalTwilightBegin}</h9>
           <h10>astronomicalTwilightEnd: {props.astronomicalTwilightEnd}</h10>
        </article>
    );
}

export default SearchResult;