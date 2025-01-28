import { RowID, RowElement } from `./interface`;

// Declaring the types for the crud functions

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;