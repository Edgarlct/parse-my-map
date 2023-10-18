import * as fs from 'fs';
import { parseString } from 'xml2js';

const filePath = "src/files/test.gpx";
const gpx = fs.readFileSync(filePath, 'utf-8');

// Parser le XML en objet JavaScript
parseString(gpx, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    const trackPoints = result.gpx.trk[0].trkseg[0].trkpt;

    const parsedData = trackPoints.map((point) => {
        const lat = point.$.lat;
        const lon = point.$.lon;
        return { lat, lon };
    });
    console.log(parsedData);
});
