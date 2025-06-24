import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import ContextMenu from './ContextMenu';
import { useCallback, useState } from 'react';
import CustomNode from './CustomNode';

const nodeTypes = {
  blockA: CustomNode,
  blockB: CustomNode,
};

let id = 0;
const getId = () => `node_${id++}`;

export default function FlowCanvasInner() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [contextMenu, setContextMenu] = useState(null);

  const onConnect = useCallback(
    (params) => {
      const sourceNode = nodes.find((n) => n.id === params.source);
      const targetNode = nodes.find((n) => n.id === params.target);

      if (sourceNode?.type === 'blockA' && targetNode?.type === 'blockB') {
        setEdges((eds) => addEdge(params, eds));
      } else {
        alert('Invalid connection! Only Block A to Block B allowed.');
      }
    },
    [nodes, setEdges]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = event.target.getBoundingClientRect();
      const data = JSON.parse(event.dataTransfer.getData('application/reactflow'));
      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };
      const newNode = {
        id: getId(),
        type: data.type,
        position,
        data: { label: data.label },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  const onContextMenu = useCallback((event, node) => {
    event.preventDefault();
    setContextMenu({ x: event.clientX, y: event.clientY });
  }, []);

  return (
    <div
      className="flow-canvas"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          data: {
            ...node.data,
            onContextMenu: (e) => onContextMenu(e, node),
          },
        }))}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      {contextMenu && <ContextMenu x={contextMenu.x} y={contextMenu.y} onClose={() => setContextMenu(null)} />}
    </div>
  );
}