import React from "react";
import { useFetchData } from "./hooks/userFetchData";

export const UserList = ({ endPoint }) => {
  // Destructurando estado desde el hook personalizado
  const { users, isLoading } = useFetchData(endPoint);

  return (
    <>
      <ul>
        {isLoading ? (
          <p>Cargando...</p>
        ) : endPoint === "users" ? (
          users.map(user => (
            <React.Fragment key={user.id}>
              <li>Nombre: {user.name}</li>
              <li>Email: {user.email}</li>
              <br />
            </React.Fragment>
          ))
        ) : (
          users.map(user => (
            <React.Fragment key={user.id}>
              <li>Nombre: {user.email}</li>
              <li>Email: {user.name}</li>
              <br />
            </React.Fragment>
          ))
        )}
      </ul>
    </>
  );
};
