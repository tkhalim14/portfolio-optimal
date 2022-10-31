import './style.css';
import React from 'react';
import PathfinderVisualizer from './PathfinderVisualizer/PathfinderVisualizer.js';

function AIPathFinder() {

  return (
    <>
    <div className="PathFinderRoot">
      <PathfinderVisualizer/>
    </div>
    </>
  );
}

export default AIPathFinder;
