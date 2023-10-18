import * as fs from 'fs';
import csvParser from 'csv-parser';

const filePath = "src/files/Shapes (1)..txt";
const stream = fs.createReadStream(filePath, 'utf-8');

const parsedData = [];

stream.pipe(csvParser())
    .on('data', (row) => {
        const lat = row.shape_pt_lat;
        const lon = row.shape_pt_lon;
        parsedData.push({ lat, lon });
    })
    .on('end', () => {
        console.log(parsedData);
    });
