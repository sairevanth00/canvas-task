const blockData = [
  { id: '1', type: 'blockA', label: 'Block A' },
  { id: '2', type: 'blockB', label: 'Block B' },
];

export default function BlockPanel() {
  const handleDragStart = (event, block) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(block));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="block-panel">
      <h3>Blocks</h3>
      {blockData.map((block) => (
        <div
          key={block.id}
          className="block-item"
          draggable
          onDragStart={(e) => handleDragStart(e, block)}
        >
          {block.label}
        </div>
      ))}
    </div>
  );
}