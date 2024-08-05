import React from 'react';
import './../css/Pagination.css';

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='mt-5 mb-5'>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}><i class="bi bi-chevron-compact-left"></i></button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => setCurrentPage(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}><i class="bi bi-chevron-compact-right"></i></button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
