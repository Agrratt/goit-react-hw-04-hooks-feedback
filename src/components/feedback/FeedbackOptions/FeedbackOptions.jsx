import React from "react";
import PropTypes from 'prop-types';
import {ButtonList, Button} from 'components/feedback/FeedbackOptions/FeedbackOptions.styled'

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <ButtonList>
            {options.map(option =>
                <li key={option}>
                    <Button
                        type="button"
                        onClick={() => onLeaveFeedback(option)}>{option}</Button>
                </li>)}
        </ButtonList>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;