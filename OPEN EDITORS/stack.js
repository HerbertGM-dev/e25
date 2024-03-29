class Stack {
    constructor() {
      this.items = [];
      this.count = 0;
    }
  
    push(element) {
      this.items[this.count] = element;
      console.log(`${element} added to ${this.count}`);
      this.count += 1;
      return this.count - 1;
    }
  
    pop() {
      if (this.count === 0) return undefined;
      let deleteItem = this.items[this.count - 1];
      this.count -= 1;
      console.log(`${deleteItem} removed`);
      return deleteItem;
    }
  
    peek() {
      console.log(`Top element is ${this.items[this.count - 1]}`);
      return this.items[this.count - 1];
    }
  
    isEmpty() {
      console.log(this.count === 0 ? 'Stack is empty' : 'Stack is NOT empty');
      return this.count === 0;
    }
  
    size() {
      console.log(`${this.count} elements in stack`);
      return this.count;
    }
  
    printToHTML(elementId) {
      let str = '';
      for (let i = 0; i < this.count; i++) {
        str += this.items[i] + ' ';
      }
  
      document.getElementById(elementId).innerHTML = str;
  
      return str;
    }
  
    clear() {
      this.items = [];
      this.count = 0;
      console.log('Stack cleared');
    }
  }
  
  const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);

stack.peek();

stack.push(300);

stack.printToHTML("stackOutput");

stack.pop();
stack.pop();

stack.clear();

stack.printToHTML("stackOutput");

stack.size();

stack.isEmpty();
