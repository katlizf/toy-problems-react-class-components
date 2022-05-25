import React, {Component} from 'react'

class Palindrome extends Component {

    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    test(userInput) {
        let fowards = userInput
        let backwards = userInput
        backwards = backwards.split('').reverse().join('')

        if(fowards === backwards) {
           this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
       }
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input
                    className='inputLine'
                    onChange={e => this.setState({userInput: e.target.value})}>
                </input>
                <button
                    className='confirmationButton'
                    onClick={() => this.test(this.state.userInput)}>Check
                </button>
                <span
                    className='resultsBox'>Palindrome: {this.state.palindrome}
                </span>
            </div>
        )
    }
}

export default Palindrome