// // File: App.jsx
// import './index.css';
// import React, { useCallback, useState, useEffect } from 'react';
// import ReactFlow, {
//   addEdge,
//   Background,
//   Controls,
//   MiniMap,
//   useNodesState,
//   useEdgesState,
//   ReactFlowProvider,
// } from 'reactflow';
// import 'reactflow/dist/style.css';
// import { Handle, Position } from 'reactflow';

// // import CustomNode from './CustomNode';
// // import ContextMenu from './ContextMenu';
// // import FlowCanvas from './components/FlowCanvas';
// // import BlockPanel from './components/BlockPanel';

// const BlockPanel = ()=> {
//   const handleDragStart = (event, block) => {
//     event.dataTransfer.setData('application/reactflow', JSON.stringify(block));
//     event.dataTransfer.effectAllowed = 'move';
//   };

//   return (
//     <div className="block-panel">
//       <h3>Blocks</h3>
//       {blockData.map((block) => (
//         <div
//           key={block.id}
//           className="block-item"
//           draggable
//           onDragStart={(e) => handleDragStart(e, block)}
//         >
//           {block.label}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="app-container">
//       <FlowCanvas />
//       <BlockPanel />
//     </div>
//   );
// }

// // File: components/BlockPanel.jsx
// // import React from 'react';

// const blockData = [
//   { id: '1', type: 'blockA', label: 'Block A' },
//   { id: '2', type: 'blockB', label: 'Block B' },
// ];

// // export default 


// // File: components/FlowCanvas.jsx


// const nodeTypes = {
//   blockA: CustomNode,
//   blockB: CustomNode,
// };

// let id = 0;
// const getId = () => `node_${id++}`;

// function FlowCanvasInner() {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//   const [contextMenu, setContextMenu] = useState(null);

//   const onConnect = useCallback(
//     (params) => {
//       const sourceNode = nodes.find((n) => n.id === params.source);
//       const targetNode = nodes.find((n) => n.id === params.target);

//       console.log('SRCNODE: ',sourceNode, 'TARNODE: ', targetNode)

//       if (sourceNode?.type === 'blockA' && targetNode?.type === 'blockB') {
//         setEdges((eds) => addEdge(params, eds));
//       } else {
//         alert('Invalid connection! Only Block A to Block B allowed.');
//       }
//     },
//     [nodes, setEdges]
//   );

//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();
//       const reactFlowBounds = event.target.getBoundingClientRect();
//       const data = JSON.parse(event.dataTransfer.getData('application/reactflow'));
//       const position = {
//         x: event.clientX - reactFlowBounds.left,
//         y: event.clientY - reactFlowBounds.top,
//       };
//       const newNode = {
//         id: getId(),
//         type: data.type,
//         position,
//         data: { label: data.label },
//       };
//       setNodes((nds) => nds.concat(newNode));
//     },
//     [setNodes]
//   );

//   const onContextMenu = useCallback((event, node) => {
//     event.preventDefault();
//     setContextMenu({ x: event.clientX, y: event.clientY });
//   }, []);

//   return (
//     <div
//       className="flow-canvas"
//       onDrop={onDrop}
//       onDragOver={(e) => e.preventDefault()}
//     >
//       <ReactFlow
//         nodes={nodes.map((node) => ({
//           ...node,
//           data: {
//             ...node.data,
//             onContextMenu: (e) => onContextMenu(e, node),
//           },
//         }))}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         nodeTypes={nodeTypes}
//         fitView
//       >
//         <MiniMap />
//         <Controls />
//         <Background />
//       </ReactFlow>
//       {contextMenu && <ContextMenu x={contextMenu.x} y={contextMenu.y} onClose={() => setContextMenu(null)} />}
//     </div>
//   );
// }

// function FlowCanvas() {
//   return (
//     <ReactFlowProvider>
//       <FlowCanvasInner />
//     </ReactFlowProvider>
//   );
// }

// // File: components/CustomNode.jsx
// // import React from 'react';

// function CustomNode({ data, type }) {
//   return (
//     <div className={`custom-node ${type}`} onContextMenu={data.onContextMenu}>
//       {data.label}
//       <Handle type="target" position={Position.Top} />
//       <Handle type="source" position={Position.Bottom} />
//     </div>
//   );
// }

// // File: components/ContextMenu.jsx
// // import React, { useEffect } from 'react';

// function ContextMenu({ x, y, onClose }) {
//   useEffect(() => {
//     const handleClick = () => onClose();
//     document.addEventListener('click', handleClick);
//     return () => document.removeEventListener('click', handleClick);
//   }, [onClose]);

//   return (
//     <div className="context-menu" style={{ top: y, left: x }}>
//       Hello World
//     </div>
//   );
// }

// // File: styles.css

import './index.css';
import FlowCanvas from './components/FlowCanvas';
import BlockPanel from './components/BlockPanel';

export default function App() {
  return (
    <div className="app-container">
      <FlowCanvas />
      <BlockPanel />
    </div>
  );
}
