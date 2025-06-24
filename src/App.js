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
