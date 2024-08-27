import React from 'react';
import './Album.css';

function Album({ items, onItemClick }) {
  return (
    <div className="album">
      {items.map(item => (
        <div key={item.id} className="album-item" onClick={() => onItemClick(item)}>
          <img src={item.thumbnail} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Album;
