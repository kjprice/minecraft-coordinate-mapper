import reader from 'g-sheets-api';

import SPREADSHEET_ID from './SpreadsheetId';

const TIMEOUT = 10000; // 10 seconds

export default function getCoordinatesFromGoogleSheets() {
    return new Promise((res, rej) => {
        let success = false;
        let error = false;
        const readerOptions = {
            // KJ's Google Doc: https://docs.google.com/spreadsheets/d/1-Yx5E-JU70AJ-QcE6NzncnkEGdTixo68dgLnWxIDkS8/edit?usp=sharing
            sheetId: SPREADSHEET_ID,
            returnAllResults: true,
            filter: {},
        };

        reader(readerOptions, (results) => {
            if (error) {
                return;
            }
            success = true;
            res(results);
        });

        setTimeout(() => {
            if (!success) {
                error = true;
                rej('Timeout');
            }
        }, TIMEOUT);
    });
}