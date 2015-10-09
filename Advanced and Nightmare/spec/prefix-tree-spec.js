describe('prefix-tree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new Trie();
    prefixTree.add('de');
    prefixTree.add('da');
    prefixTree.add('dog');
    prefixTree.add('dogs');
    prefixTree.add('dalmations');
  });

  it('should have methods named "add", "containsWord", and "getWordsWithPrefix', function() {
    expect(prefixTree.add).to.be.a("function");
    expect(prefixTree.containsWord).to.be.a("function");
    expect(prefixTree.getWordsWithPrefix).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    expect(prefixTree.isWord).to.equal(false);
    curNode = prefixTree.children['d'];
    expect(curNode).not.to.equal(undefined);
    expect(curNode.isWord).to.equal(false);
    curNode = curNode.children['e'];
    expect(curNode).not.to.equal(undefined);
    expect(curNode.isWord).to.equal(true);
    curNode = prefixTree.children['d'].children['c'];
    expect(curNode).to.equal(undefined);
    curNode = prefixTree.children['d'].children['a'];
    expect(curNode).not.to.equal(undefined);
    expect(curNode.isWord).to.equal(true);
    curNode = curNode.children['l']
    expect(curNode).not.to.equal(undefined);
    expect(curNode.isWord).to.equal(false);
  });

  it('should have a working "containsWord" method', function(){
    expect(prefixTree.containsWord('dalmations')).to.equal(true);
    expect(prefixTree.containsWord('dalcanomanon')).to.equal(false);
    expect(prefixTree.containsWord('d')).to.equal(false);

  });

  it('should get all words with passed prefix', function(){
    expect(prefixTree.getWordsWithPrefix('c')).to.eql([]);
    var dExpect = ['de', 'da', 'dalmations', 'dog', 'dogs'];
    var result = prefixTree.getWordsWithPrefix('d');
    expect(result.length).to.equal(dExpect.length);
    expect(_.intersection(dExpect, result)).to.eql(dExpect);
    expect(dExpect).to.eql(prefixTree.getWordsWithPrefix('d'));
  });
});
