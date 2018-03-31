# to-dna

[![NPM](https://nodei.co/npm/to-dna.png)](https://www.npmjs.com/package/to-dna)

Transform strings to DNA for the Travelling Salesman problem.

See _Biomimicry_ book from Janine M. Benyus, Page 231-235.

## Installation

`npm i to-dna`

## Usage

### `toDNA` function

`toDNA :: string -> string`

Example: `toDNA('jeremy fourna')` will output `AAGCAACAACACAACAAATAACGAACGGAACCAATGACCAACACAATCAAAA`.

### `toComplementaryDNA` function

`toComplementaryDNA :: string -> string`

Example: `toComplementaryDNA('jeremy fourna')` will output `TTCGTTGTTGTGTTGTTTATTGCTTGCCTTGGTTACTGGTTGTGTTAGTTTT`.