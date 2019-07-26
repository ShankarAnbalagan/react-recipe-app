import React from 'react';
import Recipe from './Recipe';

function Content(props){
    var elements=[];
    console.log("again");
    try{
        if(props.searchStatus===true){
            console.log(props.recipeToRender.length);
            for(var i=0;i<props.recipeToRender.length;i++){
                elements.push(
                <Recipe
                    recipeId={props.recipeToRender[i].recipe_id}
                    title={props.recipeToRender[i].title} 
                    imgsrc={props.recipeToRender[i].image_url}
                    publisher={props.recipeToRender[i].publisher}
                    />
                );
                console.log(elements[i]);
            }
        }
        else{
            return(<div className="page-status">Oopsie! Recipe does not exist</div>);
        }
        return (
            <div className="container">
                <div className="row">
                    {elements}
                </div>
            </div>
        );
    }catch(err){
        return(<div className="page-status">Oh no! Seems-a like-a you have-a runn-a outta API Calls-a :(</div>);
    }
}

export default Content;