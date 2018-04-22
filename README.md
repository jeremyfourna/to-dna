# to-dna

[![NPM](https://nodei.co/npm/to-dna.png)](https://www.npmjs.com/package/to-dna)

Transform strings to DNA and vice versa.

See _Biomimicry_ book from Janine M. Benyus, Page 231-235.

## Installation

`npm i to-dna`

## Usage

### `toDNA` function

```js
const { toDNA } = require('to-dna');
// toDNA :: string -> string
```

Example: `toDNA('jeremy fourna')` will output `AAGCAACAACACAACAAATAACGAACGGAACCAATGACCAACACAATCAAAA`.

### `toComplementaryDNA` function

```js
const { toComplementaryDNA } = require('to-dna');
// toComplementaryDNA :: string -> string
```

Example: `toComplementaryDNA('jeremy fourna')` will output `TTCGTTGTTGTGTTGTTTATTGCTTGCCTTGGTTACTGGTTGTGTTAGTTTT`.

### `fromDNA` function

```js
const { fromDNA } = require('to-dna');
// fromDNA :: string -> string
```

Example: `fromDNA('AAGCAACAACACAACAAATAACGAACGGAACCAATGACCAACACAATCAAAA')` will output `JEREMY FOURNA`.

### `fromCompletementaryDNA` function

```js
const { fromCompletementaryDNA } = require('to-dna');
// fromCompletementaryDNA :: string -> string
```

Example: `fromCompletementaryDNA('TTCGTTGTTGTGTTGTTTATTGCTTGCCTTGGTTACTGGTTGTGTTAGTTTT')` will output `JEREMY FOURNA`.