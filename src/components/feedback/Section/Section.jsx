import React from "react";
import PropTypes from 'prop-types';
import {Title} from 'components/feedback/Section/Section.styled';

const Section = ({title, children}) => {
    return (
        <section>
            <Title>{title}</Title>
            {children}
        </section>
        

    )
};

Section.propType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default Section;