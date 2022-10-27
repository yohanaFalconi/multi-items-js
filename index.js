import { pagination } from './paginationUtils.js';
import {sortTableByColumn} from './sortTable.js'

const productsHeadTable = document.querySelector("#products-head-table");
const productsBodyTable = document.querySelector("#products-body-table");
export const paginationNumbers = document.querySelector('#pagination-numbers');
export const nextButton = document.querySelector("#next-button");
export const prevButton = document.querySelector("#prev-button");

self.addEventListener('fetch', function (event) {
  console.log("fetch add event listener", event.request.url);
});

window.addEventListener('DOMContentLoaded', async() =>{
  const data = await loadProducts();
  loadProducts()
  headerProductListTable()
  productListTable(data.data);
  
  const listItemsId =  document.querySelectorAll('.list-items-id');
  const listItemsName =  document.querySelectorAll('.list-items-name');
  const listItemsAuthor =  document.querySelectorAll('.list-items-author');
  pagination(listItemsId, listItemsName, listItemsAuthor);
  

  
    /* ordenando las columnas */
  document.querySelectorAll('.table-sortable th').forEach( headerCell =>{
    headerCell.addEventListener('click', () =>{
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc"); // inicia como false
        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
      })
    })
    
    /* buscador*/
})


async function loadProducts() {
  const response =await fetch('products.json');
  return await response.json();
}

const headerProductListTable = () =>{
  productsHeadTable.innerHTML+= `
      <thead>
        <tr>
          <th id="header-table-id" >ID</th>
          <th id="header-table-name" >NOMBRE</th>
          <th id="header-table-author">AUTOR</th>
        </tr>
      </thead>`;
};
const productListTable = (data) => { 
  data.map(item => {
    productsBodyTable.innerHTML += `
    <tbody>
      <tr>
        <td class="list-items-id" data-column="id" data-order="desc">${item.book_id}</td>
        <td class="list-items-name">${item.book_name}</td>
        <td class="list-items-author">${item.book_author}</td>
      </tr>
    </tbody>`
  }
)};


// Función que oculta los productos según el número de su página
const handleItemsVisibility = (itemsList) => {
  itemsList.forEach((item) => {
    item.classList.add("hidden");
  });
}


