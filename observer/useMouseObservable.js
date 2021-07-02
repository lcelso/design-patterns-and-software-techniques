;(() => {
  const mouseObserver = new MouseObservable;

  mouseObserver.subscribe((x, y) => {
    const circle = document.querySelector('.circle');
     window.setTimeout(() => {
       circle.style.transform = `translate(${x}px, ${y}px)`;
     }, 20);
  });

  mouseObserver.subscribe((x, y) => {
    const board = document.querySelector('.mouse-position .position');
    board.innerHTML = `
      <div>
         <div>ClientX: ${x}</div>
         <div>ClientY: ${y}</div>
      </div>
    `
  })
})();