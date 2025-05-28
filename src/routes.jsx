// src/routes.jsx
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import Home from "./pages/Home";
import ContactList from "./pages/ContactList";
import AddContactPage from "./pages/AddContactPage";
import EditContactPage from "./pages/EditContactPage";
import SingleContact from "./pages/SingleContact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not Found!</h1>}>
      {/* Home page */}
      <Route index element={<Home />} />

      {/* Contacts CRUD pages */}
      <Route path="contacts" element={<ContactList />} />
      <Route path="contacts/add" element={<AddContactPage />} />
      <Route path="contacts/edit/:id" element={<EditContactPage />} />
      <Route path="contacts/:id" element={<SingleContact />} />
    </Route>
  )
);
