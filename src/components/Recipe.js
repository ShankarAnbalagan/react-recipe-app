import React from 'react';

class Recipe extends React.Component{
    constructor(props){
        super(props);
        this.state='';
    }
    render(){
        return(
        <div>
            <p>{this.props.title}</p>
        </div>
        );
    }
}

export default Recipe;