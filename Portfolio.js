import React, { useState } from 'react';
import Album from '../components/Album';
import Popup from '../components/Popup';

const portfolioItems = [
  { id: 1, title: 'Project 1', thumbnail: 'https://via.placeholder.com/150', content: 'Description for project 1', image: 'https://via.placeholder.com/400x300' },
  { id: 2, title: 'Project 2', thumbnail: 'https://via.placeholder.com/150', content: 'Description for project 2', image: 'https://via.placeholder.com/400x300' },
  // Add more items as needed
];

function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="portfolio">
      <Album items={portfolioItems} onItemClick={handleItemClick} />
      {selectedItem && <Popup item={selectedItem} onClose={closePopup} />}
    </div>
  );
}

export default Portfolio;
