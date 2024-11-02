import React from 'react';

function Datenow() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return formattedDate;
}

export default Datenow;