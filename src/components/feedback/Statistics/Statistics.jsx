import React from "react";
import PropTypes from 'prop-types';
import {Result} from 'components/feedback/Statistics/Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positive }) => (
    <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <Result>Total: {total}</Result>
        <Result>Positive: {positive}%</Result>
    </div>
)
    
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
}

    
export default Statistics;