import { fromEvent, merge } from 'rxjs';
import { sample, mapTo } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/sample
// Example 3: Distinguish between drag and click

const listener = merge(
  fromEvent(document, 'mousedown').pipe(mapTo(false)),
  fromEvent(document, 'mousemove').pipe(mapTo(true))
)
  .pipe(sample(fromEvent(document, 'mouseup')))
  .subscribe((isDragging) => {
    console.log('Were you dragging?', isDragging);
  });
