import React from "react";



//class component
export default class TicTac extends React.Component {
    constructor() {
        super()
        this.state = {
            squares: new Array(9).fill(null),
            count: 0,
            resultBool: false,
            winnerPlayer: '',
            playerX: 0,
            playerO: 0,
        }
    }



    winnerList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
 
    checkSquares = e => {
        let data = e.target.getAttribute('data')
        let squares = this.state.squares
        if (squares[data] == null) {
            squares[data] = this.state.count % 2 == 0 ? 'X' : 'O'
        }
        this.setState({ squares: squares })
        this.setState({ count: this.state.count + 1 })
        this.winner();
    }

    winner = () => {
        let win = this.state.count % 2 == 0 ? 'X' : 'O'
        for (let i = 0; i < this.winnerList.length; i++) {
            let line = this.winnerList[i];
            if (this.state.squares[line[0]] === win && this.state.squares[line[1]] === win && this.state.squares[line[2]] === win) {
                this.setState({ winnerPlayer: win })
                this.setState({ resultBool: true })
                win === "X" ?
                    this.setState({ playerX: this.state.playerX + 1 }) :
                    this.setState({ playerO: this.state.playerO + 1 })
            }

        }
    }

    render() {
        return (
            <>
                <div className="tic-tac">
                    {this.state.squares.map((square, i) => {
                        return <div className="square" key={Math.random()} data={i} onClick={this.checkSquares}>
                            {square}</div>
                    })}
                </div >
                <h2 className="active">Active player : <span>{this.state.count % 2 == 0 ? 'X' : 'O'}</span></h2>
                <div className="winner-result" style={{
                    visibility: this.state.resultBool ? 'visible' : 'hidden',
                    opacity: this.state.resultBool ? 1 : 0
                }}>
                    <h2>{this.state.winnerPlayer} is winner</h2>
                    <div className="result">
                        <span>Point X : {this.state.playerX} </span>
                        <span>Point O : {this.state.playerO} </span>
                    </div>
                    <button onClick={() => {
                        this.setState({ count: 0 })
                        this.setState({ squares: new Array(9).fill(null) })
                        this.setState({ resultBool: false })
                    }}>Start Again</button>
                </div>
            </>
        )
    }
}


    // e.target.style.textShadow =  this.state.count % 2 == 0 ? '0 0 2px #00A789,0 0 5px #00A789,0 0 10px #00A789,0 0 20px #00A789,0 0 50px #00A789,0 0 100px #00A789,0 0 200px #00A789' : '0 0 2px coral,0 0 5px coral,0 0 10px coral,0 0 20px coral,0 0 50px coral,0 0 100px coral,0 0 200px coral';