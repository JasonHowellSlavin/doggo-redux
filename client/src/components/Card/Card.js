import React, { Component } from 'react';
import './Card.scss';
import { connect } from 'react-redux';
import { update } from '../../actions/CardActions'; 

class Card extends Component{
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    update(field, text) {
        this.props.update(field, text);
    }    

    render(){
        return(
            <section className={"card"}>
                <img src='../../images/dog.jpg'></img>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <div>
                    <p>Settings</p>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
      title: state.cardReducer.title,
      description: state.cardReducer.description
    };
  }

const mapDispatchToProps = {
    update
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);