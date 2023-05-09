// document.querySelector("app-panel:nth-of-type(3)").resizable({handles: "e, w"});

// --------------------------------------------------------------------------------- //

// https://medium.com/@fbnlsr/how-to-get-rid-of-the-flash-of-unstyled-content-d6b79bf5d75f

// Helper function
let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.opacity = '1.0';
});

class AppContainer extends HTMLElement {
  constructor() {
    super();
    // You can add some logic here to initialize your element
  }
}

customElements.define("app-container", AppContainer);
