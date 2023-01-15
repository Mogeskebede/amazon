// //search bar
//     import React, { useState } from "react";
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
//     import Datas from './Datas'
// function SearchBar({ placeholder, data }) {
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = data.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };
//   const clearInput = () => {
//     setFilteredData([]);
//     // setWordEntered("");
//   };
//      return (
//     <div className="search">
//       <div className="searchInputs">
//         <input
//           type="text"
//           placeholder={placeholder}
//           value={wordEntered}
//           onChange={handleFilter}
//         />
//         <div className="searchIcon">
//           {filteredData.length === 0 ? (
//             <SearchIcon />
//           ) : (
//             <CloseIcon id="clearBtn" onClick={clearInput} />
//           )}
//         </div>
//       </div>
//       {filteredData.length != 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <a className="dataItem" href={value.link} target="_blank">
//                 <p>{value.title} </p>
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;
// //     //const [searchInput, setSearchInput] = useState("");
// // 

// //     


// //     //     const handleChange = (e) => {
// //     //         e.preventDefault();
// //     //         setSearchInput(e.target.value);
// //     //     };
// //     //     if (searchInput.length > 0) {
// //     //         collectedItems.filter((srchItems) => {
// //     //             return srchItems.name.match(searchInput);
// //     //         });
// //     //     }
// //     // }
// //     // return (
// //     //     	{<table>
// //     // 		{collectedItems.map((srchItems, index) => {
// //     // 		<tr key="index">
// //     // 		<td>{srchItems.name}</td>
// //     // 			</tr>
// //     // 			})}
// //     // 		</table> }
// //     // )
// // }