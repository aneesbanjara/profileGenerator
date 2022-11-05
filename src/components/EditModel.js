import classes from "./EditModel.module.css";
import ReactDom from "react-dom";
const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModelOverlay = (props) => {
  const { record, setShowEdit, userDataArr } = props;
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const dataArr = [...userDataArr];
    const objectToBeUpdated = dataArr.find((obj) => obj.id === record.id);
    objectToBeUpdated.name = e.target[0].value;
    objectToBeUpdated.email = e.target[1].value;
    objectToBeUpdated.phone = e.target[2].value;
    objectToBeUpdated.city = e.target[3].value;
    objectToBeUpdated.district = e.target[4].value;
    objectToBeUpdated.province = e.target[5].value;
    objectToBeUpdated.country = e.target[6].value;

    setShowEdit(false);
  };
  return (
    <div className={classes.modal}>
      <form onSubmit={formSubmitHandler}>
        <label className={classes.header} htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          defaultValue={record.name}
          required
        />
        <label className={classes.header} htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          defaultValue={record.email}
          required
        />
        <label className={classes.header} htmlFor="phone">
          Phone:
        </label>
        <input
          type="number"
          name="phone"
          placeholder="Enter your phone number"
          min={7}
          defaultValue={record.phone}
          required
        />
        <label className={classes.header} htmlFor="city">
          City:
        </label>
        <input
          type="text"
          name="city"
          placeholder="City"
          defaultValue={record.city}
        />
        <label className={classes.header} htmlFor="district">
          District:
        </label>
        <input
          type="text"
          name="district"
          placeholder="District"
          defaultValue={record.district}
        />
        <label className={classes.header} htmlFor="province">
          Province:
        </label>
        <select name="province" id="province" defaultValue={record.province}>
          <option value="province 1">province 1</option>
          <option value="province 2">province 2</option>
          <option value="province 3">province 3</option>
          <option value="province 4">province 4</option>
          <option value="province 5">province 5</option>
          <option value="province 6">province 6</option>
          <option value="province 7">province 7</option>
        </select>
        <label className={classes.header} htmlFor="country">
          Country:
        </label>
        <input
          type="text"
          name="country"
          placeholder="Country"
          defaultValue={record.country}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const EditModel = (props) => {
  const { record, setShowEdit, userDataArr } = props;
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModelOverlay
          record={record}
          userDataArr={userDataArr}
          setShowEdit={setShowEdit}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default EditModel;
