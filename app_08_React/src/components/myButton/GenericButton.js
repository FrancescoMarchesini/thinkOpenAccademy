import React, {Component} from "react";
import PropTypes from 'prop-types';
import './button.scss'

class GenericButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button className={`myButton ${this.props.class_btn}`} onClick={this.props.action}>
                {this.props.text}
            </button>
        )
    }
}

GenericButton.PropTypes = {
    /**out props */
    //creare una schema delle proprieta che il figlio può accettare dal padre 
    // che ci serviranno nel momento in cui andremo ad instanziare l'oggetto
    
    //il testo lo devo prendere sempre dal padre ed è obligatorio
    text: PropTypes.string.isRequired,
    class_btn : PropTypes.string,
    action: PropTypes.func

}
export default GenericButton;