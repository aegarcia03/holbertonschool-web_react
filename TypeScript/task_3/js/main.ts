/// <reference path="crud.d.ts"/>

import { RowID, RowElement } from "./interface"; // Importing types from interface.ts
import * as CRUD from "./crud"; // Importing everything from the crud.js module

let row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowID: RowID = CRUD.insertRow(row)
const updateRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.updateRow(newRowID, updateRow)
CRUD.deleteRow(newRowID)