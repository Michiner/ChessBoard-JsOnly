window.alert("Welcome To Chess Board");
const mainHeader = document.createElement('h1'); 
    mainHeader.innerText = ' Cyber4s ChessBoard '
    document.body.appendChild(mainHeader);
    mainHeader.classList.add('header');

const table = document.createElement('table'); 
    document.body.append(table);
    table.classList.add('table');

for (let tr = 0; tr<8; tr++) {                 
    let row = document.createElement('tr'); 
    table.append(row);
    row.classList.add('row');

    for(let td = 0; td<8; td++) {              
        const cell = document.createElement('td');
        row.append(cell);

        if((td + tr) % 2 == 0) {              
            cell.classList.add('white');

        } else {
            cell.classList.add('black');
        }
    }
    
}