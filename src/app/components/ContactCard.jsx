import React from "react";

const ContactCard = (props) => {
  const { name, id, email } = props.contact;
  return (
    <div>
      <div key={id}>
        <div className="flex justify-center items-center text-center gap-12 m-5">
          <div className="overflow-x-auto flex gap-10 items-center">
            <div className="bg-neutral text-neutral-content rounded-full w-16 h-16 flex justify-center items-center">
              <span className="text-xl">{name[0]}</span>
            </div>
            <p>{name}</p>
            <p>{email}</p>
          </div>

          <button
            className="btn btn-active"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
