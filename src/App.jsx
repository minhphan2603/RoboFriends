import React, {Component}from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import SearchBox from './SearchBox';

import {connect} from 'react-redux';
import {setSearchField} from './action';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots : robots,
            // searchField : '',
        }
    }

    // onSearchChange = (event) => {
    //     // const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase()))
    //     this.setState({
    //         searchField: event.target.value,
    //         // robots: filteredRobots
    //     });
    // }

    render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()))
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange ={this.props.onSearchChange} searchField={this.props.searchField}/>
                <Cardlist robots={filteredRobots} />   
            </div>
            
        )
    }
    componentDidMount() {
        // console.log(this.props.store);
        // console.log(this.props.store.getState());
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps', dispatch);
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);