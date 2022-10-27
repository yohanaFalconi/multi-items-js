
export const sortTableByColumn = (table, column, ascendant = true) => {
    const directionModifier = ascendant ? 1 : -1;
    const tableBody = table.tBodies[0]; // accedo a todas las filas 
    const rows = Array.from(tableBody.querySelectorAll("tr")); // captura todos lo tr de la tabla en un array

    // ordenar cada fila
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        return aColText > bColText ? (1 * directionModifier) : (-1 * directionModifier);
    });

    // Sacando todos los TRs de la tabla
	while (tableBody.firstChild) {
		tableBody.removeChild(tableBody.firstChild);
	}
    // Se vuelve a agregar las filas recién ordenadas
	tableBody.append(...sortedRows);

	// Recuerde cómo está ordenada actualmente la columna
	table.querySelectorAll("th").forEach(th =>{
      th.classList.remove("th-sort-asc", "th-sort-desc");
    });
	table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", ascendant);
	table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !ascendant);
};

