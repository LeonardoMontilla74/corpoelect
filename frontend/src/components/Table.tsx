/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import ClientsContext from '../context/Clients/ClientsContext';

function ResponsiveExample() {
  const { clientState } = useContext(ClientsContext);
  return (
    <Table responsive className="container-full border text-white">
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {clientState.client?.map((c) => (
            <td key={c.idClient}>
              Table cell
              {' '}
              {c.NOMBRE}
            </td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>
              Table cell
              {' '}
              {index}
            </td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>
              Table cell
              {' '}
              {index}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;
