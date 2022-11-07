import { useEffect, useState } from "react";
import "./App.css";
import EditModel from "./components/EditModel";
import ListProfiles from "./components/ListProfiles";
import { v4 as uuidv4 } from "uuid";
import { BsSortAlphaDown } from "react-icons/bs";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
function App() {
  const [userDataArr, setUserDataArr] = useState([]);
  const [record, setRecord] = useState({});
  const [profiles, setProfiles] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    console.log(JSON.parse(userData));
    if (userData) {
      setUserDataArr(JSON.parse(userData));
    }
  }, []);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      name: e.target[0].value,
      phone: e.target[1].value,
      email: e.target[2].value,
      city: e.target[3].value,
      district: e.target[4].value,
      province: e.target[5].value,
      country: e.target[6].value,
    };
    console.log("from submit", userDataArr);
    const userDatas = [...userDataArr, data];
    setUserDataArr(userDatas);
    localStorage.setItem("userData", JSON.stringify(userDatas));
  };
  const editHandler = () => {};
  const deleteHandler = (index) => {
    const userDatas = [...userDataArr];
    userDatas.splice(index, 1);
    setUserDataArr(userDatas);
    localStorage.setItem("userData", JSON.stringify(userDatas));
  };
  const sortNameHandler = () => {
    const userDatas = [...userDataArr];
    console.log(userDatas);
    userDatas.sort((a, b) => (a.name > b.name ? 1 : -1));
    setUserDataArr(userDatas);
  };
  const listProfileHandler = () => {};
  console.log("console log", userDataArr);
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
        <div>
          {!profiles && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "60%",
                  margin: "0 auto",
                  backgroundColor: "white",
                  borderRadius: "3rem",
                  padding: "2rem",
                  boxShadow:
                    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h2>Profile Information</h2>
                </div>
                <form onSubmit={formSubmitHandler}>
                  <div className="flexRow">
                    <div className="flexColumn">
                      <label htmlFor="name">Name:</label>
                      <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="flexColumn">
                      <label htmlFor="phone">Phone:</label>
                      <input
                        className="input"
                        type="number"
                        name="phone"
                        placeholder="Enter your phone number"
                        min={7}
                        required
                      />
                    </div>
                  </div>
                  <div className="flexRow">
                    <div className="flexColumn">
                      <label htmlFor="email">Email:</label>
                      <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="flexColumn">
                      <label htmlFor="city">City:</label>
                      <input
                        className="input"
                        type="text"
                        name="city"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="flexRow">
                    <div className="flexColumn">
                      <label htmlFor="district">District:</label>
                      <input
                        className="input"
                        type="text"
                        name="district"
                        placeholder="District"
                      />
                    </div>
                    <div className="flexColumn">
                      <label htmlFor="province">Province:</label>
                      <select name="province" className="input" id="province">
                        <option value="province 1">province 1</option>
                        <option value="province 2">province 2</option>
                        <option value="province 3">province 3</option>
                        <option value="province 4">province 4</option>
                        <option value="province 5">province 5</option>
                        <option value="province 6">province 6</option>
                        <option value="province 7">province 7</option>
                      </select>
                    </div>
                  </div>
                  <div className="flexColumn">
                    <label htmlFor="country">Country:</label>
                    <input
                      className="input"
                      type="text"
                      name="country"
                      placeholder="Country"
                      defaultValue={"Nepal"}
                    />
                  </div>
                  <div className="buttonDiv">
                    <button className="button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="tableDiv">
                <table>
                  <thead>
                    <tr>
                      <th>
                        Name
                        <a
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                            sortNameHandler(e);
                          }}
                          style={{
                            padding: "5px",
                            backgroundColor: "white",
                            border: "2px solid gray",
                            borderRadius: "50%",
                            height: 30,
                            width: 30,
                          }}
                        >
                          <BsSortAlphaDown />
                        </a>
                      </th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>City</th>
                      <th>District</th>
                      <th>Province</th>
                      <th>Country</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userDataArr?.map((data, index) => {
                      return (
                        <tr key={data.id}>
                          <td>{data.name}</td>
                          <td>{data.email}</td>
                          <td>{data.phone}</td>
                          <td>{data.city}</td>
                          <td>{data.district}</td>
                          <td>{data.province}</td>
                          <td>{data.country}</td>
                          <td>
                            <a
                              href=""
                              onClick={(e) => {
                                e.preventDefault();
                                setRecord(data);
                                setShowEdit(true);
                                editHandler();
                              }}
                              style={{
                                padding: "5px",
                                border: "1px solid gray",
                                borderRadius: "50%",
                                height: 50,
                                width: 50,
                              }}
                            >
                              <AiFillEdit size={20} />
                            </a>
                            <a
                              href=""
                              style={{
                                marginLeft: "8px",
                                padding: "4px",
                                border: "1px solid gray",
                                borderRadius: "50%",
                                height: 50,
                                width: 50,
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                setRecord(data);
                                deleteHandler(index);
                              }}
                            >
                              <AiFillDelete
                                size={20}
                                style={{ textAlign: "center" }}
                              />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="buttonDiv">
                  <button
                    className="button"
                    onClick={() => {
                      setProfiles(true);
                    }}
                  >
                    List Profiles
                  </button>
                </div>
              </div>
            </div>
          )}
          {profiles && <ListProfiles userDataArr={userDataArr} />}
        </div>
      )}
    </>
  );
}

export default App;
