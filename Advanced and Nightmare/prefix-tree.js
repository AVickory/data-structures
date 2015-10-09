var Trie = function () {
  this.children = {};
  this.isWord = false;
}

// Trie.prototype.traverseTo = function (target, callback) {
//   if(this.children !== undefined) {

//   }
// }

Trie.prototype.add = function (word) {
  if(word === '') {
    this.isWord = true;
  } else {
    var newChar = word[0];
    if(this.children[newChar] === undefined) {
      this.children[newChar] = new Trie();
    }
     return this.children[newChar].add(word.slice(1));
  }
};

Trie.prototype.containsWord = function (word) {
  if(word === '') {
    return this.isWord;
  } else {
    var newChar = word[0];
    if(this.children[newChar] === undefined) {
      return false
    }
    return this.children[newChar].containsWord(word.slice(1));
  }
};

Trie.prototype.getWordsWithPrefix = function (pref) {
  var res = [];

  var prefNode = this.traverseTo(pref);

  var getWord = function (node, pref) {
    if(node.isWord) {
      res.push(pref);
    }
    for(var child in node.children) {
      getWord(node.children[child], pref + child);
    }
  }

  getWord(prefNode, pref)

  return res;
};

Trie.prototype.traverseTo = function (pref) {
  if(pref === '') {
    return this;
  } else {
    var newChar = pref[0];
    if(this.children[newChar] !== undefined) {
     return this.children[newChar].traverseTo(pref.slice(1));
    }
   return null;
  }
};



var t = new Trie();
t.add('de');
t.add('da');
t.add('dog');
t.add('dogs');
t.add('dalmations');

console.log(t);
console.log(t.containsWord(''));
console.log(t.containsWord('d'));
console.log(t.containsWord('de'));
console.log(t.containsWord('derp'));

console.log(t.getWordsWithPrefix('d'));
console.log(t.getWordsWithPrefix('da'));
console.log(t.getWordsWithPrefix('de'));
console.log(t.getWordsWithPrefix('do'));
console.log(t.getWordsWithPrefix('dog'));
