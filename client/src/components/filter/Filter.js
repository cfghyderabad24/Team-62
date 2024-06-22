import React from 'react';

const Filter = () => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // Perform search logic here (e.g., filter companies based on the search term)
    console.log('Searching for:', searchTerm);
  };

  return (
    <div style={styles.formContainer}>
      <div style={styles.formItem}>
        <label style={styles.label} htmlFor="mandatedByLaw">Mandated by law:</label>
        <select style={styles.select} name="mandatedByLaw" id="mandatedByLaw">
          <option value="">Choose</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>

      <div style={styles.formItem}>
        <label style={styles.label} htmlFor="year">Year:</label>
        <select style={styles.select} name="year" id="year">
          <option value="">Choose</option>
          <option value="2021-22">2021-22</option>
        </select>
      </div>

      <div style={styles.formItem}>
        <label style={styles.label} htmlFor="search">Search:</label>
        <div style={styles.searchContainer}>
          <input
            type="text"
            style={styles.searchInput}
            placeholder="Search companies..."
            onChange={handleSearch}
          />
          <button style={styles.searchButton}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

// Inline CSS styles
const styles = {
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  formItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '12px 20px', /* Increased padding for larger size */
    borderRadius: '25px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    minWidth: '250px', /* Adjusted minimum width for larger size */
    transition: 'transform 0.3s ease-in-out',
  },
  formItemHover: {
    transform: 'translateY(-5px)',
  },
  label: {
    marginRight: '10px',
    fontWeight: 'bold',
    color: '#333',
  },
  select: {
    flex: '1',
    padding: '10px', /* Increased padding for larger size */
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    fontSize: '16px', /* Adjusted font size for larger size */
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    flex: '1',
    padding: '10px', /* Increased padding for larger size */
    border: '1px solid #ccc',
    borderRadius: '5px 0 0 5px',
    fontSize: '16px', /* Adjusted font size for larger size */
  },
  searchButton: {
    padding: '10px 20px', /* Increased padding for larger size */
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    fontSize: '16px', /* Adjusted font size for larger size */
  },
  searchButtonHover: {
    backgroundColor: '#0056b3',
  }
};
