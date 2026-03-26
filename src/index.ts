console.log('NodeJS Version:', process.version);

const SAMPLE_RESPONSE = {
  'Price History': {
    '2026-04-08': {
      '1. open': '96.40',
      '2. high': '99.10',
      '3. low': '95.80',
    },
    '2026-04-07': {
      '1. open': '95.20',
      '2. high': '97.60',
      '3. low': '94.10',
    },
    '2026-04-06': {
      '1. open': '94.50',
      '2. high': '95.70',
      '3. low': '92.20',
    },
    '2026-04-05': {
      '1. open': 'N/A',
      '2. high': '96.40',
      '3. low': '93.00',
    },
    '2026-04-04': {
      '1. open': '93.80',
      '2. high': '94.90',
      '3. low': '91.30',
    },
    '2026-04-03': {
      '1. open': '92.10',
      '2. high': '93.00',
      '3. low': '90.40',
    },
    '2026-04-02': {
      '1. open': '91.50',
      '2. high': '92.20',
    },
  },
};

// TODO: implement
function normalizePriceRows(response: any) {
  const rawSeries = response['Price History'] ?? {};

  const result: any[] = [];

  Object.entries(rawSeries).forEach(([date, values]: any) => {
    if (
      !values['1. open'] ||
      !values['2. high'] ||
      !values['3. low'] ||
      Number.isNaN(Number(values['1. open'])) ||
      Number.isNaN(Number(values['2. high'])) ||
      Number.isNaN(Number(values['3. low']))
    ) {
      return;
    }

    result.push({
      date,
      open: Number(values['1. open']),
      high: Number(values['2. high']),
      low: Number(values['3. low']),
    });
  });

  result.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  return result;
}

// TODO: implement
function computeAndPrintSummary(records: any[]) {
  let days = 0;
  let maxHigh = 0;
  let maxLow = 0;
  let averageOpen = 0;
  let maxDate = 'YYYY-MM-DD';

  if (records.length > 0) {
    days = records.length;
    records.forEach((record) => {
      if (record.high - record.low > maxHigh - maxLow) {
        maxHigh = record.high;
        maxLow = record.low;
        maxDate = record.date;
      }
      averageOpen += record.open;
    });
  }

  console.log('Days:', days);
  console.log('Average open:', (averageOpen / records.length).toFixed(2));
  console.log('Largest range: ' + (maxHigh - maxLow).toFixed(2) + ' on ' + maxDate);
}

function main() {
  const records = normalizePriceRows(SAMPLE_RESPONSE);
  console.log(records);
  computeAndPrintSummary(records);
}

main();
