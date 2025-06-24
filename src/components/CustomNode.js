import { Handle, Position } from 'reactflow';

export default function CustomNode({ data, type }) {
  return (
    <div className={`custom-node ${type}`} onContextMenu={data.onContextMenu}>
      {data.label}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}