---
title: "HTB Starting Point: Tier 0 Walkthrough"
description: "Mastering the basics of enumeration, Telnet, FTP, SMB, and Redis on HackTheBox."
tags: ["HTB", "Enumeration", "FTP", "SMB", "Redis"]
platform: "HackTheBox"
---
**1.1 INTRODUCTION**

**Connecting to the Starting Point VPN:**

**Command: sudo openvpn \<file.ovpn\>**

![](/media-original/tier0/image14.png)

**1.2 MEOW**

**Task 1**

1.  What does the acronym VM stand for?

> **Answer: Virtual Machine**

**Task 2**

1.  What tool do we use to interact with the operating system in order
    to issue commands via the command line, such as the one to start our
    VPN connection? It\'s also known as a console or shell.

> **Answer: terminal**

**Task 3**

1.  What service do we use to form our VPN connection into HTB labs?

> **Answer: openvpn**

**Task 4**

1.  What tool do we use to test our connection to the target with an
    ICMP echo request?

> **Answer: Ping**

**Task 5**

1.  What is the name of the most common tool for finding open ports on a
    target?

> **Answer: Nmap**

**Task 6**

1.  What service do we identify on port 23/tcp during our scans?

> **Answer: Telnet**

![](/media-original/tier0/image17.png)

**Task 7**

1.  What username is able to log into the target over telnet with a
    blank password?

**Answer: root**

![](/media-original/tier0/image16.png)

2.  Submit root flag

**Answer: b40abdfe23665f766f9c61ecba8a4c19**

![](/media-original/tier0/image2.png)

**1.3 FAWN**

**Task 1**

What does the 3-letter acronym FTP stand for?

> **Answer: File Transfer Protocol**

**Task 2**

Which port does the FTP service listen on usually?

> **Answer: 21**

**Task 3**

FTP sends data in the clear, without any encryption. What acronym is
used for a later protocol designed to provide similar functionality to
FTP but securely, as an extension of the SSH protocol?

> **Answer: SFTP**

**Task 4**

What is the command we can use to send an ICMP echo request to test our
connection to the target?

> **Answer: PIng**

**Task 5**

From your scans, what version is FTP running on the target?

> **Answer: vsftpd 3.0.3**

![](/media-original/tier0/image8.png)

**Task 6**

From your scans, what OS type is running on the target?

> **Answer: Unix**

![](/media-original/tier0/image19.png)

**Task 7**

What is the command we need to run in order to display the \'ftp\'
client help menu?

> **Answer: Ftp -?**

![](/media-original/tier0/image5.png)

**Task 8**

What is the username that is used over FTP when you want to log in
without having an account?

> **Answer: anonymous**

**Task 9**

What is the response code we get for the FTP message \'Login
successful\'?

> **Answer: 230**

**Task 10**

There are a couple of commands we can use to list the files and
directories available on the FTP server. One is dir. What is the other
way to list files on a Linux system?

> **Answer: ls**

**Task 11**

What is the command used to download the file we found on the FTP
server?

> **Answer: Get**

Submit root flag

> **Answer: 035db21c881520061c53e0536e44f815**

![](/media-original/tier0/image4.png)

**1.4 DANCING**

**Task 1**

What does the 3-letter acronym SMB stand for?

**Answer: Server Message Block**

**Task 2**

What port does SMB use to operate at?

**Answer: 445**

**Task 3**

What is the service name for port 445 that came up in our Nmap scan?

**Answer: microsoft-ds**

![](/media-original/tier0/image10.png)

**Task 4**

What is the \'flag\' or \'switch\' that we can use with the smbclient
utility to \'list\' the available shares on Dancing?

**Answer: -L**

![](/media-original/tier0/image12.png)

**Task 5**

How many shares are there on Dancing?

**Answer: 4**

![](/media-original/tier0/image3.png)

**Task 6**

What is the name of the share we are able to access in the end with a
blank password?

**Answer: WorkShares**

![](/media-original/tier0/image1.png)

**Task 7**

What is the command we can use within the SMB shell to download the
files we find?

**Answer: get**

Submit root flag

**Answer: 5f61c10dffbc77a704d76016a22f1664**

Accessing the passwordless share to get the flag:

![](/media-original/tier0/image6.png)

**Screenshot completion:**

![](/media-original/tier0/image21.png)

**1.5 REDEEMER**

**Task 1**

Which TCP port is open on the machine?

**Answer: 6379**

![](/media-original/tier0/image11.png)

**Task 2**

Which service is running on the port that is open on the machine?

**Answer: redis**

![](/media-original/tier0/image7.png)

**Task 3**

What type of database is Redis? Choose from the following options: (i)
In-memory Database, (ii) Traditional Database

**Answer: In-memory Database**

**Task 4**

Which command-line utility is used to interact with the Redis server?
Enter the program name you would enter into the terminal without any
arguments.

**Answer: redis-cli**

**Task 5**

Which flag is used with the Redis command-line utility to specify the
hostname?

**Answer: -h**

**Task 6**

Once connected to a Redis server, which command is used to obtain the
information and statistics about the Redis server?

**Answer: info**

**Task 7**

What is the version of the Redis server being used on the target
machine?

**Answer: 5.0.7**

![](/media-original/tier0/image13.png)

**Task 8**

Which command is used to select the desired database in Redis?

**Answer: select**

**Task 9**

How many keys are present inside the database with index 0?

**Answer: 4**

![](/media-original/tier0/image9.png)

**Task 10**

Which command is used to obtain all the keys in a database?

**Answer: Keys \***

![](/media-original/tier0/image9.png)

Submit root flag

**Answer:**

![](/media-original/tier0/image18.png)

**Completion screenshot of Redeemer:**

![](/media-original/tier0/image20.png)

**1.6 CONCLUSIONS**

I successfully completed the tasks on the \"Meow,\" \"Fawn,\" and
\"Dancing\" machines, each offering valuable hands-on experience with
connecting to various services like FTP, SMB, Telnet, and redis
anonymously. I also honed my skills with Nmap for port scanning.
Unfortunately, I couldn't complete all the machines, due to the
limitation of not having a premium account. Despite this, the experience
was incredibly rewarding and provided a solid foundation for advancing
my skills.
