"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "flowbite-react";
import { GetAllUsersModel } from "@/models/GetAllUsersModels";

export function MainComponent(): JSX.Element {
  const [users, setUsers] = useState<GetAllUsersModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<GetAllUsersModel[]>("https://673ebb6da9bc276ec4b575e8.mockapi.io/api/project-1/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="px-4 pt-8">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Created At</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {users.map((user) => (
                <Table.Row
                  key={user.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    {user.id}
                  </Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </main>
  );
}
