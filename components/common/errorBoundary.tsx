import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  error: unknown;
}

/**
 * コンポーネントのエラーをキャッチし、エラーメッセージを表示する
 * @param fallback カスタムエラーコンポーネント
 */
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  render(): React.ReactNode {
    const { fallback, children } = this.props;
    const { error } = this.state;

    if (error) {
      console.warn(error);

      // fallbackが指定されていれば、優先的に表示
      if (fallback) {
        return fallback;
      }

      // その他のエラーを一括表示
      return (
        <span className="inline w-full text-center">エラーが発生しました</span>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
