function adjustFontSize() {
    const screenWidth = window.innerWidth;
    const baseFontSize = 16; // Default font size
  
    // Define font sizes for different screen widths
    const fontSizes = {
      480: {
        h1: 28,
        h2: 24,
        h3: 20,
        h4: 18,
        h5: 16,
        h6: 14
      },
      768: {
        h1: 42,
        h2: 36,
        h3: 28,
        h4: 24,
        h5: 20,
        h6: 18
      },
      1024: {
        h1: 60,
        h2: 48,
        h3: 36,
        h4: 30,
        h5: 24,
        h6: 20
      },
      1200: {
        h1: 72,
        h2: 60,
        h3: 48,
        h4: 36,
        h5: 30,
        h6: 24
      }
    };
  
    // Loop through heading tags and set their font sizes based on screen width
    for (let i = 1; i <= 6; i++) {
      const headingTag = 'h' + i;
      const headingElement = document.getElementsByTagName(headingTag)[0];
  
      if (!headingElement) {
        continue;
      }
  
      let fontSize = baseFontSize; // Set default font size
  
      // Loop through font size object and check if the screen width is greater than the key
      for (let key in fontSizes) {
        if (screenWidth > key) {
          fontSize = fontSizes[key][headingTag];
        }
      }
  
      // Set the font size for the current heading element
      headingElement.style.fontSize = fontSize + 'px';
    }
  
    // Set the font size for the body element
    document.body.style.fontSize = baseFontSize + 'px';
  }
  
  // Call the adjustFontSize function on window resize and page load
  window.addEventListener('resize', adjustFontSize);
  window.addEventListener('load', adjustFontSize);