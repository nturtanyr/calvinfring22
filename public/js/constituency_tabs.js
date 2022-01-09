document.addEventListener('DOMContentLoaded', () => {
    console.log("running tab attachment")
    // Get all "tab" elements
    const $tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'), 0);
    
    // Check if there are any tabs
    if ($tabs.length > 0) {
  
      // Add a click event on each of them
      $tabs.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Get all tabs and set to not active
          const $tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'), 0);
          $tabs.forEach( el => {
              el.classList.remove('is-active');
          });
          // Get all tab contents and hide them
          const $tabcontents = Array.prototype.slice.call(document.querySelectorAll('.tabcontent'), 0);
          $tabcontents.forEach( fl => {
            fl.classList.remove('is-visible');
            fl.classList.add('is-hidden');
          });

          // Add the "is-active" class and switch between "hidden" and "visible" on active tab content
          el.classList.toggle('is-active');
          $target.classList.remove('is-hidden');
          $target.classList.add('is-visible');
  
        });
      });
    }
  
  });