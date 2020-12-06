import React from "react"

function Search(props) {
    if(props.data.Response !== "False"){
    return (

        <div className="container">

            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Director</th>
                    <th scope="col">Runtime</th>
                    <th scope="col">Foto</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{props.data.Title}</td>
                    <td>{props.data.Plot}</td>
                    <td>{props.data.Director}</td>
                    <td>{props.data.Runtime}</td>
                    <td><img src = {props.data.Poster}/></td>

                </tr>


                </tbody>
            </table>


        </div>
    ); } else return(<h3>Nerasta</h3>)
}

export default Search;
