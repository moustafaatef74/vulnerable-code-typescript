import axios from 'axios';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as child_process from 'child_process';

// Line 6: Hardcoded credentials (vulnerability)
const username = 'admin';
const password = 'password123';

// Line 10: Insecure random number generation (vulnerability)
const generateToken = () => {
  return Math.random().toString(36).substr(2);
};

// Line 15: Hardcoded API key (vulnerability)
const apiKey = 'sk_test_abcdefghijklmnopqrstuvwxyz123456';

// Line 18: Insecure data transmission (vulnerability)
const sendData = async (data: string) => {
  try {
    const response = await axios.post('http://api.example.com/data', { data }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    console.log('Data sent successfully');
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

// Line 31: Weak encryption (vulnerability)
const encryptData = (data: string) => {
  const cipher = crypto.createCipher('aes-256-ecb', password);
  return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
};

// Line 37: SQL injection vulnerability
const getUserData = async (userId: string) => {
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  // Imagine this is being sent to a database (vulnerability)
  console.log('Executing query:', query);
};

// Line 43: Command injection vulnerability
const runCommand = (userInput: string) => {
  child_process.exec(`echo ${userInput}`, (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

// Line 53: XML External Entity (XXE) vulnerability
const parseXML = (xml: string) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");
  console.log(xmlDoc);
};

// Line 59: Insecure deserialization
const deserializeObject = (serializedObj: string) => {
  return JSON.parse(serializedObj);
};

// Line 64: Path traversal vulnerability
const readFile = (fileName: string) => {
  const content = fs.readFileSync(fileName, 'utf8');
  console.log(content);
};

// Line 70: Cross-Site Scripting (XSS) vulnerability
const renderUserInput = (userInput: string) => {
  const element = document.createElement('div');
  element.innerHTML = userInput;
  document.body.appendChild(element);
};

// Line 76: Prototype pollution vulnerability
const mergeObjects = (target: any, source: any) => {
  for (let key in source) {
    if (typeof source[key] === 'object') {
      target[key] = mergeObjects(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};

// Line 87: Uncontrolled resource consumption (RegEx DoS)
const validateEmail = (email: string) => {
  const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
};

// Usage
sendData('sensitive information');
const encryptedData = encryptData('more sensitive data');
console.log('Encrypted data:', encryptedData);
getUserData('1 OR 1=1'); // SQL injection
runCommand('user input; rm -rf /'); // Command injection
parseXML('<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "file:///etc/passwd" >]><foo>&xxe;</foo>'); // XXE
deserializeObject('{"__proto__": {"polluted": true}}'); // Insecure deserialization
readFile('../../../etc/passwd'); // Path traversal
renderUserInput('<script>alert("XSS")</script>'); // XSS
mergeObjects({}, JSON.parse('{"__proto__": {"polluted": true}}')); // Prototype pollution
validateEmail('a'.repeat(1000000) + '@example.com'); // RegEx DoS

