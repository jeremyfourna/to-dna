const R = require('ramda');

// symbolsToDNA :: object
function symbolsToDNA() {
  return {
    A: 'AAAA',
    B: 'AAAC',
    C: 'AAAG',
    D: 'AAAT',
    E: 'AACA',
    F: 'AACC',
    G: 'AACT',
    H: 'AACT',
    I: 'AAGA',
    J: 'AAGC',
    K: 'AAGG',
    L: 'AAGT',
    M: 'AATA',
    N: 'AATC',
    O: 'AATG',
    P: 'AATT',
    Q: 'ACAA',
    R: 'ACAC',
    S: 'ACAG',
    T: 'ACAT',
    U: 'ACCA',
    V: 'ACCC',
    W: 'ACCT',
    X: 'ACCT',
    Y: 'ACGA',
    Z: 'ACGC',
    ' ': 'ACGG',
    '-': 'ACGT'
  };
}

// inverse :: string -> string
function inverse(dna) {
  const complementaryDNA = R.cond([
    [R.equals('A'), R.always('T')],
    [R.equals('T'), R.always('A')],
    [R.equals('C'), R.always('G')],
    [R.equals('G'), R.always('C')]
  ]);

  return R.join('', R.map(complementaryDNA, dna));
}

// symbolsToComplementaryDNA :: object
function symbolsToComplementaryDNA() {
  return R.map(inverse, symbolsToDNA());
}

// toDNA :: string -> string
function toDNA(text) {
  const symbols = symbolsToDNA();

  return R.join('', R.map(cur => R.prop(cur, symbols), R.toUpper(text)));
}

function toComplementaryDNA(text) {
  const symbols = symbolsToComplementaryDNA();

  return R.join('', R.map(cur => R.prop(cur, symbols), R.toUpper(text)));
}


exports.toDNA = toDNA;
exports.toComplementaryDNA = toComplementaryDNA;
