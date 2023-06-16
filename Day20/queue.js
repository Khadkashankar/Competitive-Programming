class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {

        this.items.push(element);
        console.log(element +" is inserted");
    }
  
    dequeue() {
      return console.log(this.items.shift()+" is deleted");
    }
  
    peek() {
      if (!this.isEmpty()) {
        return console.log("The first element of queue is " + this.items[0]);
      }
      return null;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return console.log("The size of queue is " +this.items.length);
    }
  
    print() {
      console.log("The elements in queue are" + this.items.toString());
    }
  }
  
  const queue = new Queue();
  console.log(queue.isEmpty());
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.size());
  queue.print();
  console.log(queue.dequeue());
  console.log(queue.peek());
  queue.print();