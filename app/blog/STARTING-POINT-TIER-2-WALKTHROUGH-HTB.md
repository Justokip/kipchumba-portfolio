---
title: "HTB Starting Point: Tier 2"
description: "Enumerating and exploiting Microsoft SQL Server and SMB shares."
tags: ["HTB", "MSSQL", "SMB", "Impacket"]
platform: "HackTheBox"
---

**1.1 INTRODUCTION**

**Task 1**

Which TCP port is hosting a database server?

**Answer: 1433**

![](/kipchumba-portfolio/media-original/tier2/image1.png)

**Task 2**

What is the name of the non-Administrative share available over SMB?

**Answer: backups**

![](/kipchumba-portfolio/media-original/tier2/image2.png)

**Task 3**

What is the password identified in the file on the SMB share?

**Answer: M3g4c0rp123**

![](/kipchumba-portfolio/media-original/tier2/image3.png)

**Task 4**

What script from Impacket collection can be used in order to establish
an authenticated connection to a Microsoft SQL Server?

**Answer: mssqlclient.py**

![](/kipchumba-portfolio/media-original/tier2/image4.png)

**Task 5**

What extended stored procedure of Microsoft SQL Server can be used in
order to spawn a Windows command shell?

**Answer:**

**Task 6**

What script can be used in order to search possible paths to escalate
privileges on Windows hosts?

**Answer:**

**Task 7**

What file contains the administrator\'s password?

**Answer:**

Submit user flag

**Answer:**

Submit root flag

**Answer:**
