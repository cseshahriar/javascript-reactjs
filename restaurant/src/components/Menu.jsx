import React, { Component } from 'react';
import DISHES from '../data/dishes.js';
import COMMENTS from '../data/comments.js';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, CardGroup, Card, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {connect} from "react-redux";
import * as actionTypes from "../redux/actionTypes";

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch({
            type: actionTypes.ADD_COMMENT,
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}

class Menu extends Component {

    state = {
        dishes: DISHES,
        comments: COMMENTS,
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

    render() {
        console.log('menu props', this.state.comments);

        const menu = this.state.dishes.map(item => {
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
            const comments = this.state.comments.filter(comment => comment.dishId === this.state.selectedDish.id)

            dishDetail = <DishDetail
                dish={this.state.selectedDish}
                comments={comments}
                addComment={this.props.addComment} />
        }

        return (
            <div className="container">
                <div className="row">

                    {menu}

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

export default connect(mapDispatchToProps)(Menu);