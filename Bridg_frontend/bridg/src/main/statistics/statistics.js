import React, { Component } from 'react';
import axios from 'axios'
import './statistics.css'

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/game')
            .then(res => res.data)
            .then(game => {
                this.setState({
                    game
                })
            })
            .catch((err) => {
                console.log(`Fetch error:`, err)
            })
    }

    render() {
        if (typeof (this.state.game) != 'undefined')
        {
            var statistics_keys = Object.keys(this.state.game)
            statistics_keys.sort((a, b) => {
                let a1 = parseInt(a)
                let b1 = parseInt(b)
                if (a1 > b1) {
                    return -1
                }
                if (a1 < b1) {
                    return 1
                }
                return 0
            })
        }
        return (
            <>
                <h2> Статистика </h2>
                <table className="statistics">
                    <tbody>
                        <th> Ім'я гравця </th>
                        <th> Статус гравця </th>
                        <th> Бали гравця </th>
                        <th> Бали комп'ютера </th>
                        {
                            typeof (this.state.game) != 'undefined' ?
                                statistics_keys.map((el) =>
                                    <tr key={el}> 
                                        <td> <samp> {this.state.game[el].names} </samp> </td>
                                        <td> <samp> {this.state.game[el].status} </samp> </td>
                                        <td> <samp> {this.state.game[el].accountU} </samp> </td>
                                        <td> <samp> {this.state.game[el].accountC} </samp> </td>
                                    </tr>
                                )
                                : null
                        }
                    </tbody>
                </table>
                <br />
            </>
        );
    }
}

export default Statistics;