export const getUsers = () =>
	fetch('http://localhost:3001/users').then((usersData) => usersData.json());
