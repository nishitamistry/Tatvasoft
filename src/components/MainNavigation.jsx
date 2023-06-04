import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import Register from "../pages/register";
import { RoutePaths } from "../utils/enum";
import { useAuthContext } from "../context/auth";
import { BookListing } from "../pages/book-listing";
import Book from "../pages/book";
import EditBook from "../pages/book/editBook";

export const MainNavigation = () => {
  const authContext = useAuthContext();

  const Redirect = <Navigate to={RoutePaths.Login} />;

  return (
    <Routes>
      <Route exact path={RoutePaths.Login} element={<Login />} />
      <Route exact path={RoutePaths.Register} element={<Register />} />
      <Route
        exact
        path={RoutePaths.BookListing}
        element={authContext.user.id ? <BookListing /> : Redirect}
      />

      <Route
        exact
        path={RoutePaths.Book}
        element={authContext.user.id ? <Book /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.AddBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
    </Routes>
  );
};
