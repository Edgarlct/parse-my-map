import * as fs from 'fs';
import { parseString } from 'xml2js';
import csvParser from 'csv-parser';

function parseFile(type, filePath) {
    let parsedData = [];

    if (type === 'txt') {
        const stream = fs.createReadStream(filePath, 'utf-8');
        stream.pipe(csvParser())
            .on('data', (row) => {
                const lat = row.shape_pt_lat;
                const lon = row.shape_pt_lon;
                parsedData.push({ lat, lon });
            })
            .on('end', () => {
                console.log(parsedData);
                console.error('Parse txt');
            });
    } else if (type === 'gpx') {
        const gpx = fs.readFileSync(filePath, 'utf-8');
        parseString(gpx, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }

            const trackPoints = result.gpx.trk[0].trkseg[0].trkpt;

            parsedData = trackPoints.map((point) => {
                const lat = point.$.lat;
                const lon = point.$.lon;
                return { lat, lon };
            });
            console.log(parsedData);
            console.error('Parse csv');
        });
    } else {
        console.error('Type de fichier non pris en charge');
    }

    return parsedData;
}


const Data = parseFile('txt' ||'gpx','src/files/test.txt');

