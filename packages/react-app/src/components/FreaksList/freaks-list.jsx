import React from 'react';
import '../../freaks.css';

function FreaksList() {
  const freakList = {
    freaks: [
      { id: 1, name: 'Edi', share: 4.5, amount: 0 },
      { id: 2, name: 'Adi', share: 6.5, amount: 0 },
      { id: 3, name: 'Gabi', share: 10, amount: 0 },
    ],
  };
  function TableData() {
    freakList.freaks.map((freak) => {
      const { id, name, share, amount } = freak;
      console.log(freak);
      return (
        <tr key={ id }>
          <td>{ name }</td>
          <td>{ share }</td>
          <td>{ amount }</td>
        </tr>
      );
    });
  }

  return (
    <div className="small-container">
      <table>
        <tbody>
          { TableData() }
        </tbody>
      </table>
    </div>
  );
}

export default FreaksList;
