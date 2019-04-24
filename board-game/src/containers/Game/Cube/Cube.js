import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cube extends Component {
    render() {
        console.log(this.props.playerPos);
        return (
            <div>
                <p>{this.props.playerPos}</p>
                <button onClick={this.props.onAddedPosition} >Go forward</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        playerPos: state.playerPosition
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedPosition: () => dispatch({ type: 'INCREMENT_POSITION' })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cube);