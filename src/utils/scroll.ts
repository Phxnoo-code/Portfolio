/**
 * Smoothly scrolls to an element by element ID.
 * 
 * @param elementId Target HTML element ID
 * @param offset Header height offset in pixels
 */
export function scrollToSection(elementId: string, offset: number = 80): void {
  const targetId = elementId.replace(/^#/, '');
  const element = document.getElementById(targetId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

/**
 * Smoothly scrolls to the top of the window.
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
