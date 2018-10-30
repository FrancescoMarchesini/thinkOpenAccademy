import React, {Component} from "react";
import PropTypes from 'prop-types';
import './input.scss'

class GenericInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <input 
                type={this.props.type}  
                placeholder={this.props.placeholder} 
                onChange={this.props.onChange} 
                className="myInput"
            >

            </input>
        )
    }
}

GenericInput.propTypes = {
    onChange : PropTypes.func,
    type : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
}

export default GenericInput;