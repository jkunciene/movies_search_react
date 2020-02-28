import React, {Component} from 'react';

import './main.scss';
import Form from "../form/Form";


//react.component jei virsuje neimpoirtuoju

class Main extends Component{

    constructor(props) {
        super(props)
        this.state = {
            movies: [] //tuscias state vietovems
        }
    }



    render(){

        const postMovies = this.state.movies.map;
        return(
            <main>
                <div className="row">

                    {postMovies}

                    <Form />
                </div>

            </main>
        );

    }

}
export default Main;