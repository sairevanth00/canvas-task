import { useEffect } from 'react';

export default function ContextMenu({ x, y, onClose }) {
  useEffect(() => {
    const handleClick = () => onClose();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [onClose]);

  return (
    <div className="context-menu" style={{ top: y, left: x }}>
      Hello World
    </div>
  );
}