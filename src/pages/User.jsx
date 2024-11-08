import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Slices/userSlice";

const User = () => {
  const users = useSelector((state) => state.userInfo.users);
  const dispatch = useDispatch();

  const RemoveUser = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <div>
      <h1>UserPage</h1>
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <h1>UserName:{user.name}</h1>
            <h2>age:{user.age}</h2>
            <h2>email:{user.email}</h2>
            <h2>phone:{user.phone}</h2>
            <button
              onClick={() => {
                RemoveUser(index);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default User;
