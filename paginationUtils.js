import { nextButton, prevButton, paginationNumbers } from './index.js';


let currentPage = 1;
const paginationLimit = 5;

export function pagination(listItemsId, listItemsName, listItemsAuthor) {

  const pageCount = Math.ceil(listItemsId.length/paginationLimit);
  getPaginationNumbers(pageCount);    
  setCurrentPage(1, listItemsId, listItemsName, listItemsAuthor);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1, listItemsId, listItemsName, listItemsAuthor );
  });
  
  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1, listItemsId, listItemsName, listItemsAuthor );
  });
  
  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));
      if (pageIndex) {
        button.addEventListener("click", () => {
          setCurrentPage(pageIndex, listItemsId, listItemsName, listItemsAuthor );
        });
      }
  });
}

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};
const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};
//Evento que controla los botones avanzar y retroceder en la paginación 
const handlePageButtonsStatus = () => {
  const pageCount = 4;
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

// Evento que agrega el pie de página sus atributos
const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);
  paginationNumbers.appendChild(pageNumber);
};

// Evento para agregar los números de pie de página
const getPaginationNumbers = (pageCount) => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    } 
  });
}

// Función que oculta los productos según el número de su página
const handleProductsVisibility = (itemsList, prevRange, currRange) => {
  itemsList.forEach((item, index) => {
    item.classList.add("hidden");
      if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
}
  
// Evento para declara el estado según el número de página
const setCurrentPage = (pageNum, listItemsId, listItemsName, listItemsAuthor) => {
  currentPage = pageNum;
  handleActivePageNumber();
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  handleProductsVisibility(listItemsId, prevRange, currRange ) 
  handleProductsVisibility(listItemsName, prevRange,currRange ) 
  handleProductsVisibility(listItemsAuthor, prevRange,currRange ) 
};


