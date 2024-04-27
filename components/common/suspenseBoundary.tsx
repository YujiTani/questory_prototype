import { ReactNode, Suspense } from "react";
import ErrorBoundary from "./errorBoundary";
import { Loader } from "lucide-react";

type SuspenseBoundaryProps = {
  children: ReactNode;
  suspenseFallback?: ReactNode;
  errorFallback?: ReactNode;
};

/**
 * ErrorBoundary, Suspenseをまとめて指定したいときに使う
 * @param suspenseFallback Suspense用カスタムfallback
 * @param errorFallback ErrorBoundary用カスタムfallback
 */
function SuspenseBoundary({
  children,
  errorFallback,
  suspenseFallback = (
    <div className="flex items-center justify-center h-full">
      <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
    </div>
  ),
}: SuspenseBoundaryProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default SuspenseBoundary;
