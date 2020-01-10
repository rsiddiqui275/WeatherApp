import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class TableComponent extends Component {

    render() {
        const { main, weather } = this.props
        return (
            <div><Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Humidity</th>
                        <th>Temp</th>
                        <th>Description</th>
                        <th>Icon</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{main.humidity}</td>
                        <td>{main.temp}<sup>0</sup>c</td>
                        <td>{weather[0].description}</td>
                        <td><img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} /></td>

                    </tr>

                </tbody>
            </Table>
            </div>
        )
    }

}
export default TableComponent;