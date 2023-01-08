import { useCallback, useRef } from 'react';

export function useCallbackRef<T extends Function>(callback: T, deps: ReadonlyArray<unknown>) {
  const actualCallback = useCallback(callback, deps);
  const callbackRef = useRef(actualCallback);
  callbackRef.current = actualCallback;
  return callbackRef;
}
