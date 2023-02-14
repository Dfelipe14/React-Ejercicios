import React, { Component } from 'react'
import RickAndMortyService from '../../services/RickAndMortyService';
import Cards from './Cards';

export default class Main extends Component {
    
    constructor(props) {
        super(props)
        this.state = {personajes: []};
        // var personajes = [];
    }

    componentDidMount() {

        RickAndMortyService.GetAllCharacters()
            .then((data) => this.setState({personajes: data}))
            .catch((error) => console.log(error));
    }
    render() {

        return (
            <main>
                <Cards personajes={this.state.personajes}/>
            </main>
        )
    }
}
