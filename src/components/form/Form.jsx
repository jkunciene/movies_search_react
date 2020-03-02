import React, {Component} from "react"
import Search from "../search/Search";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {paieskosZodis: '', movies: {}};


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({paieskosZodis: event.target.value});
    }

    handleSubmit(event) {

        event.preventDefault();
        fetch(`https://www.omdbapi.com/?apikey=e4db3ced&t=${this.state.paieskosZodis}`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        movies: data
                    })
                    console.log(this.state.movies); }
            )
    }
    render() {

        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ieskomo filmo pavadinimas:
                    <input type="text" value={this.state.paieskosZodis} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Submit" />
            </form>
                <Search data={this.state.movies}/>
            </div>
        );
    }
}
export default Form;