import { useEffect, useState } from "react";
import "./App.css";
import EditModel from "./components/EditModel";
import ListProfiles from "./components/ListProfiles";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [userDataArr, setUserDataArr] = useState([]);
  const [record, setRecord] = useState({});
  const [profiles, setProfiles] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    console.log(userData);
    // setUserDataArr(userData);
  }, []);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      city: e.target[3].value,
      district: e.target[4].value,
      province: e.target[5].value,
      country: e.target[6].value,
    };
    const userDatas = [...userDataArr, data];
    setUserDataArr(userDatas);
    localStorage.setItem("userData", userDatas);
  };
  const editHandler = () => {};
  const deleteHandler = (index) => {
    const userDatas = [...userDataArr];
    userDatas.splice(index, 1);
    setUserDataArr(userDatas);
  };
  const sortNameHandler = () => {
    const userDatas = [...userDataArr];
    userDatas.sort((a, b) => (a.name > b.name ? 1 : -1));
    setUserDataArr(
      userDatas.map((data) => {
        console.log(data);
      })
    );
  };
  const listProfileHandler = () => {};
  console.log(userDataArr);
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
            <div>
              <form onSubmit={formSubmitHandler}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <label htmlFor="phone">Phone:</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  min={7}
                  required
                />
                <label htmlFor="city">City:</label>
                <input type="text" name="city" placeholder="City" />
                <label htmlFor="district">District:</label>
                <input type="text" name="district" placeholder="District" />
                <label htmlFor="province">Province:</label>
                <select name="province" id="province">
                  <option value="province 1">province 1</option>
                  <option value="province 2">province 2</option>
                  <option value="province 3">province 3</option>
                  <option value="province 4">province 4</option>
                  <option value="province 5">province 5</option>
                  <option value="province 6">province 6</option>
                  <option value="province 7">province 7</option>
                </select>
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  defaultValue={"Nepal"}
                />
                <button type="submit">Submit</button>
              </form>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>
                        Name <button onClick={sortNameHandler}>sort</button>
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
                              onClick={() => {
                                setRecord(data);
                                setShowEdit(true);
                                editHandler();
                              }}
                            >
                              Edit
                            </a>
                            <a
                              onClick={() => {
                                setRecord(data);
                                deleteHandler(index);
                              }}
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <button
                  onClick={() => {
                    setProfiles(true);
                  }}
                >
                  List Profiles
                </button>
              </div>{" "}
            </div>
          )}
          {profiles && <ListProfiles userDataArr={userDataArr} />}
        </div>
      )}
    </>
  );
}

export default App;
