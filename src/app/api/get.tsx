// Importeer React, en de benodigde Material UI componenten voor de tabel
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; // Optioneel, voor de tabel 'container'
import UserTableRow from '../components/list/UserListItem';



// De interfaces blijven hetzelfde, want die beschrijven de data
interface UserResult {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
      large: string;
      medium: string;
      thumbnail: string;
  };
  login: {
      uuid: string;
  };
}

interface RandomUserApiResponse {
  results: UserResult[];
  info: {
      seed: string;
      results: number;
      page: number;
      version: string;
  };
}

// getServerSideProps blijft ook hetzelfde, deze haalt de data op
export async function getServerSideProps() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=35');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as RandomUserApiResponse;

      if (!data || !data.results) {
          throw new Error("Invalid data format from Random User Generator API.");
      }

    return {
      props: {
        users: data.results,
      },
    };

  } catch (error: any) {
    console.error("Error fetching random users:", error);
    return {
      props: {
        users: [],
        error: error.message || "Failed to fetch random users."
      },
    };
  }
}

// Het RandomUsersOneFile component wordt aangepast om de tabel te renderen
function RandomUsersOneFile({ users, error }: { users: UserResult[], error?: string }) {
  if (error) {
    return <p>Error loading users: {error}</p>;
  }

  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      <h1>Random Users</h1>

      {/* Gebruik TableContainer en Paper voor een mooie Material UI styling */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/* Table Head: Koprij van de tabel */}
          <TableHead>
            <TableRow>
              <TableCell>Foto</TableCell> {/* Kolomtitel voor Foto */}
              <TableCell>Naam</TableCell> {/* Kolomtitel voor Naam */}
              <TableCell>Email</TableCell> {/* Kolomtitel voor Email */}
            </TableRow>
          </TableHead>

          {/* Table Body: Hier komen de rijen met data */}
          <TableBody>
            {/* Loop over de 'users' array */}
            {users.map((user) => (
          
              <UserTableRow
                key={user.login.uuid} // Zorg voor een unieke key
                user={user} // <-- DIT is waar je de user prop meegeeft!
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RandomUsersOneFile;