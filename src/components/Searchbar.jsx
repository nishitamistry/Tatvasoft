// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Autocomplete from '@mui/material/Autocomplete';

// export default function FreeSolo() {
//     return (
//       <Stack spacing={2} sx={{ width: 422 }}>
//         <Autocomplete
//           freeSolo
//           id="free-solo-2-demo"
//           disableClearable
//           options={top100Films.map((option) => option.title)}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="What are you looking for..."
//               size="small"
//               width="422px"
//               InputProps={{
//                 ...params.InputProps,
//                 type: 'search',
//               }}
//             />
//           )}
//         />
//       </Stack>
//     );
//   }

//   // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
//   const top100Films = [
//     { title: 'The Shawshank Redemption', year: 1994 },
//     { title: 'The Godfather', year: 1972 },
//     { title: 'The Godfather: Part II', year: 1974 },
//     { title: 'The Dark Knight', year: 2008 },
//     { title: '12 Angry Men', year: 1957 },
//     { title: "Schindler's List", year: 1993 },
//     { title: 'Pulp Fiction', year: 1994 },
//     {
//       title: 'The Lord of the Rings: The Return of the King',
//       year: 2003,
//     },
//   ];

import React, { useEffect, useState } from 'react';
import { Button, List, ListItem, TextField, Box } from "@mui/material";
import bookService from "../services/book.service";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  // const open=false;
  const [query, setquery] = useState("");
  const [bookList, setbookList] = useState([]);
  const [openSearchResult, setOpenSearchResult] = useState([false]);

  const searchBook = async () => {
    const res = await bookService.searchBook(query)
    setbookList(res);
  };
  const search = () => {
    document.body.classList.add("search-results-open");
    searchBook();
    setOpenSearchResult(true);
  };

  useEffect(() => {
    setOpenSearchResult(false);
    document.body.classList.remove("search-results-open");
  }, []);

  return (
    <div>

      <div className="search-overlay" onClick={() => {
        setOpenSearchResult(false);
        document.body.classList.remove("search-results-open");
      }}>

      </div>
      <Box
        sx={{
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          padding: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="search-container">


          <div className="text-wrapper">
            <TextField
              id="text"
              name="text"
              placeholder="What are you looking for..."
              variant="outlined"
              value={query}
              sx={{width: "422px"}}
              onChange={(e) => setquery(e.target.value)}
            />
            {openSearchResult && (
              <>
                {bookList.length > 0 ? (
                  <div className="product-listing">
                    <List className="related-product-list">
                      {bookList.map((item, i) => {
                        return (
                          <ListItem key={i}>
                            <div className="inner-block">
                              <div className="left-col">
                                <span className="title">{item.name}</span>
                                <p>{item.description}</p>
                              </div>
                              <div className="right-col">
                                <span className="price">{item.price}</span>
                                {/* <Link onClick={()=>addToCart(item)}> Add to Cart</Link> */}
                              </div>
                            </div>
                          </ListItem>
                        );
                      })}
                    </List>
                  </div>
                ) : (
                  <div className="product-listing">
                    <p className="no-product">No product found</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={search}
          style={{ backgroundColor: "#80bf32" }}
          sx={{ textTransform: "capitalize", fontSize: "16px" }}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>
    </div>
  )
}
export default SearchBar;