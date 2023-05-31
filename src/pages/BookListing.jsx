// import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
// import React from 'react'

// function BookListing() {
//     return (
//         // <div className={classes.productListWrapper}>
//         <div>
//         <div className="container">
//             <Typography variant="h1">Book Listing</Typography>
//             <Grid container className="title-wrapper">
//                 <Grid item xs={6}>
//                     <Typography variant="h2">
//                         Total <span> - {bookResponse.totalItems} items</span>
//                     </Typography>
//                 </Grid>
//                 <div className="dropdown-wrapper">
//                     <TextField
//                         id="text"
//                         className="dropdown-wrapper"
//                         name="text"
//                         placeholder="Search....."
//                         variant="outlined"
//                         inputProps={{ className: "small" }}
//                         onChange={(e) => {
//                             setfilters({
//                                 ...filters,
//                                 Keyword: e.target.value,
//                                 pageIndex: 1,

//                             });
//                         }}
//                     />
//                 </div>
//                 <FormControl className="dropdown-wrapper" variant="outlined">
//                     <InputLabel htmlFor="select">Sort By</InputLabel>
//                     <Select
//                         className={materialclasses.customSelect}
//                         MenuProps={{
//                             classes: {
//                                 paper: material
//                                     .customSelect
//                             },
//                         }}
//                         onChange={sortBooks}
//                         value={sortBy}
//                     >
//                         <MenuItem value="a-z">a - z</MenuItem>
//                         <MenuItem value="z-a">z - a</MenuItem>

//                     </Select>
//                 </FormControl>
//             </Grid>
//             <div className="product-list-wrapper">
//                 <div className="product-list-inner-wrapper">
//                     {books.map((book, index) => (
//                         <div className="product-list" key={index}>
//                             <div className="product-list-inner">
//                                 <em>
//                                     <img
//                                         src={book.base64image}
//                                         className="image"
//                                         alt="dummyimage"
//                                     />

//                                 </em>
//                                 <div className="content-wrapper">
//                                     <Typography variant="h3">{book.name}</Typography>
//                                     <span classname="category">{book.category}</span>
//                                     <p className="description">{book.description}</p>
//                                     <p className="price">
//                                         <span className="discount-price">MRP &#8377; {book.price}</span>
//                                     </p>
//                                     <Button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn pink-btn MuiButton-contained">
//                                        <span></span>
                                           
//                                     </Button>
//                                 </div>
//                             </div>
//                         </div>

//                     ))}
//                 </div>
//             </div>
//         </div>
//         </div>
//         {/*</div> */}
//     )
// }
// export default BookListing