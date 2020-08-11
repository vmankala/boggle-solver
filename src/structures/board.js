export default class Board {
    constructor(board) {
        this.board = board || [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', '']
        ];
        
        // neighbors matrix
        this.nmatrix = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ];
    }

    getBoard() {
        return this.board;
    }

    checkCell(x, y) { // check if cell is in bounds and not empty
        return x >= 0 && x < this.board[0].length && y >= 0 && y < this.board.length && this.board[y][x] !== '';
    }

    getCell(x, y) {
        return this.board[y][x];
    }

    setCell(x, y, c) {
        this.board[y][x] = c;
    }
}