import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  useEffect(() => {
    drawChart();
  }, [data]);

  const drawChart = () => {
    // Clear existing SVG
    d3.select("#bar-chart").selectAll("*").remove();

    // Set dimensions and margins
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select("#bar-chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Prepare data
    const intensityData = data.map(d => ({
      title: d.title,
      intensity: d.intensity
    }));

    // Set x and y scales
    const x = d3.scaleBand()
      .domain(intensityData.map(d => d.title))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(intensityData, d => d.intensity)])
      .nice()
      .range([height, 0]);

    // Add x-axis
    svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Add y-axis
    svg.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y));

    // Add bars
    svg.selectAll(".bar")
      .data(intensityData)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.title))
      .attr("y", d => y(d.intensity))
      .attr("height", d => height - y(d.intensity))
      .attr("width", x.bandwidth());
  };

  return <div id="bar-chart"></div>;
};

export default BarChart;
