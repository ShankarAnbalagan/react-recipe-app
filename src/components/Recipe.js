import React from 'react';
import {Link} from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';

function Recipe(props){
    return(
        <div key={props.recipeId} className="recipe-card col-sm-12 col-md-6 col-lg-4">           
            <Card bg="dark" text="white" style={{ width: '100%'}}>
                <Card.Img variant="top" src={props.imgsrc} className="card-img-top"/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.publisher}</Card.Text>
                    <div className="view-recipe-button">                    
                        <Link to={{pathname: `/recipe/${props.recipeId}`,state:{id:props.recipeId}}}>
                            <Button variant="primary">View Recipe</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>                         
        </div>
    );
}

export default Recipe;