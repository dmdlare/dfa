// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Function to handle the scroll event and trigger the fade-in animation
  function handleScroll() {
    const sections = document.querySelectorAll(".fade-in");
    
    sections.forEach((section) => {
      if (isElementInViewport(section) && !section.classList.contains("fade-in-active")) {
        section.classList.add("fade-in-active");
      }
    });
  }
  
  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);
  
  // Initial check to see if any sections are in the viewport when the page loads
  handleScroll();
  