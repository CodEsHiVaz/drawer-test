"use client"
import React, { useState } from "react";
type Data = {
  id: number;
  label: string;
  value: string;
};

type Filter = {
  id: number;
  datatype: string | null;
  value: string | string[] | null;
  querytype: string | null;
};
type Arraydata = {
  id: number;
  feildname: string | null;
  filter: (string | Filter)[];
};
const array: Arraydata[] = [
  {
    id: 0,

    feildname: "fullname",
    filter: [
      { id: 1, datatype: "text", value: "shivaji", querytype: "contains" },
      "and",
      {
        id: 2,
        datatype: "select",
        value: ["shivaji", "sham"],
        querytype: "dose not",
      },
      "or",
      { id: 3, datatype: "text", value: "shivaji", querytype: "equal" },
      "and",
      { id: 4, datatype: null, value: "shivaji", querytype: "ends with" },
    ],
  },
  {
    id: 1,
    feildname: "email",
    filter: [
      {
        id: 1,
        datatype: "select",
        value: ["shivaji", "ram"],
        querytype: "contains",
      },
      "and",
      { id: 2, datatype: "text", value: "shivaji", querytype: "equal" },
      "or",
      { id: 3, datatype: null, value: "shivaji", querytype: "not equal" },
      "and",
      { id: 4, datatype: "text", value: "shivaji", querytype: "starts with" },
    ],
  },
];
const page = () => {
  const [list, setList] = useState(array);

  const handleClick = () => {
    const obj = {
      id: 1,
      feildName: "fullname",
    };
  };

  return (
    <div>
      {/* <button>+</button> */}

      {list &&
        list.map((item, index) => {
          return <div key={item.id}>
            
            
            
            {item.feildname}
            
            <button onClick={handleClick}>+ </button></div>;
        })}
    </div>
  );
};

export default page;
