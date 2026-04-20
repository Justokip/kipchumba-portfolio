---
title: "HTB Starting Point: Tier 1 Walkthrough"
description: "Exploiting SQL injection, misconfigured SMB shares, and AWS S3 buckets."
tags: ["HTB", "SQLi", "Responder", "AWS S3", "LFI"]
platform: "HackTheBox"
---

**1.1 INTRODUCTION**

**1.2 APPOINTMENT**

**Task 1**

What does the acronym SQL stand for?

**Answer: Structured Query Language**

**Task 2**

What is one of the most common types of SQL vulnerabilities?

**Answer: SQL Injection**

**Task 3**

What is the 2021 OWASP Top 10 classification for this vulnerability?

**Answer: A03:2021-Injection**

**Task 4**

What does Nmap report as the service and version that are running on
port 80 of the target?

**Answer: Apache httpd 2.4.38 ((Debian))**

![](/kipchumba-portfolio/media-original/tier1/image13.png)

**Task 5**

What is the standard port used for the HTTPS protocol?

**Answer: 443**

**Task 6**

What is a folder called in web-application terminology?

**Answer: Directory**

**Task 7**

What is the HTTP response code is given for \'Not Found\' errors?

**Answer: 404**

**Task 8**

Gobuster is one tool used to brute force directories on a webserver.
What switch do we use with Gobuster to specify we\'re looking to
discover directories, and not subdomains?

**Answer: dir**

**Task 9**

What single character can be used to comment out the rest of a line in
MySQL?

**Answer: \#**

**Task 10**

If user input is not handled carefully, it could be interpreted as a
comment. Use a comment to login as admin without knowing the password.
What is the first word on the webpage returned?

**Answer: Congratulations**

![](/kipchumba-portfolio/media-original/tier1/image35.png)

Submit root flag

**Answer: e3d0796d002a446c0e622226f42e9672**

![](/kipchumba-portfolio/media-original/tier1/image35.png)

**Pawned💪**

![](/kipchumba-portfolio/media-original/tier1/image32.png)

**1.3 SEQUEL**

**Task 1**

During our scan, which port do we find serving MySQL?

**Answer: 3306**

![](/kipchumba-portfolio/media-original/tier1/image4.png)

**Task 2**

What community-developed MySQL version is the target running?

**Answer: MariaDB**

![](/kipchumba-portfolio/media-original/tier1/image21.png)

**Task 3**

When using the MySQL command line client, what switch do we need to use
in order to specify a login username?

**Answer: -u**

**Task 4**

Which username allows us to log into this MariaDB instance without
providing a password?

**Answer: root**

**Task 5**

In SQL, what symbol can we use to specify within the query that we want
to display everything inside a table?

**Answer: \***

**Task 6**

In SQL, what symbol do we need to end each query with?

**Answer: ;**

**Task 7**

There are three databases in this MySQL instance that are common across
all MySQL instances. What is the name of the fourth that\'s unique to
this host?

**Answer: htb**

![](/kipchumba-portfolio/media-original/tier1/image1.png)

Submit root flag

**Answer: 7b4bec00d1a39e3dd4e021ec3d915da8**

![](/kipchumba-portfolio/media-original/tier1/image28.png)

**Pawned🤓**

![](/kipchumba-portfolio/media-original/tier1/image33.png)

**1.4 CROCODILE**

**Task 1**

What Nmap scanning switch employs the use of default scripts during a
scan?

**Answer: -sC**

**Task 2**

What service version is found to be running on port 21?

**Answer: vsftpd 3.0.3**

![](/kipchumba-portfolio/media-original/tier1/image22.png)

**Task 3**

What FTP code is returned to us for the \"Anonymous FTP login allowed\"
message?

**Answer: 230**

![](/kipchumba-portfolio/media-original/tier1/image22.png)

**Task 4**

After connecting to the FTP server using the ftp client, what username
do we provide when prompted to log in anonymously?

**Answer: anonymous**

**Task 5**

After connecting to the FTP server anonymously, what command can we use
to download the files we find on the FTP server?

**Answer: get**

**Task 6**

What is one of the higher-privilege sounding usernames in
\'allowed.userlist\' that we download from the FTP server?

**Answer: admin**

![](/kipchumba-portfolio/media-original/tier1/image19.png)

**Task 7**

What version of Apache HTTP Server is running on the target host?

**Answer: Apache httpd 2.4.41**

![](/kipchumba-portfolio/media-original/tier1/image8.png)

**Task 8**

What switch can we use with Gobuster to specify we are looking for
specific filetypes?

**Answer: -x**

![](/kipchumba-portfolio/media-original/tier1/image18.png)

**Task 9**

Which PHP file can we identify with directory brute force that will
provide the opportunity to authenticate to the web service?

**Answer: login.php**

