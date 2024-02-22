export class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestination) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestination);
    destinationElement.append(element);
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
