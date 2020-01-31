;(() => {
  const input = document.querySelector('.js-input');
  const paragraph = document.getElementsByClassName('js-paragraph');

  const headingsObserver = new Observable;

  input.addEventListener('keyup', e => {
    headingsObserver.notify(e.target.value);
  });

  for (let i = 1; i <= paragraph.length; i++) {
    const update = text => document.querySelector(`.js-p${i}`).textContent = text;
    headingsObserver.subscribe(update);

    document.querySelector(`.js-subscribe-p${i}`).addEventListener('click', e => {
      headingsObserver.subscribe(update)
      headingsObserver.notify();
    });

    document.querySelector(`.js-unsubscribe-p${i}`).addEventListener('click', e => {
      headingsObserver.unsubscribe(update)
    });

  }
})();