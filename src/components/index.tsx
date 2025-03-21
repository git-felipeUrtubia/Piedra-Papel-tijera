document.querySelectorAll('button').forEach((button) => {
    const div = document.createElement('div');
    const letters = button.textContent?.trim().split('') || [];
  
    const elements = (letter: string, index: number, array: string[]) => {
      const element = document.createElement('span');
      const part = index >= array.length / 2 ? -1 : 1;
      const position = index >= array.length / 2 ? array.length / 2 - index + (array.length / 2 - 1) : index;
      const move = position / (array.length / 2);
      const rotate = 1 - move;
  
      element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
      element.style.setProperty('--move', move.toString());
      element.style.setProperty('--rotate', rotate.toString());
      element.style.setProperty('--part', part.toString());
  
      div.appendChild(element);
    };
  
    letters.forEach(elements);
    button.innerHTML = div.outerHTML;
  
    button.addEventListener('mouseenter', () => {
      if (!button.classList.contains('out')) {
        button.classList.add('in');
      }
    });
  
    button.addEventListener('mouseleave', () => {
      if (button.classList.contains('in')) {
        button.classList.add('out');
        setTimeout(() => button.classList.remove('in', 'out'), 950);
      }
    });
  });  
   