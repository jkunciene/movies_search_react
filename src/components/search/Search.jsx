import React, {Component} from "react"


function Search(props) {
    return (
        <div className="container">
            <table class="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Director</th>
                    <th scope="col">Runtime</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{props.data.Title}</td>
                    <td>{props.data.Plot}</td>
                    <td>{props.data.Director}</td>
                    <td>{props.data.Runtime}</td>

                </tr>

                </tbody>
            </table>

        </div>
    );
}

export default Search;
