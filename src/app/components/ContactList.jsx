import React from "react";
import ContactCard from "./ContactCard";
const ContactList = ({ datas }) => {
  const display = (datas) => {
    return datas.map((item) => {
      return <ContactCard contact={item} />;
    });
  };
  return (
    <div>
      {/* <h1 className="text-3xl">:-all Datas are here</h1> */}
      {display(datas)}
    </div>
  );
};

export default ContactList;
