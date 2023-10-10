class loadingScreen extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
      * {
        padding: 0;
        margin: 0;
        font-family: "Teko", sans-serif;
      }
      #loading-bg {
        position:absolute;
        top:0;
        left:0;
        box-sizing: content-box;
        width: 100vw;
        height: 100vh;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
      }
      
      #loading-text {
        user-select:none;
        font-weight: bold;
        font-size: 48px;
        animation: blur 2s ease infinite;
      }
      
      @keyframes blur {
        0%{
          color: white;
          text-shadow: none;
        }
        50% {
          color: transparent;
          text-shadow: 0 0 4px white;
        }
        100% {
          color: white;
          text-shadow: none;
        }
      }
        
      </style>
      <div id="loading-bg">
      <h1 id="loading-text">NCC-MAIT</h1>
      </div>
      `;
  }
}

customElements.define("loading-screen", loadingScreen);
