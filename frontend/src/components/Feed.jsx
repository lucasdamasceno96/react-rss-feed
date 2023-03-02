import React from "react";

const Feed = ({ title, link, date }) => {
  let formatted = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  let articleDate = new Date(date).toLocaleDateString("en-US", formatted);

  return (
    <div className="flex flex-col ">
      <h3 className="text-2xl font-semibold text-red-600 px-2 py-2">{title}</h3>
      <p className="font-semibold"> {date} </p>
    </div>
  );
};

export default Feed;
