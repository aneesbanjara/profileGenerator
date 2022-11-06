import React, { useState } from "react";
import EditModel from "./EditModel";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import classes from "./ListProfile.module.css";

const ListProfiles = (props) => {
  const { userDataArr } = props;
  const [record, setRecord] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
      {showEdit && (
        <EditModel
          record={record}
          setShowEdit={setShowEdit}
          userDataArr={userDataArr}
        />
      )}
      {!showEdit && (
        <div style={{ width: "70%", margin: "0 auto" }}>
          <h1>Profiles</h1>
          {userDataArr.map((data, index) => {
            return (
              <div key={data.id} className={classes.cardDiv}>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div>
                    <h3>{data.name}</h3>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        margin: "0.5 rem",
                      }}
                    >
                      <AiOutlinePhone />
                      {data.phone}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        margin: "0.5 rem",
                      }}
                    >
                      <AiOutlineMail />
                      {data.email}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        margin: "0.5 rem",
                      }}
                    >
                      <GoLocation />
                      {data.city} {data.district} {data.province}
                      {data.country}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        className="button"
                        onClick={() => {
                          setRecord(data);
                          setShowEdit(true);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ListProfiles;
