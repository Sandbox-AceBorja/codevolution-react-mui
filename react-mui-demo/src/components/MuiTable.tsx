import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material'

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: `500px` }} elevation={4}>
      <Table aria-label={`simple table`} stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell align={`center`}>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell align={`center`}>IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align={`center`}>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell align={`center`}>{row.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = [
  {
    id: 1,
    first_name: 'Nicolai',
    last_name: 'Cashmore',
    email: 'ncashmore0@pcworld.com',
    gender: 'Male',
    ip_address: '191.170.25.135',
  },
  {
    id: 2,
    first_name: 'Jayme',
    last_name: 'Sentinella',
    email: 'jsentinella1@i2i.jp',
    gender: 'Genderfluid',
    ip_address: '101.13.171.28',
  },
  {
    id: 3,
    first_name: 'Fulton',
    last_name: 'Leward',
    email: 'fleward2@tinyurl.com',
    gender: 'Non-binary',
    ip_address: '179.126.76.136',
  },
  {
    id: 4,
    first_name: 'Abigael',
    last_name: 'Oolahan',
    email: 'aoolahan3@tmall.com',
    gender: 'Female',
    ip_address: '241.177.194.42',
  },
  {
    id: 5,
    first_name: 'Geoff',
    last_name: 'Levesque',
    email: 'glevesque4@state.tx.us',
    gender: 'Male',
    ip_address: '223.165.109.142',
  },
  {
    id: 6,
    first_name: 'Joaquin',
    last_name: 'Macer',
    email: 'jmacer5@mail.ru',
    gender: 'Male',
    ip_address: '197.45.76.218',
  },
  {
    id: 7,
    first_name: 'Ferdinanda',
    last_name: 'Pendre',
    email: 'fpendre6@furl.net',
    gender: 'Female',
    ip_address: '78.215.176.69',
  },
  {
    id: 8,
    first_name: 'Mareah',
    last_name: 'Fegan',
    email: 'mfegan7@yahoo.com',
    gender: 'Female',
    ip_address: '59.114.4.210',
  },
  {
    id: 9,
    first_name: 'Wernher',
    last_name: 'Brandoni',
    email: 'wbrandoni8@mapy.cz',
    gender: 'Male',
    ip_address: '91.239.182.194',
  },
  {
    id: 10,
    first_name: 'Isacco',
    last_name: 'Dailey',
    email: 'idailey9@home.pl',
    gender: 'Male',
    ip_address: '45.211.92.215',
  },
]
