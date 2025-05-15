import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

interface UserTableRowProps {
  user: UserResult;
  onEdit?: (user: UserResult) => void;
  onDelete?: (uuid: string) => void;
}

const UserTableRow: React.FC<UserTableRowProps> = ({ user, onEdit, onDelete }) => {
  const handleEditClick = () => {
    if (onEdit) {
      onEdit(user);
    }
  };

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete(user.login.uuid);
    }
  };

  return (
    <TableRow key={user.login.uuid}>
      <TableCell>
          {user.picture?.thumbnail && (
             <img
               src={user.picture.thumbnail}
               alt={`${user.name.first} ${user.name.last}`}
               style={{ width: '50px', height: '50px', borderRadius: '50%' }}
             />
          )}
      </TableCell>

      <TableCell>
          <Typography variant="body2">
               {user.name.title} {user.name.first} {user.name.last}
          </Typography>
      </TableCell>

      <TableCell>
          <Typography variant="body2">
               {user.email}
          </Typography>
      </TableCell>

      <TableCell>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={handleEditClick}
            disabled={!onEdit}
            sx={{ mr: 1 }}
          >
            Bewerk
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={handleDeleteClick}
            disabled={!onDelete}
          >
            Verwijder
          </Button>
      </TableCell>
    </TableRow>
  );
};

export default UserTableRow;