import React, { Component, ErrorInfo } from 'react';
import PageTransitionOverlay from './PageTransitionOverlay';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <PageTransitionOverlay />
          <div className="error-boundary text-white mt-96 flex justify-center items-center">
            <div>
              <h1 className="font-bold text-2xl">Something went wrong.</h1>
              <p className='mt-2'>We are sorry, but something went wrong. Please try again later.</p>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;