import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const TileLayout: React.FC = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 1, h: 2 },
    { i: 'c', x: 0, y: 2, w: 2, h: 2 },
    { i: 'd', x: 0, y: 4, w: 2, h: 2 },
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      rowHeight={30}
      width={1200}
      isResizable={true}
      isDraggable={true}
    >
      <div key="a" style={{ border: '1px solid #ccc', padding: '20px' }}>
        Tile A
      </div>
      <div key="b" style={{ border: '1px solid #ccc', padding: '20px' }}>
        Tile B
      </div>
      <div key="c" style={{ border: '1px solid #ccc', padding: '20px' }}>
        Tile C
      </div>
      <div key="d" style={{ border: '1px solid #ccc', padding: '20px' }}>
        Tile D
      </div>
    </ResponsiveGridLayout>
  );
};

export default TileLayout;
