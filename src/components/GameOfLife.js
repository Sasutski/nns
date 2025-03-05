// nns/src/components/GameOfLife.js
import { useEffect, useRef, useState } from 'react';

const GameOfLife = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  const isDarkMode = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleThemeChange = () => {
      // Force a re-render when theme changes
      setDimensions(prev => ({ ...prev }));
    };

    handleResize(); // Set initial dimensions
    
    window.addEventListener('resize', handleResize);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(handleThemeChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeListener(handleThemeChange);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const resolution = 10; // Adjusted resolution for better performance
    const cols = Math.floor(width / resolution);
    const rows = Math.floor(height / resolution);

    let grid = buildGrid();
    let animationFrameId;
    let lastTime = 0;
    const fps = 10; // Target frames per second

    function buildGrid() {
      return new Array(cols).fill(null)
        .map(() => new Array(rows).fill(null)
          .map(() => Math.random() > 0.8 ? 1 : 0)); // Sparse initial population
    }

    function update(time) {
      if (time - lastTime >= 1000 / fps) {
        grid = nextGen(grid);
        render(grid);
        lastTime = time;
      }
      animationFrameId = requestAnimationFrame(update);
    }

    function nextGen(grid) {
      const nextGen = grid.map(arr => [...arr]);

      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];
          let numNeighbors = 0;
          for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
              if (i === 0 && j === 0) {
                continue;
              }
              const x_cell = col + i;
              const y_cell = row + j;

              if (x_cell >= 0 && y_cell >= 0 && x_cell < cols && y_cell < rows) {
                const currentNeighbor = grid[x_cell][y_cell];
                numNeighbors += currentNeighbor;
              }
            }
          }

          if (cell === 1 && numNeighbors < 2) {
            nextGen[col][row] = 0;
          } else if (cell === 1 && numNeighbors > 3) {
            nextGen[col][row] = 0;
          } else if (cell === 0 && numNeighbors === 3) {
            nextGen[col][row] = 1;
          }
        }
      }
      return nextGen;
    }

    function render(grid) {
      ctx.clearRect(0, 0, width, height);
      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];
          ctx.beginPath();
          ctx.rect(col * resolution, row * resolution, resolution, resolution);
          if (isDarkMode()) {
            ctx.fillStyle = cell ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.02)';
          } else {
            ctx.fillStyle = cell ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.03)';
          }
          ctx.fill();
        }
      }
    }

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <canvas 
      ref={canvasRef} 
      width={dimensions.width} 
      height={dimensions.height} 
      className="absolute top-0 left-0 w-full h-full z-0" 
    />
  );
};

export default GameOfLife;