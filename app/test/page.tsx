"use client";
import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import {
  ColourOption,
  FlavourOption,
  colourOptions,
  flavourOptions,
} from "./Docs/data";
import Drawer from "@mui/material/Drawer";
import DeleteIcon from "@mui/icons-material/Delete";
import { Col, Button, Input } from "reactstrap";
type FilterQuery = {
  id: number;
  fieldValue: string | null;
  filterValue: string | null;
  filterType: string | null;
  type: string | null;
};
export default function index() {
  const [state, setState] = useState(true);
  const [feildList, setFeildlist] = useState<FilterQuery[]>();
  const [itemvals, setItemvals] = useState();
  const toggleDrawer = () => {
    setState(true);
  };
  const handleolorChange = (val: SingleValue<ColourOption>) => {
    if (feildList?.length) {
      console.log("in if ");
      // // Create a new array with the updated item
      // const updatedItems = feildList.map((item) => {
      //   const obj = {
      //     ...item,
      //     id: (item?.id + 1) | 1,
      //     fieldValue: val?.value || null,
      //     filterValue: null,
      //     filterType: null,
      //   };
      //   return obj;
      // });
      // // Update the state with the new array of items
      const lastid = feildList[feildList.length - 1].id || 256;


      const obj = {
        id: lastid+1,
        fieldValue: val?.value || null,
        filterValue: null,
        filterType: null,
        type: null,
      };
      setFeildlist([...feildList,obj]);
      // setFeildlist(updatedItems);
    } else {
      console.log("in else");
      // const updatedItems = feildList.map((item) => {
      //   const obj = {
      //     ...item,
      //     id: item?.id + 1,
      //     fieldValue: val?.value,
      //   };
      //   return obj;
      // });
      const obj = {
        id: 1,
        fieldValue: val?.value || null,
        filterValue: null,
        filterType: null,
        type: null,
      };
      setFeildlist([obj]);
    }
  };
  const hadleFlavXChange = (val: SingleValue<FlavourOption>, id: number) => {
    // const updatedItems = feildList?.map((item) => {
    //   const obj = {
    //     ...item,
    //     type: val?.type,
    //   };
    //   return obj;
    // });
    // / Create a new array with the updated item
    const updatedItems = feildList?.map((item) =>
      item.id === id
        ? { ...item, filterType: val?.value || null, type: val?.type || null }
        : item
    );

    setFeildlist(updatedItems);
  };
  return (
    <>
      <div>
        <div>
          <React.Fragment>
            <Button onClick={toggleDrawer}>open</Button>
            <Drawer
              anchor={"right"}
              open={state}
              onClose={() => setState(false)}
            >
              <div
                className="d-flex flex-column "
                style={{ width: "500px", height: "100%" }}
              >
                <div className="d-flex flex-column justify-content-between  h-100">
                  <div className="d-flex flex-column ">
                    <div className="p-2  border-bottom d-flex justify-content-between align-content-center  ">
                      <div className="fs-5">Filter</div>
                      <div
                        className="fs-5 btn-close btn btn-primary"
                        onClick={() => setState(false)}
                      >
                        {" "}
                      </div>
                    </div>
                    <Col md={12} className="pt-4 px-4">
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable={true}
                        name="color"
                        value={null}
                        options={colourOptions}
                        onChange={(val) => handleolorChange(val)}
                      />
                    </Col>

                    {feildList &&
                      feildList.map((elem) => {
                        return (
                          <Col
                            md={12}
                            className="my-2 p-2 pt-1 bg-danger-subtle"
                            style={{ boxSizing: "border-box" }}
                            key={elem.id}
                          >
                            {" "}
                            <div className="d-flex justify-content-between  align-content-center align-items-center  py-2">
                              <div>{elem.fieldValue}</div>
                              <div>
                                <DeleteIcon />
                              </div>
                            </div>
                            <Select
                              className="basic-single "
                              classNamePrefix="select"
                              isClearable={true}
                              name="color"
                              value={null}
                              options={flavourOptions}
                              onChange={(val) => hadleFlavXChange(val, elem.id)}
                            />
                            {elem.type !== null ? (
                              elem.type == "text" ? (
                                <>
                                  <label htmlFor={`filtertype${elem.id}`}>
                                    Enter value
                                  </label>
                                  <Input
                                    id={`filtertype${elem.id}`}
                                    className="mt-2"
                                    placeholder="..."
                                  />
                                </>
                              ) : (
                                <>
                                  <label htmlFor={`filterval${elem.id}`}>
                                    select value
                                  </label>
                                  <Select
                                    id={`filterval${elem.id}`}
                                    className="basic-single mt-2 "
                                    classNamePrefix="select"
                                    isClearable={true}
                                    name="color"
                                    value={null}
                                    options={flavourOptions}
                                    onChange={(val) =>
                                      hadleFlavXChange(val, elem.id)
                                    }
                                  />
                                </>
                              )
                            ) : (
                              ""
                            )}
                          </Col>
                        );
                      })}
                  </div>
                  <div className="d-flex justify-content-between  align-content-center align-items-center border-top px-3 py-2">
                    <div>
                      {" "}
                      <Button color="primary"> cancel</Button>
                    </div>
                    <div>
                      {" "}
                      <Button color="primary">Click Me</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
          </React.Fragment>
        </div>
      </div>
    </>
  );
}
