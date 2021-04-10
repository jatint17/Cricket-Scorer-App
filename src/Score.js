import React, { Component } from 'react';
import './ScoreStyle.css';

export default class Score extends Component {

    constructor(props) {
        super(props);
        this.state = { batname1: '', batname2: '', bolname1: '', runs: 0, balls: 0 }
    }

    batname1Ref = React.createRef();
    batname2Ref = React.createRef();
    bolname1Ref = React.createRef();
    runsRef = React.createRef();
    ballsRef = React.createRef();

    submitHandler(event) {
        event.preventDefault();

    }

    setFieldVal(reference) {
        const field = reference.current;
        let fieldName = field.name;
        let fieldVal = field.value;
        this.setState({ ...this.state, [fieldName]: fieldVal });
    }

    set1() {
        let runs = this.state.runs;
        runs = runs + 1;
        this.setState({ ...this.state, runs: runs });
    }

    set2() {
        let runs = this.state.runs;
        runs = runs + 2;
        this.setState({ ...this.state, runs: runs });
    }

    set3() {
        let runs = this.state.runs;
        runs = runs + 3;
        this.setState({ ...this.state, runs: runs });
    }

    set4() {
        let runs = this.state.runs;
        runs = runs + 4;
        this.setState({ ...this.state, runs: runs });
    }

    set6() {
        let runs = this.state.runs;
        runs = runs + 6;
        this.setState({ ...this.state, runs: runs });
    }

    incrementBalls() {
        let balls = this.state.balls;
        balls = balls + 1;
        this.setState({ ...this.state, balls: balls })
    }

    render() {

        return (

            <div>
                <div className="DisplayScore">
                    <h2>Score</h2>

                    <table border="1">
                        <td>Batting Team</td>
                        <tr>
                        <td>{this.state.batname1}</td>
                        <td> {this.state.runs}({this.state.balls})</td><br/>
                        </tr>
                        <tr>
                        <td>{this.state.batname2}</td>
                        <td> {this.state.runs}({this.state.balls})</td><br/>
                        </tr>
                        <tr>
                        <td>{this.state.bolname1}</td>
                        <td>{"0-0-0"}</td>
                        </tr>
                    </table>
                </div>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Batsman1 Name: </label>
                        <input type="text" name="batname1" ref={this.batname1Ref} />

                        <button onClick={() => this.setFieldVal(this.batname1Ref)}>Send Batsman</button>
                    </div>
                </form>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Batsman2 Name: </label>
                        <input type="text" name="batname2" ref={this.batname2Ref} />

                        <button onClick={() => this.setFieldVal(this.batname2Ref)}>Send Batsman</button>
                    </div>
                </form>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Bowler Name: </label>
                        <input type="text" name="bolname1" ref={this.bolname1Ref} />

                        <button onClick={() => this.setFieldVal(this.bolname1Ref)}>Send Bowler</button>
                    </div>
                </form>
                <input type="button" value="1" onClick={() => this.set1()} />
                <input type="button" value="2" onClick={() => this.set2()} />
                <input type="button" value="3" onClick={() => this.set3()} />
                <input type="button" value="4" onClick={() => this.set4()} />
                <input type="button" value="6" onClick={() => this.set6()} /><br />
                <input type="button" value="increase balls" onClick={() => this.incrementBalls()} />
            </div>

        );
    }

}