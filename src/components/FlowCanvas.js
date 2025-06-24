import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import FlowCanvasInner from './FlowCanvasInner';

export default function FlowCanvas() {
  return (
    <ReactFlowProvider>
      <FlowCanvasInner />
    </ReactFlowProvider>
  );
}