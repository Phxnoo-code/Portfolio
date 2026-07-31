import Home from '@/pages/Home';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { LanguageProvider } from '@/context/LanguageContext';

/**
 * App Entry Root Component
 * Wraps Home page with ErrorBoundary error protection & LanguageProvider.
 */
export function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
