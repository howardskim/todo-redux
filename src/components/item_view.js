import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleItem, deleteItem, resetSingle} from '../actions';

class ItemView extends Component{
    componentDidMount(){
        console.log('this.props.match', this.props.match)
        this.props.getSingleItem(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.resetSingle();
    }
    handleDelete = () =>{
        this.props.deleteItem(this.props.match.params.id)    
    }
    render(){
        if(this.props.error){
            return <h2 className="center red">{this.props.error}</h2>
        }
        console.log(this.props.item)

        return(
            <div>
                <h1 className="center">View Item</h1>
                <h2 className="center">{this.props.item.title}</h2>
                <button onClick={this.handleDelete} className="btn red">Delete Item</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single,
        error: state.list.error
    }
}

export default connect(mapStateToProps, { getSingleItem, deleteItem, resetSingle})(ItemView)