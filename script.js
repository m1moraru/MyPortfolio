

// JavaScript to change text with typing effect
 const roleElement = document.getElementById('role');
 const caretElement = document.getElementById('caret');
 const texts = ["I am Developer", "I am UX Designer"];
 let currentIndex = 0;
 let textIndex = 0;
 let isDeleting = false;
 const typingSpeed = 100; // Speed of typing
 const flashDuration = 600; // Duration of caret flashing

 function typeEffect() {
     const currentText = texts[currentIndex].slice(4); // Remove "I am " from the start
     const displayText = `I am ${currentText.slice(0, textIndex)}`;
     
     roleElement.firstChild.textContent = displayText; // Update text

     if (isDeleting) {
         textIndex--;
         if (textIndex < 0) {
             isDeleting = false;
             currentIndex = (currentIndex + 1) % texts.length;
             textIndex = 0; // Reset textIndex for the new text

             // Flash the caret twice before starting to delete
             caretElement.style.animation = `flash-caret ${flashDuration}ms step-end 2`; // Flash twice
             caretElement.style.visibility = 'visible'; // Ensure caret is visible
             setTimeout(() => {
                 caretElement.style.animation = 'none'; // Stop flashing after 2 flashes
                 caretElement.style.visibility = 'hidden'; // Hide caret during deletion
                 setTimeout(typeEffect, 200); // Short delay before starting to delete
             }, flashDuration); // Duration of flashing phase
         } else {
             setTimeout(typeEffect, typingSpeed);
         }
     } else {
         textIndex++;
         if (textIndex > currentText.length) {
             // Finish typing phase and prepare for flashing
             caretElement.style.visibility = 'visible';
             setTimeout(() => {
                 // Flash the caret twice before starting to delete
                 caretElement.style.animation = `flash-caret ${flashDuration}ms step-end 2`; // Flash twice
                 setTimeout(() => {
                     caretElement.style.animation = 'none'; // Stop flashing after 2 flashes
                     caretElement.style.visibility = 'hidden'; // Hide caret during deletion
                     isDeleting = true;
                     setTimeout(typeEffect, 200); // Short delay before starting to delete
                 }, flashDuration); // Duration of flashing phase
             }, 1000); // Delay before flashing starts
         } else {
             setTimeout(typeEffect, typingSpeed);
         }
     }

     // Apply blinking effect only during typing
     if (!isDeleting && textIndex <= currentText.length) {
         caretElement.style.visibility = 'visible';
         caretElement.style.animation = 'blink-caret 0.75s step-end infinite';
     }
 }

 typeEffect(); // Initial call
 

document.addEventListener('DOMContentLoaded', function() {
  const skillLevels = document.querySelectorAll('.skill-level');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const skillLevel = entry.target;
              const skillWidth = skillLevel.getAttribute('data-skill');
              skillLevel.style.width = skillWidth;
              observer.unobserve(skillLevel); // Stop observing once animation is triggered
          }
      });
  }, {
      threshold: 0.2 // Adjust this value based on when you want the animation to start
  });

  skillLevels.forEach(skill => {
      observer.observe(skill);
  });
});

document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');

  // Separate delay values for cursor and cursor-dot
  const cursorDelay = 1; // Delay for the cursor
  const dotDelay = 2;   // Delay for the cursor-dot (more delayed)

  let mouseX = e.clientX;
  let mouseY = e.clientY;

  let cursorX = parseFloat(cursor.style.left) || 0;
  let cursorY = parseFloat(cursor.style.top) || 0;
  let cursorDotX = parseFloat(cursorDot.style.left) || 0;
  let cursorDotY = parseFloat(cursorDot.style.top) || 0;

  function animate() {
      // Update the cursor position with its delay
      cursorX += (mouseX - cursorX) / cursorDelay;
      cursorY += (mouseY - cursorY) / cursorDelay;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      // Update the cursor-dot position with its delay
      cursorDotX += (mouseX - cursorDotX) / dotDelay;
      cursorDotY += (mouseY - cursorDotY) / dotDelay;
      cursorDot.style.left = `${cursorDotX}px`;
      cursorDot.style.top = `${cursorDotY}px`;

      requestAnimationFrame(animate);
  }

  animate();
});

function toggleEducation() {
  var educationSections = document.querySelectorAll('.edex-div');
  educationSections.forEach(function(section) {
      if (section.style.display === 'none' || section.style.display === '') {
          section.style.display = 'block';
      } else {
          section.style.display = 'none';
      }
  });
}

//media query 







