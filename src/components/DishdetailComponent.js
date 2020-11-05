import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{


 renderDish(dish){
        
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
    renderComments(comments){
        if(comments===null) return(<div />)

        comments= comments.map(com => {
            return(
                <li key={com.id}>
                    <p>{com.comment}</p>
            <p> -- {com.author}, &nbsp;
                        {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                          }).format(new Date(com.date))
                        } </p>
                </li>
            );
        });

        return(
            <div>
                <h4>Comments</h4>
        <ul className="list-unstyled">{comments}</ul>
            </div>
        );
    }

    render() {
        if(this.props.dish == null)
            return(<div></div>);
        else
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
    }
}

export default DishDetail;