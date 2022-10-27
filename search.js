// import { booksNameSearch, productsBodyTable, productListTable} from './index.js'

// export function searchItems (data) {
//     booksNameSearch.addEventListener('keypress', async (event) => {
//         const searchString = event.target.value.toLowerCase();
//         // productsBodyTable.innerHTML += "";
//         try {
//           const filteredNames = data.filter((product) => {
//             //   return (product.book_name.toLowerCase().includes(searchString) );
//             const a = product.book_name.toLowerCase().includes(searchString);
//             console.log(a )
//           });
//         //   console.log(filteredNames)
//           productListTable(filteredNames);
        
//         } catch (err){ console.log(err);}
//       });
// }

// // Función que oculta los productos según el número de su página
// // const handleProductsVisibility = (itemsList, prevRange, currRange) => {
// //     itemsList.forEach((item, index) => {
// //       item.classList.add("hidden");
// //         if (index >= prevRange && index < currRange) {
// //         item.classList.remove("hidden");
// //       }
// //     });
// // }