![](/kipchumba-portfolio/media-original/tier1/image7.png)

Submit root flag

**Answer: c7110277ac44d78b6a9fff2232434d16**

**Authentication:**

![](/kipchumba-portfolio/media-original/tier1/image2.png)

**Root flag:**

![](/kipchumba-portfolio/media-original/tier1/image15.png)

**Pawned🥱**

![](/kipchumba-portfolio/media-original/tier1/image31.png)

**1.5 RESPONDER**

**Task 1**

When visiting the web service using the IP address, what is the domain
that we are being redirected to?

**Answer: unika.htb**

![](/kipchumba-portfolio/media-original/tier1/image23.png)

**Task 2**

Which scripting language is being used on the server to generate
webpages?

**Answer: php**

![](/kipchumba-portfolio/media-original/tier1/image16.png)

**Task 3**

What is the name of the URL parameter which is used to load different
language versions of the webpage?

**Answer: Page**

![](/kipchumba-portfolio/media-original/tier1/image12.png)

**Task 4**

Which of the following values for the \`page\` parameter would be an
example of exploiting a Local File Include (LFI) vulnerability:
\"french.html\", \"//10.10.14.6/somefile\",
\"../../../../../../../../windows/system32/drivers/etc/hosts\",
\"minikatz.exe\"

**Answer: ../../../../../../../../windows/system32/drivers/etc/hosts**

**Task 5**

Which of the following values for the \`page\` parameter would be an
example of exploiting a Remote File Include (RFI) vulnerability:
\"french.html\", \"//10.10.14.6/somefile\",
\"../../../../../../../../windows/system32/drivers/etc/hosts\",
\"minikatz.exe\"

**Answer: //10.10.14.6/somefile**

**Task 6**

What does NTLM stand for?

**Answer: New Technology LAN Manager**

**Explanation:** It comprises a group of security protocols designed for
Microsoft Windows. It employs a challenge-response mechanism to
authenticate clients and servers. However, Microsoft advises against
using NTLM for contemporary applications because of its insufficient
encryption.

**Task 7**

Which flag do we use in the Responder utility to specify the network
interface?

**Answer: -I**

![](/kipchumba-portfolio/media-original/tier1/image10.png)

**Task 8**

There are several tools that take a NetNTLMv2 challenge/response and try
millions of passwords to see if any of them generate the same response.
One such tool is often referred to as \`john\`, but the full name is
what?.

**Answer: john the Ripper**

**Getting the hash: with reponder**

![](/kipchumba-portfolio/media-original/tier1/image29.png)

**Task 9**

What is the password for the administrator user?

**Answer: badminton**

![](/kipchumba-portfolio/media-original/tier1/image14.png)

**Task 10**

We\'ll use a Windows service (i.e. running on the box) to remotely
access the Responder machine using the password we recovered. What port
TCP does it listen on?

**Answer: 5985**

![](/kipchumba-portfolio/media-original/tier1/image17.png)

Submit root flag

**Answer: ea81b7afddd03efaa0945333ed147fac**

![](/kipchumba-portfolio/media-original/tier1/image3.png)

**Flag:**

![](/kipchumba-portfolio/media-original/tier1/image5.png)

**Responder Pawned😎**

![](/kipchumba-portfolio/media-original/tier1/image30.png)

**1.6 THREE**

**Task 1**

How many TCP ports are open?

**Answer: 2**

![](/kipchumba-portfolio/media-original/tier1/image24.png)

**Task 2**

What is the domain of the email address provided in the \"Contact\"
section of the website?

**Answer: thetoppers.htb**

![](/kipchumba-portfolio/media-original/tier1/image26.png)

**Task 3**

In the absence of a DNS server, which Linux file can we use to resolve
hostnames to IP addresses in order to be able to access the websites
that point to those hostnames?

**Answer: /etc/hosts**

**Task 5**

Which service is running on the discovered sub-domain?

**Answer: Amazon s3**

![](/kipchumba-portfolio/media-original/tier1/image11.png)

**Task 6**

Which command line utility can be used to interact with the service
running on the discovered sub-domain?

**Answer: awscli**

![](/kipchumba-portfolio/media-original/tier1/image20.png)

**Task 7**

Which command is used to set up the AWS CLI installation?

**Answer: aws configure**

![](/kipchumba-portfolio/media-original/tier1/image25.png)

**Task 8**

What is the command used by the above utility to list all of the S3
buckets?

**Answer: aws s3 ls**

![](/kipchumba-portfolio/media-original/tier1/image27.png)

**Task 9**

This server is configured to run files written in what web scripting
language?

**Answer: php**

![](/kipchumba-portfolio/media-original/tier1/image6.png)

Submit root flag

**Answer:**

**Pawned**

![](/kipchumba-portfolio/media-original/tier1/image34.png)
