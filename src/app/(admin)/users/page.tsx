"use client";
import React, { useEffect, useState } from 'react';
import UserTableRow, { UserResult } from '@/app/components/list/UserListItem'; 

export default function Page() {
  const [users, setUsers] = useState<UserResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://randomuser.me/api/?results=20');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.results) {
           setUsers(data.results);
         } else {
           setUsers([]);
         }
        setLoading(false);
      } catch (error: any) {
        console.error(error);
        setError("Failed to load users.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div><h1>Users</h1><p>Loading...</p></div>;
  if (error) return <div><h1>Users</h1><p style={{ color: 'red' }}>Error: {error}</p></div>;
  if (!users || users.length === 0) return <div><h1>Users</h1><p>No users found.</p></div>;

  return (
    <div>
      <h1>Users</h1>
      <p>List of users:</p>
      <div> {/* Wrap if needed, or use TableBody */}
        {users.map(user => (
           <UserTableRow key={user.login.uuid} user={user} />
        ))}
      </div>
    </div>
  );
}