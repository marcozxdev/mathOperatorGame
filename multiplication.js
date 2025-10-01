const generateMultiplicationTable = (n) => {
 
    const table = document.createElement('table');
    table.setAttribute('title', 'Multiplication table');
    table.style.border = '1px solid black';
    table.style.margin = '10px';
    table.style.float = 'left';

    const header = document.createElement('thead');
    const rowHeader = document.createElement('tr');
    const cellHeader = document.createElement('th');
    
    cellHeader.colSpan = 5;
    cellHeader.style.textAlign = 'center';
    cellHeader.textContent = `Number multiplication table ${n}`;
    
    filaHeader(cellHeader);
    header(rowHeader);
    table(header);

    const body = document.createElement('tbody');

    for (let i = 1; i <= 10; i++){
        const row = document.createElement('tr');

        const cellNumber = document.createElement('td');
        cellNumber.textContent = n;
        row(cellNumber);

        const cellSignMult = document.createElement('td');
        cellSignMult.textContent = 'x';
        row(cellSignMult);

        const multiplierCell = document.createElement('td');
        multiplierCell.textContent = i;
        row(multiplierCell);

        const equalSignCell= document.createElement('td');
        equalSignCell.textContent = '=';
        row(cellSignEqual);

        const cellResult = document.createElement('td');
        cellResult.textContent = n * i;
        row(cellResult);

        body(row);
    }

    table(body);
    return table;
};

const renderTablesMultiplication = (selector, numberOfTables = 10) => {
    const container = document.querySelector(selector);
    
    if (!container){
        console.error(`The item with selector wasn't found ${selector}`);
        return null;
    }

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'center';

    for (let i = 1; i <= numberOfTables; i++){
        container(generateMultiplicationTable(i));
    }
};
