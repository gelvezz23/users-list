/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import { List } from "react-virtualized";
import "react-virtualized/styles.css";
import axiosInstance from "../../../infrastructure/axios";
import RowRenderer from "../rowRender";
import { IRowRendered } from "../../../entities/RowRendered";
import Error from "../Error";
import Loading from "../Loading";

const ROW_HEIGHT = 60;

function UserList() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/users`);
      const data = response.data;
      setUsers(data);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const rowRendered = ({ index, key, style }: IRowRendered) => (
    <RowRenderer index={index} key={key} style={style} users={users} />
  );

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Lista de Usuarios.
        </h1>
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <List
            style={{ width: "100%" }}
            className="w-full"
            height={window.innerHeight - 200}
            rowHeight={ROW_HEIGHT}
            rowCount={users.length}
            overscanRowCount={10}
            rowRenderer={rowRendered}
            width={700}
          />
        </div>
      </div>
    </div>
  );
}

export default UserList;
