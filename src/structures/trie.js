class TrieNode {
    constructor() {
        this.children = {};
    }
}

export default class Trie {
    constructor() {
        this.root = new TrieNode();
        this.leaf = new TrieNode(); // used to represent the end of a word
    }

    addWord(word) {
        var curnode = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!curnode.children[word[i]]) {
                curnode.children[word[i]] = new TrieNode();
                curnode = curnode.children[word[i]];
            } else {
                curnode = curnode.children[word[i]];
            }
            if (i === word.length - 1) {
                curnode.children['*'] = this.leaf;
            }
        }
    }

    checkWord(word) { // returns [bool: valid word?, bool: valid prefix?]
        var curnode = this.root;
        for (let i = 0; i < word.length; i++) {
            if (curnode.children[word[i]]) {
                curnode = curnode.children[word[i]];
            } else { // word does not exist in trie
                return [false, false];
            }
        }
        return [!!curnode.children['*'], !!(Object.keys(curnode.children).length - (curnode.children['*'] ? 1 : 0))]; // finds valid word by checking for * child, finds valid prefix by checking for zero children (not including *)
    }
}