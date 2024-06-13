import React, { useState, useEffect } from 'react';

const API_URL = 'https://random.api.com/items';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}?page=${page}`);
      const data = await response.json();
      setItems(prevItems => [...prevItems, ...data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default ItemList;
