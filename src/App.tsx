import Home from '@/pages/Home';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

/**
 * App Entry Root Component
 * Wraps Home page with ErrorBoundary error protection.
 */
export function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
