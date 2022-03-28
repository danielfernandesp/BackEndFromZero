function clock() {
    function hourToSeconds(seconds) {
      const data = new Date(seconds * 1000);
      return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
      });
    }
  
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;
  
    function clockStart() {
      timer = setInterval(function() {
        seconds++;
        clock.innerHTML = hourToSeconds(seconds);
      }, 1000);
    }
  
    document.addEventListener('click', function(e) {
      const el = e.target;
  
      if (el.classList.contains('reset')) {
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        clock.classList.remove('pause');
        seconds = 0;
      }
  
      if (el.classList.contains('start')) {
        clock.classList.remove('pause');
        clearInterval(timer);
        clockStart();
      }
  
      if (el.classList.contains('pause')) {
        clearInterval(timer);
        clock.classList.add('pause');
      }
    });
  }
  clock();