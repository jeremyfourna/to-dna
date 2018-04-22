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
    '-': 'ACGT',
    '0': 'ACTA',
    '1': 'ACTC',
    '2': 'ACTG',
    '3': 'ACTT',
    '4': 'AGAA',
    '5': 'AGAC',
    '6': 'AGAG',
    '7': 'AGAT',
    '8': 'AGCA',
    '9': 'AGCC'
  };
}

// dnaToSymbols :: object
function dnaToSymbols() {
  return R.invertObj(symbolsToDNA());
}

// inverse :: string -> string
function inverse(dna) {
  const complementaryDNA = R.cond([
    [R.equals('A'), R.always('T')],
    [R.equals('T'), R.always('A')],
    [R.equals('C'), R.always('G')],
    [R.equals('G'), R.always('C')],
    [R.T, R.always('666')]
  ]);

  return R.join('', R.map(complementaryDNA, dna));
}

// symbolsToComplementaryDNA :: object
function symbolsToComplementaryDNA() {
  return R.map(inverse, symbolsToDNA());
}

// complementaryDNAToSymbols :: object
function complementaryDNAToSymbols() {
  return R.invertObj(symbolsToComplementaryDNA());
}

// toDNA :: string -> string
function toDNA(text) {
  return parseStringToDNA(symbolsToDNA(), text);
}

// parseStringToDNA :: (object, string) -> string
function parseStringToDNA(symbols, text) {
  return R.join('', R.map(cur => R.prop(cur, symbols), R.toUpper(text)));
}

// toComplementaryDNA :: string -> string
function toComplementaryDNA(text) {
  return parseStringToDNA(symbolsToComplementaryDNA(), text);
}

// fromDNA :: string -> string
function fromDNA(text) {
  return R.join('', parseDNAToString(dnaToSymbols(), text));
}

function fromCompletementaryDNA(text) {
  return R.join('', parseDNAToString(complementaryDNAToSymbols(), text));
}

// parseStringToDNA :: (object, string, string) -> string
function parseDNAToString(symbols, dna, result = '') {
  // parseDNA :: string -> function
  function parseDNA(dna) {
    const firstPart = R.take(4, dna);
    const newResult = R.append(R.prop(firstPart, symbols), result);

    return parseDNAToString(symbols, R.drop(4, dna), newResult);
  }

  return R.ifElse(
    R.isEmpty,
    () => result,
    parseDNA
  )(dna);
}


exports.fromCompletementaryDNA = fromCompletementaryDNA;
exports.fromDNA = fromDNA;
exports.toComplementaryDNA = toComplementaryDNA;
exports.toDNA = toDNA;
