"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Addcontact from "./components/Addcontact";
import ContactList from "./components/ContactList";

const Page = () => {
  const [contact, setContact] = useState([]);

  const addContacts = (newContact: any) => {
    setContact([...contact, newContact]);
  };

  useEffect(() => {
    const fetchData = JSON.parse(localStorage.getItem("contact"));
    if (fetchData) setContact(fetchData);
  }, []);
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);
  return (
    <div>
      <Header />
      <Addcontact onAddContact={addContacts} />
      <ContactList datas={contact} />
    </div>
  );
};

export default Page;
