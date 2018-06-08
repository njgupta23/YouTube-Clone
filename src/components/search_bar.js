import React, { Component } from 'react';

class SearchBar extends Component {
    // Similar to __init__ method 
    constructor(props) {
        super(props);
        
        //Initialize state and properties we want to record on it
        this.state = { term: '' };
    }

    // Every class must have a render method which returns jsx
    // onChange is a property. The event handler is passed to this property
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term);
    }
    
}


export default SearchBar;