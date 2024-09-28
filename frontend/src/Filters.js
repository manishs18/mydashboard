import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [year, setYear] = useState('');
  const [topic, setTopic] = useState('');
  const [sector, setSector] = useState('');
  const [region, setRegion] = useState('');
  const [source, setSource] = useState('');
  const [pestle, setPestle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ year, topic, sector, region, source, pestle });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Filters</h2>
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sector"
        value={sector}
        onChange={(e) => setSector(e.target.value)}
      />
      <input
        type="text"
        placeholder="Region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="PESTLE"
        value={pestle}
        onChange={(e) => setPestle(e.target.value)}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filters;
