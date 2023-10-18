import * as fs from 'fs';
import csvParser from 'csv-parser';

const filePath = "src/csv/test.csv";
const stream = fs.createReadStream(filePath, 'utf-8');

const parsedData = [];

stream.pipe(csvParser())
    .on('data', (row) => {
        const lat = row.latitude;
        const lon = row.longitude;
        parsedData.push({ lat, lon });
    })
    .on('end', () => {
        console.log(parsedData);
    });
