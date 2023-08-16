const animateElement = (element) => {
  let lastAnimation = '';
  
  const getRandomAnimation = () => {
    const animations = [
      'rotate',
      'scale',
      'translateX',
      'translateY',
      'skewX',
      'skewY'
    ];

    let randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    
    while (randomAnimation === lastAnimation) {
      randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    }
    
    lastAnimation = randomAnimation;
    
    return randomAnimation;
  };

  const animate = () => {
    const animationType = getRandomAnimation();
    const animationValue = Math.floor(Math.random() * 100);

    switch (animationType) {
      case 'rotate':
        element.style.transform = `rotate(${animationValue}deg)`;
        break;
      case 'scale':
        element.style.transform = `scale(${1 + animationValue / 100})`;
        break;
      case 'translateX':
        element.style.transform = `translateX(${animationValue}px)`;
        break;
      case 'translateY':
        element.style.transform = `translateY(${animationValue}px)`;
        break;
      case 'skewX':
        element.style.transform = `skewX(${animationValue}deg)`;
        break;
      case 'skewY':
        element.style.transform = `skewY(${animationValue}deg)`;
        break;
      default:
        break;
    }
    
    setTimeout(() => {
      element.style.transform = '';
      animate();
    }, 100);
  };

  animate();
};

// Example usage:
const element = document.querySelectorAll('.element');

element.forEach(e => {
    animateElement(e); 
});