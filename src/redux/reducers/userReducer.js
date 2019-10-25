import uuidv4 from "uuid/v4";
import moment from "moment";

const initialState = [
  {
    key: "1",
    firstname: "John ",
    lastname: " Brown",
    hobby: "Jogging Brown",
    age: 31,
    birthday: "12-12- 1989"
  },
  {
    key: "2",
    firstname: "Stella ",
    lastname: " May",
    hobby: "Swimming",
    age: 21,
    birthday: "23-02- 1999"
  },
  {
    key: "3",
    firstname: "Uche ",
    lastname: " Phillips",
    hobby: "Movies",
    age: 22,

    birthday: "12-12-2019"
  },
  {
    key: "4",
    firstname: "Tope ",
    lastname: " Smith",
    hobby: "Engineering",
    age: 20,
    birthday: "16-10-1990"
  },
  {
    key: "5",
    firstname: "Joye ",
    lastname: " Shonubi",
    hobby: "Engineering",
    age: 30,
    birthday: "16-10-1990"
  }
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      action.user.key = uuidv4();
      let birthdayFormat = action.user.Birthday._d;
      action.user.birthday = moment(birthdayFormat).format("DD-MM-YYYY");
      return [...state, action.user];
    default:
      return state;
  }
};

export default userReducer;
