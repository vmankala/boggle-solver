export default class Solver {
    constructor(trie) {
        this.trie = trie;
    }

    solve(board) { // find solutions starting from each cell, then union the sets
        let solutions = new Set();
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let cellSolutions = this.solveCell(board, "", i, j, [('' + i + ',' + j)]); // coordinates stored as strings to make use of Array.includes
                cellSolutions.forEach((word) => {
                    solutions.add(word);
                });
            }
        }

        let arr = Array.from(solutions); // convert to array
        arr.sort((a, b) => {
            return (b.length - a.length) || a.localeCompare(b); // sort by (1) length, then (2) alphabetic
        });
        return arr;
    }

    solveCell(board, word, x, y, visited) { // depth-first search all paths from (x, y), avoiding paths that do not have valid prefixes
        let solutions = new Set();
        let [isWord, isPrefix] = this.trie.checkWord(word);
        if (isWord) {
            solutions.add(word);
        }
        if (isPrefix) {
            for (let i = 0; i < board.nmatrix.length; i++) { // recurse to each neighbor
                let [nx, ny] = board.nmatrix[i];
                nx += x;
                ny += y;
                if (board.checkCell(nx, ny) && !visited.includes('' + nx + ',' + ny)) {
                    visited.push(('' + nx + ',' + ny)); // modify existing array instead of making a copy to avoid slow array copy
                    let neighborSolutions = this.solveCell(board, word + board.getCell(nx, ny), nx, ny, visited);
                    neighborSolutions.forEach((word) => {
                        solutions.add(word);
                    });
                    visited.pop();
                }
            }
        }
        return solutions;
    }
}