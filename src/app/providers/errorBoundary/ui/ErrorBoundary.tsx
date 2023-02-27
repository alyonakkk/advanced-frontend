import React, { Suspense, type ErrorInfo, type ReactNode } from "react";
import PageError from "@/widgets/pageError";

interface IErrorBoundary {
    children: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<IErrorBoundary, IErrorBoundaryState> {
    constructor (props: IErrorBoundary) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError (): IErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render (): ReactNode {
        if (this.state.hasError) {
            return <Suspense fallback={"loading..."}><PageError /></Suspense>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
