import PropTypes from 'prop-types';
import { useMemo, createContext, useContext, useEffect, useState } from 'react';
import { getAllUsers } from '@/services/users/getUsers';

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    getAllUsers(token)
      .then((data) => setUsers(data))
      .catch(() => setUsers([]));
  }, []);
  const value = useMemo(() => ({ users }), [users]);
  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}
UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export function useUsers() {
  return useContext(UsersContext);
}
