# use-auto-callback-ref
An custom `useCallback` hook which returns a continuously updating ref object.
This means the callback ref will always be the latest function.
This can be useful for things like event handlers so you don't need to unsubscribe/resubscribe each time the callback updates.

## Usage
```js
import { useCallbackRef } from 'use-auto-callback-ref';

const ref = useCallbackRef(() => {
}, []);

// this is just an example
useEffect(() => {
  // in this case if we were using a normal callback
  // we would have to unsubscribe and re-subscribe each time the handler updates
  // however with a callback ref we can simply call the function contained in the
  // ref, which will always be the latest one and we only have to subscribe once
  return emitter.subscribe(() => {
    ref.current();
  });
}, []);
```