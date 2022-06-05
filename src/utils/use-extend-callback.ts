import { DependencyList, useCallback } from 'react';

export function useExtendCallback<T, D extends (...args: any[]) => T>(
  handler: D,
  oldCallback: D | undefined,
  deps: DependencyList = []
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const newCallback = useCallback(handler, deps);
  return useCallback(
    (...args: any[]) => {
      newCallback(args);
      oldCallback && oldCallback(args);
    },
    [newCallback, oldCallback]
  );
}
