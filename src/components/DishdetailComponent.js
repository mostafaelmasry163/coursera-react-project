import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal,ModalBody, Row,Button,Col, Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength =(len) => (val) => !(val) || (val.length <= len);
const minLength =(len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal= this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  render(){
    return (

            <div>
            <Button onClick={this.toggleModal}>
                <span className="fa fa-pencil"></span> Submit Comment
            </Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <div className="modal-header">
                    <h5 className="modal-title">Submit Comment</h5>
                    <button type="button" className="ml-auto close" onClick={this.toggleModal}>
                      &times;
                    </button>
                </div>                   
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" className="ml-3">Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>    
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" className="ml-3">Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author"
                                        name="author" placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" className="ml-3">Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment"
                                        name="comment" placeholder="Comment"
                                        rows="6" className="form-control" />
                                </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" color="primary">
                                Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        );
    
  }
}

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

  renderComments(comments, addComment, dishId){

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
                <ul className="list-unstyled">
                    {comments}
                </ul>
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        );
    }

    render() {
        if(this.props.isLoading) {
            return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
            );
        }
        else if (this.props.errMess) {
            return (
            <div className="container">
                <div className="row">
                    <h4>{this.props.errMess}</h4>
                </div>
            </div> );
        }
        else if (this.props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {this.props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2 className="offset-5">{this.props.dish.name}</h2>
                        <hr />
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.comments, this.props.addComment, this.props.dish.id)}
                        </div>
                    </div>
                </div>
            );
        }
        else 
        return(<div />);
    }
}

export default DishDetail;