
# Start working in the main.js file.

## We will create a queue data structure.
A queue is just like an array, but we can only input elements from one side, and take them out the other side.
### It's a First In First Out data structure.
It looks like this:

---> [2, 3, 4] ---->

When we push "1" in the queue, the queue becomes:

---> [1, 2, 3, 4]-->

### Create a class called "Queue".
In the class, add the property this.storage = []; which will be our array.
We will add and remove elements from this array.
Add the methods:

add(elem)
- adds an element at the start of our internal array

pop()
- returns the last element of the queue, and removes it from our array.

look()
- returns the last element of the queue, but does not remove it from our array.

size()
- returns the size of our queue.

## We will now create a Deque data structure, which is just like a queue but we can add and remove items from both ends.

### Create a class called "Deque".
In the class, add the property this.storage = []; which will be our array.
We will add and remove elements from this array.
Add the methods:

addFirst(elem)
- adds an element at the start of our internal array. Tip: use array.unshift()

addLast(elem)
- adds an element at the end of our internal array

popFirst()
- returns the leftmost element of the deque, and removes it from our array. Tip: use array.shift();

popLast()
- returns the rightmost element of the deque, and removes it from our array.

lookFirst()
- returns the leftmost element of the deque, but does not remove it from our array.

lookLast()
- returns the rightmost element of the deque, but does not remove it from our array.

size()
- returns the size of our deque.





