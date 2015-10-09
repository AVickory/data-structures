var Trie = function () {
  this.children = {};
  this.isWord = false;
}

Trie.prototype.traverseTo = function (target, callback) {
  if(this.children !== undefined) {

  }
}

Trie.prototype.add = function (word) {
  if(word === '') {
    this.isWord = true;
  } else {
    var newChar = word[0];
    if(this.children[newChar] === undefined) {
      this.children[newChar] = new Trie();
    }
    this.add(word.slice(1));
  }
};

Trie.prototype.containsWord = function (target) {

};

Trie.prototype.containsPrefix = function (pref) {

};

Trie.prototype.getWordsWithPrefix = function (pref) {

};



var t = new Trie();
t.add('');
t.containsWord('') === true
t.containsWord('a') ==== false