import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button, Alert, CardColumns } from 'reactstrap';

import COMMENTS from '../data/comments.js';
import { connect } from "react-redux";

import DISHES from '../data/dishes.js';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import Loading from "./Loading";

import { addComment, fetchDishes } from '../redux/actionCreator';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(
            addComment(dishId, rating, author, comment)
        ),
        fetchDishes: () => dispatch(fetchDishes()),
    }
}


class Menu extends Component {

    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        document.title = "Menu";
        console.log('props', this.props.dishes)

        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        }
        else if (this.props.dishes.errMess != null) {
            return (
                <Alert color="danger">{this.props.dishes.errMess}</Alert>
            );
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem
                        dish={item}
                        key={item.id}
                        DishSelect={() => this.onDishSelect(item)}
                    />
                );
            })

            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.comments.filter(comment => comment.dishId === this.state.selectedDish.id
                )
                dishDetail = <DishDetail
                    dish={this.state.selectedDish}
                    comments={comments}
                    addComment={this.props.addComment}
                    commentsIsLoading={this.props.comments.isLoading} />
            }
            return (
                <div className="container">
                    <div className="row">
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen}>
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleModal}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);