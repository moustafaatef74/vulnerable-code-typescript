# Intentionally Vulnerable Project

⚠️ **WARNING: This project contains numerous security vulnerabilities and should NEVER be used in a production environment.** ⚠️

## Purpose

This project is designed for educational purposes only. It demonstrates various security vulnerabilities commonly found in web applications. Use this code to learn about security issues, practice identifying vulnerabilities, and understand how to fix them.

## Vulnerability Categories

This project includes vulnerabilities from various categories, including but not limited to:

1. Injection Flaws (SQL, Command, XML)
2. Broken Authentication and Session Management
3. Sensitive Data Exposure
4. XML External Entities (XXE)
5. Broken Access Control
6. Security Misconfiguration
7. Cross-Site Scripting (XSS)
8. Insecure Deserialization
9. Using Components with Known Vulnerabilities
10. Insufficient Logging & Monitoring
11. Cross-Site Request Forgery (CSRF)
12. Server-Side Request Forgery (SSRF)
13. Insecure File Uploads
14. Insecure Direct Object References
15. Unvalidated Redirects and Forwards

## Project Structure and Vulnerabilities

### src/main.ts

This file contains various vulnerabilities including:
- Hardcoded credentials
- Insecure random number generation
- SQL injection
- Command injection
- XML External Entity (XXE) injection
- Path traversal
- Cross-Site Scripting (XSS)
- Prototype pollution
- Uncontrolled resource consumption (RegEx DoS)

### src/backend.ts

This file demonstrates server-side vulnerabilities such as:
- Insecure API endpoints
- Weak JWT implementation
- Broken authentication
- Sensitive data exposure
- Broken access control
- Security misconfiguration
- Insufficient logging & monitoring
- Insecure redirects
- Server-Side Request Forgery (SSRF)
- Insecure file uploads

### src/config.ts

This file contains:
- Exposed API keys and sensitive information
- Hardcoded database credentials
- Hardcoded encryption keys

### Dockerfile

The Dockerfile includes various misconfigurations and insecure practices:
- Use of an outdated base image
- Running as root
- Installing dependencies without version pinning
- Exposing sensitive ports
- Adding weak SSH keys
- Setting insecure permissions

### src/client.ts

This file showcases client-side vulnerabilities including:
- Cross-Site Scripting (XSS)
- Insecure use of postMessage
- Clickjacking vulnerability
- Cross-Site Request Forgery (CSRF)
- Insecure storage of sensitive data
- Insecure communication
- Usage of vulnerable libraries
- Insecure randomness
- Timing attack vulnerability
- DOM-based XSS

## Disclaimer

The authors and contributors of this project are not responsible for any misuse of this code. This project is provided "as is" without warranty of any kind, express or implied. Use at your own risk.

## Learning Resources

To learn more about web application security and how to properly secure your applications, please refer to the following resources:

- [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
- [SANS Institute](https://www.sans.org/)
- [Web Security Academy](https://portswigger.net/web-security)

Remember, the best way to learn about security is to practice secure coding from the start. Always keep security in mind when developing applications and stay updated on the latest security best practices.

