import { expect } from 'chai';
import { parseFile } from '../src/tools/parser/parser';
import * as fs from 'fs';
import * as path from 'path';
import { getPolyline } from '../src/tools/leafletPrepare/getPolyline';

describe('parseFile', () => {
    it('should parse a txt file', async () => {
        const filePath = path.join(__dirname, '/../src/files/test.txt');

        const fileContents = await fs.promises.readFile(filePath, 'utf-8');
        const parsedData = parseFile('txt', fileContents);

        expect(parsedData).to.exist;
        console.log('test 1 ');
    });

    it('should parse a gpx file', async () => {
        const filePath = path.join(__dirname, '/../src/files/test.gpx');

        const fileContents = await fs.promises.readFile(filePath, 'utf-8');
        const parsedData = parseFile('gpx', fileContents);
        expect(parsedData).to.exist;
    });

});


