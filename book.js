function addStudent(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const language = document.getElementById("language").value;
    const bookId = document.getElementById("book-id").value; 

    
    const table = document.getElementById("bookTableBody");
    const row = table.insertRow();
    row.innerHTML = `<td>${name}</td><td>${author}</td><td>${language}</td><td>${bookId}</td>`;

    
    document.querySelector("form").reset(); 
}

function sortTable(columnIndex) {
    const table = document.getElementById("bookTable");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();

        
        if (columnIndex === 4) {
            return parseFloat(cellA) - parseFloat(cellB);
        }

        return cellA.localeCompare(cellB, undefined, { numeric: true });
    });

    tbody.innerHTML = "";
    sortedRows.forEach(row => tbody.appendChild(row));
}

function filterTable() {
    const filter = document.getElementById("filter").value.toLowerCase();
    const rows = document.querySelectorAll("#bookTableBody tr");

    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
}
