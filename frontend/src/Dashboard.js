import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from './Filters';
import BarChart from './BarChart';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/api/insights/');
    setData(response.data);
    setFilteredData(response.data); // Initialize with all data
  };

  const handleFilter = async (filters) => {
    const response = await axios.get('http://localhost:8000/api/insights/', { params: filters });
    setFilteredData(response.data);
  };

  return (
    <div>
      <Filters onFilter={handleFilter} />
      <BarChart data={filteredData} />
    </div>
  );
};

export default Dashboard;
