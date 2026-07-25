import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Reusable ErrorBoundary Component
 * Catches JavaScript errors anywhere in child component tree and displays fallback UI.
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled application error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] w-full flex flex-col items-center justify-center p-8 text-center bg-surface/50 border border-status-error/20 rounded-xl space-y-4 font-sans my-8">
          <div className="p-3 rounded-full bg-status-error/10 text-status-error">
            <AlertTriangle size={32} />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-display font-bold text-text-primary">Something went wrong</h3>
            <p className="text-sm text-text-secondary max-w-md">
              An unexpected rendering error occurred. Try refreshing the component.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            leftIcon={<RefreshCw size={14} />}
            onClick={this.handleReset}
          >
            Reload Page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
