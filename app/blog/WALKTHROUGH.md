---
title: "Web Application Pentest: Kentapay"
description: "A scoped vulnerability assessment identifying internal IP disclosures and missing security headers."
tags: ["Bug Bounty", "Web Pentest", "Recon", "Burp Suite"]
platform: "Independent Assessment"
---
**Domains Assessed:**

[[swivel.kentapay.com]](http://swivel.kentapay.com)

[[swivel-checkout.kentapay.com]](http://swivel-checkout.kentapay.com)

[[swivel-api.kentapay.com]](http://swivel-api.kentapay.com)

**RECON:**

1.  Dns and basic information Gathering

![](/media-original/walkthrough/image4.png)

2.  Port Scanning

> ![](/media-original/walkthrough/image2.png)
>
> There are no database ports exposed which is pretty good

I used **nikto** to scan for known vulnerabilities:

![](/media-original/walkthrough/image5.png)

**Findings**: The anti-clickjacking X-Frame-Options header is not
present hence could hijack user actions

**Recommendation** : The x-frame option should be denied

**WEB ENUMERATION:**

**Directory brute forcing:**

In this phase i am going to use the gobuster command

![](/media-original/walkthrough/image7.png)

Server kept returning HTTP 200 for non-existing directories

Endpoints:

1.  /assets - redirects to an internal ip (INTERNAL IP EXPOSURE)
    [[https://192.168.10.156:8001/assets/]](https://192.168.10.156:8001/assets/)\]

**SSL CONFIGURATIONS:**

![](/media-original/walkthrough/image3.png)

The server enforces strong TLS

**INTERCEPT REQUESTS USING BURP:**

Filling Dummy data

![](/media-original/walkthrough/image6.png)

**captured HTTP request in Burp**

![](/media-original/walkthrough/image1.png)

\*\*\*swivel-checkout.kentapay.com

The **/waiting** endpoint is accessible without authentication or
session cookies.

Modification on the requests did not yield anything

**Security Observations:**

Strong TLS configuration (TLS 1.2 with secure ciphers)

Minimal exposed ports (80 & 443 only)

Use of CSRF tokens

Encrypted transaction payloads

**Recommendations:**

Implement security headers

Fix internal IP exposure

Enforce strict access control

Validate all endpoints consistently

**CONCLUSION:**

I did not identify any critical exploitable vulnerabilities, but I found
several weaknesses in access control, information disclosure, and
security headers.
