import React, { ErrorInfo } from "react";

/**
 * 子要素でエラーが発生した際に取得し、その情報をコンソールログに出力する
 * エラーが発生したことはユーザーに知らせる
 */
export class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(): { hasError: boolean } {
    console.error("getDerivedStateFromError has been called.");
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>A fatal error has occurred.</h1>;
    }
    return <>{this.props.children}</>;
  }
}
