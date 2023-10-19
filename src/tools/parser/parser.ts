import Papa from 'papaparse';

interface IParsedItem {
    [key: string]: string; // This allows the object to have any other properties
}
export async function parseFile(type: 'txt'|'csv'|'gpx', filePath:string) {
    let parsedData: {lat:string,lon:string}[] = [];

    if (type === 'txt' || type === 'csv') {
        const data = await fetch(filePath);
        const text = await data.text();
        parsedData = Papa.parse<IParsedItem>(text, {header: true}).data?.map((item) => {
            // check if item is an object
            if (item?.shape_pt_lat === undefined || item?.shape_pt_lon === undefined) {
                return {lat: '0', lon: '0'};
            }
            return {lat: item.shape_pt_lat, lon: item.shape_pt_lon};
        });

    } else if (type === 'gpx') {
        const data = await fetch(filePath);
        const text = await data.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const trkpts = xmlDoc.getElementsByTagName("trkpt");

        for (let i = 0; i < trkpts.length; i++) {
            const lat = trkpts[i].getAttribute("lat");
            const lon = trkpts[i].getAttribute("lon");

            if (lat !== null || lon !== null) {
                parsedData.push({lat: lat!, lon: lon!});
            }
        }
    } else {
        console.error('Type de fichier non pris en charge');
    }

    return parsedData;
}


// const Data = parseFile('txt' ||'gpx','src/files/test.txt');

