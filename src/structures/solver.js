export default class Solver {
    constructor(trie) {
        this.trie = trie;
    }

    solve(board) {
        var solutions = new Set();
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                var cellSolutions = this.solveCell(board, "", i, j, [(''+i+','+j)]);
                solutions = new Set(function*() {
                    yield* solutions; yield* cellSolutions;
                }());
            }
        }
        let arr = Array.from(solutions);
        arr.sort((a, b) => {
            return (b.length - a.length) || a.localeCompare(b);
        });
        return arr;
    }

    solveCell(board, word, x, y, visited) {
        var solutions = new Set();
        var [isWord, hasPrefix] = this.trie.checkWord(word);
        if (isWord) {
            solutions.add(word);
        }
        if (hasPrefix) {
            for (let i = 0; i < board.nmatrix.length; i++) {
                let [nx, ny] = board.nmatrix[i];
                nx += x;
                ny += y;
                if(board.checkCell(nx, ny) && !visited.includes((''+nx+','+ny))) {
                    visited.push((''+nx+','+ny));
                    var neighborSolutions = this.solveCell(board, word + board.getCell(nx, ny), nx, ny, visited);
                    solutions = new Set(function*() {
                        yield* solutions; yield* neighborSolutions;
                    }());
                    visited.pop();
                }
            }
        }
        return solutions;
    }
}