import { expect } from 'chai';
import { parseFile } from '../src/tools/parser/parser';
import * as path from 'path';

describe('parseFile', () => {
    it('should parse a txt file', async () => {
        const filePath = path.join(__dirname, '..src/files/test.gpx');
        const parsedData = await parseFile('txt', filePath);

        // Vérifiez si parsedData est défini pour indiquer que le fichier a été analysé avec succès
        expect(parsedData).to.exist;
        console.log('test 1 ')
    });

    it('should parse a gpx file', async () => {
        const filePath = path.join(__dirname, '../src/files/test.gpx');
        const parsedData = await parseFile('gpx', filePath);
        console.log(parsedData , filePath)
        expect(parsedData).to.exist;
        console.log('test 2 ')
    });
});
