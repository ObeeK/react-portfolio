import React from 'react';
import About from '../About';
import Project from '../Project';
import ContactForm from '../Contact';

function CurrentPage (props) {
    switch(props.currentCategory.name) {
        case "About Me": 
        return(<About></About>);

        case "Projects":
            return(<Project></Project>);
        
        case "Contact":
            return(<ContactForm></ContactForm>);
        default: 
        return(<About></About>);
    }
}

export default CurrentPage;