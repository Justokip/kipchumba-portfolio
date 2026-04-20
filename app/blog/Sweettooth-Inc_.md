---
title: "THM Walkthrough: Sweettooth Inc."
description: "Exploiting an exposed InfluxDB, crafting JWT tokens, and escaping Docker containers."
tags: ["THM", "InfluxDB", "JWT", "Docker", "PrivEsc"]
platform: "TryHackMe"
---

**1.1 INTRODUCTION**

In this room, I first enumerated a vulnerable database where I crafted a
JWT token to login into it and there I got the SSH credentials to the
system. OnceI had gained a foothold on the system, it's a docker
container with an exposed Docker Engine API.

**1.2 ENUMERATION**

**Question:**

1.  Do a TCP portscan. What is the name of the database software
    running on one of these ports?

> **Answer:** influxdb

Did an aggressive nmap scan.

![](/kipchumba-portfolio/media-original/sweettooth/image3.png)

**1.3 DATABASE EXPLORATION AND USER FLAG**

**Questions:**

1.  What is the database user you find?

> **Answer: o5yY6yya**
>
> ![](/kipchumba-portfolio/media-original/sweettooth/image6.png)

2.  What was the temperature of the water tank at 1621346400 (UTC Unix
    Timestamp)?

> **Answer: 22.5**
>
> ![](/kipchumba-portfolio/media-original/sweettooth/image2.png)

3.  What is the highest rpm the motor of the mixer reached?

> **Answer:4875**
>
> ![](/kipchumba-portfolio/media-original/sweettooth/image1.png)

4.  What username do you find in one of the databases?

> **Answer: uzJk6Ry98d8C**
>
> ![](/kipchumba-portfolio/media-original/sweettooth/image9.png)

5.  user.txt

> **Answer: THM**
>
> ![](/kipchumba-portfolio/media-original/sweettooth/image4.png)

**1.4 PRIVILEGE ESCALATION**

**Question:**

1.  /root/root.txt

**Answer: [THM]**

Creating an jwt token

![](/kipchumba-portfolio/media-original/sweettooth/image7.png)

Performing an ssh and checking the misconfigured permissions:

![](/kipchumba-portfolio/media-original/sweettooth/image12.png)

**Getting the shell:**

![](/kipchumba-portfolio/media-original/sweettooth/image10.png)

**Viewing the root contents**

![](/kipchumba-portfolio/media-original/sweettooth/image8.png)

**1.5 ESCAPE**

**Question:**

1.  The second /root/root.txt

**[Answer: THM]**

![](/kipchumba-portfolio/media-original/sweettooth/image5.png)

**1.6 CONCLUSIONS**

In the Sweettooth Inc. module, I successfully identified a vulnerable
influxdb database and crafted a JWT token to gain access, retrieving SSH
credentials to the system. This led to a Docker environment with an
exposed API, enabling me to escalate privileges and retrieve critical
information, including the user.txt flag.

While tackling this module, I faced challenges with timestamp
conversions and privilege escalation within the Docker environment. With
focused enumeration and database analysis, I resolved these issues.

**Completion Screenshot:**

![](/kipchumba-portfolio/media-original/sweettooth/image11.png)
