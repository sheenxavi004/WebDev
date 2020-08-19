import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    
    function RenderDish({dish}){
        if( dish != null )
        {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>                        
                    </CardBody>                   
                </Card>
            );
        }
        else
        {
            return(<div></div>);
        }
    }
    function RenderComments({dish}) {
        if( dish != null )
        {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
            const commt = dish.comments.map((comt) => {
                return(
                    <div key={comt.id}>
                        <p>{comt.comment}</p>
                    <p>-- {comt.author} , {months[new Date(comt.date).getMonth()]} {new Date(comt.date).getDate()}, {new Date(comt.date).getFullYear()}</p>
                    </div>
                )
            });
            return(
                <div>
                    <h4>Comments</h4>
                    {commt}
                </div>
            )
        }
        else
        {
            return(<div></div>);
        }
    }

    const DishDetail = (props) =>  {
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.selectedDish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={(props.selectedDish)} />
                </div>
            </div>
        );
    }

export default DishDetail;