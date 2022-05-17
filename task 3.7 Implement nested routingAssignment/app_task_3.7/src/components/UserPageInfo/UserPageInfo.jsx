import React, { useState } from "react";
import "./UserPageInfo.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faEarthAmericas,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const address = <FontAwesomeIcon className="icon" icon={faLocationDot} />;
const email = <FontAwesomeIcon className="icon" icon={faEnvelope} />;
const phone = <FontAwesomeIcon className="icon" icon={faPhone} />;
const website = <FontAwesomeIcon className="icon" icon={faEarthAmericas} />;
const company = <FontAwesomeIcon className="icon" icon={faBuilding} />;

const UserPageInfo = () => {
  const params = useParams();
  console.log(params.id);

  const users = useSelector((state) => state.users.users);
  const user = users.filter((user) => user.id === Number(params.id))[0];
  console.log(user);

  return (
    <div className="userPageInfo">
      <h3 className="userName">{user.name}</h3>

      <div className="userRowInfo">
        {email}
        <p>{user.email}</p>
      </div>

      <div className="userRowInfo">
        {address}
        <p>
          {user.address.street}, {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>

      <div className="userRowInfo">
        {phone}
        <div>{user.phone}</div>
      </div>

      <div className="userRowInfo">
        {website}
        <div>{user.website}</div>
      </div>

      <div className="userRowInfo">
        {company}
        <div>{user.company.name}</div>
      </div>
    </div>
  );
};

export default UserPageInfo;
