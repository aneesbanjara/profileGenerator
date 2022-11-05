import React from "react";

const ListProfiles = (props) => {
  const { userDataArr } = props;
  return (
    <div>
      <h1>Profiles</h1>
      {userDataArr.map((data, index) => {
        return (
          <div key={data.id}>
            <div>{data.name}</div>
            <div>{data.email}</div>
            <div>{data.phone}</div>
            <div>{data.city}</div>
            <div>{data.district}</div>
            <div>{data.province}</div>
            <div>{data.country}</div>
            <a href="">Edit</a>
          </div>
        );
      })}
    </div>
  );
};

export default ListProfiles;
