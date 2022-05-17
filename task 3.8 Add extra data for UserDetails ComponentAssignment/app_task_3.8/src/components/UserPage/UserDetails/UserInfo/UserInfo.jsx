import React from "react";
import styles from "./UserInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEarthAmericas,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const address = (
  <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
);
const email = <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />;
const phone = <FontAwesomeIcon className={styles.icon} icon={faPhone} />;
const website = (
  <FontAwesomeIcon className={styles.icon} icon={faEarthAmericas} />
);
const company = <FontAwesomeIcon className={styles.icon} icon={faBuilding} />;

const UserInfo = ({ user }) => {
  return (
    <div>
      <div className={styles.userRowInfo}>
        {email}
        <p>{user.email}</p>
      </div>

      <div className={styles.userRowInfo}>
        {address}
        <p>
          {user.address.street}, {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>

      <div className={styles.userRowInfo}>
        {phone}
        <div>{user.phone}</div>
      </div>

      <div className={styles.userRowInfo}>
        {website}
        <div>{user.website}</div>
      </div>

      <div className={styles.userRowInfo}>
        {company}
        <div>{user.company.name}</div>
      </div>
    </div>
  );
};

export default UserInfo;
