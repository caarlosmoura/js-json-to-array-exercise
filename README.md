# js-json-to-array-exercise

Practice project in TypeScript focused on converting a nested JSON price feed into a sorted array of records.

## Overview

The input follows a market-data object shape with dated entries. The script reads that object, validates each entry, and turns the valid rows into a simpler array structure for later processing.

This repository keeps the implementation intentionally small and readable, using basic loops and numeric conversion instead of extra abstractions.

## Current behavior

- reads raw price entries from a JSON-like object
- converts `open`, `high`, and `low` values from strings to numbers
- ignores rows with missing fields or non-numeric content
- sorts the output by date in ascending order
- prints a short summary in the terminal

## Files

- `src/index.ts`: main source file
- `dist/index.js`: compiled output after build

## Running the project

```powershell
npm install
npm run build
npm start
```

## Example result

```text
NodeJS Version: v22.22.0
[
  { date: '2026-04-03', open: 92.1, high: 93, low: 90.4 },
  { date: '2026-04-04', open: 93.8, high: 94.9, low: 91.3 },
  { date: '2026-04-06', open: 94.5, high: 95.7, low: 92.2 },
  { date: '2026-04-07', open: 95.2, high: 97.6, low: 94.1 },
  { date: '2026-04-08', open: 96.4, high: 99.1, low: 95.8 }
]
Days: 5
Average open: 94.40
Largest range: 3.60 on 2026-04-04
```

## Notes

The sample input intentionally contains invalid rows so the filtering step can be exercised during normalization.
