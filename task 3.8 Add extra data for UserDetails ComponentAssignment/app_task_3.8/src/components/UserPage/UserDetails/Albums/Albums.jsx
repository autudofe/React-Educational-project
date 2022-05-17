import React, { useEffect, useState } from "react";
import UsersServices from "../../../../API/UsersServices";
import styles from "./Albums.module.css";

const Albums = ({ id }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    new UsersServices().getUserAlbums(id).then((r) => setAlbums(r.data));
  }, [id]);

  if (!albums.length) return <div>Loading...</div>;
  return (
    <div>
      {albums.map((album, index) => (
        <div key={album.userId + album.id} className={styles.albumRow}>
          {index + 1 + ". "}
          <p className={styles.albumRowText}>{album.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Albums;
