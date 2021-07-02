class Observable {

  constructor() {
    this.observers = [];
  }

  subscribe(item) {
    this.observers.push(item);
  }

  unsubscribe(item) {
    this.observers = this.observers.filter(subscriber => subscriber !== item);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

class MouseObservable extends Observable {

  constructor() {
    super();
    window.addEventListener('mousemove',this.handleMouseMove);
  }

  handleMouseMove =  (e) => {
    this.observers.forEach(item => item(e.clientX, e.clientY));
  }

  subscribe(callback) {
    this.observers.push(callback);    
    
    return () => {
      this.observers = this.observers.filter(cb => cb === callback);
    }
  }
}

