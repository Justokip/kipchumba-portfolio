---
title: "HTB Walkthrough: Starting Point Tier 0"
date: "2024-05-22"
description: "Mastering the basics of service enumeration and initial access."
tags: ["HTB", "Recon", "Telnet"]
platform: "HackTheBox"
---

# Initial Reconnaissance

Welcome to my first writeup. We start by mapping the network using `nmap`.

```bash
nmap -sV -sC -p- 10.10.10.123
