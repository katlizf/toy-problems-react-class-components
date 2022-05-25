import React, {Component} from 'react'

class FilterString extends Component {

    constructor() {
        super()

        this.state = {
            unfilteredArray: [
                "Andrew", "Katie", "Emily", "Tom", "Sarah", "Brandon", "Tyler", "Jennifer"
            ],
            userInput: '',
            filteredArray: []
        }
    }
    filter(prop) {
        let people = this.state.unfilteredArray
        let result = []

        for(let i=0; i<people.length; i++) {
            if(people[i].includes(prop)) {
                result.push(people[i])
            }
        } this.setState({filteredArray:result})
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input
                    className='inputLine'
                    onChange={e => this.setState({userInput: e.target.value})}>
                </input>
                <button
                    className='confirmationButton'
                    onClick={() => {this.filter(this.state.userInput)}}>Filter
                </button>
                <span
                    className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}
                </span>
            </div>
        )
    }
}

export default FilterString