// Function to search table rows
function searchTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.trim().toUpperCase();
    const table = document.getElementById("myTable");
    const rows = table.getElementsByTagName("tr");

    let foundRowIndex = -1;

    for (let i = 1; i < rows.length; i++) {
        let found = false;
        const cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].innerText.trim().toUpperCase();
            if (cellText.indexOf(filter) > -1) {
                found = true;
                cells[j].classList.add("highlighted");
                break;
            } else {
                cells[j].classList.remove("highlighted");
            }
        }
        if (found) {
            rows[i].style.display = "";
            if (foundRowIndex === -1) {
                foundRowIndex = i;
            }
        } else {
            rows[i].style.display = "none";
        }
    }

    if (foundRowIndex !== -1) {
        const tableRect = table.getBoundingClientRect();
        const rowRect = rows[foundRowIndex].getBoundingClientRect();
        if (rowRect.top < tableRect.top || rowRect.bottom > tableRect.bottom) {
            table.scrollTop = rows[foundRowIndex].offsetTop - table.offsetTop;
        }
    }
}
