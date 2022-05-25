import React, {Component} from 'react'

class FilterObject extends Component {

    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                    name: 'Spot',
                    likesKids: true,
                    age: 5,
                },
                {
                    name: 'Ninja',
                    species: 'cat',
                    age: 7,
                },
                {
                    name: 'Dexter',
                    temperment: 'lazy',
                    color: 'orange'
                },
                {
                    name: 'Nala',
                    species: 'dog',
                    job: 'seeing eye dog'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }



    find(prop) {
        let pets = this.state.unFilteredArray
        let filter = []

        for (let i=0; i<pets.length; i++) {
            if(pets[i].hasOwnProperty(prop)) {
                filter.push(pets[i])
            }
        }

        this.setState({filteredArray: filter})

    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input
                    className='inputLine'
                    onChange={e => this.setState({userInput: e.target.value})}>
                </input>
                <button
                    className='confirmationButton'
                    onClick={() => {this.find(this.state.userInput)}}>Filter
                </button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject