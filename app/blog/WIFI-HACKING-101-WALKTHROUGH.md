---
title: "WiFi Hacking 101 Walkthrough"
description: "A practical guide to capturing WPA handshakes and cracking them using Aircrack-ng and Hashcat."
tags: ["WiFi Hacking", "Aircrack-ng", "Hashcat", "WPA2"]
platform: "TryHackMe"
---

**1.1** **INTRODUCTION**

**1.1.1 INTRO TO WPA**

**Key Terms:**

![](/kipchumba-portfolio/media-original/wifi-hacking/image7.png)

**Questions:**

1.  What type of attack on the encryption can you perform on WPA(2)
    personal?

> **Correct Answer:** brute force

2.  Can this method be used to attack WPA2-EAP handshakes? (Yea/Nay)

> **Correct Answer:** Nay

3.  What three letter abbreviation is the technical term for the \"wifi
    code/password/passphrase\"?

> **Correct Answer:** PSK
>
> **Explanation:** "PSK" stands for "Pre-Shared Key." The PSK is the
> secret key or passphrase used to authenticate and secure access to a
> Wi-Fi network in WPA/WPA2-PSK (Wi-Fi Protected Access --- Pre-Shared
> Key) security modes.

4.  What\'s the minimum length of a WPA2 Personal password?

> **Correct Answer: 8**

**1.2 CAPTURING PACKETS TO ATTACK**

***Aircrack-ng*** is a popular suite of wireless network security tools
used for assessing the security of Wi-Fi networks. It includes various
tools for tasks such as capturing network traffic, analyzing captured
data, and attempting to crack WEP and WPA/WPA2-PSK encryption keys.

**Questions:**

1.  How do you put the interface "wlan0" into monitor mode with Aircrack
    tools? (Full command)

> **Answer: airmon-ng start wlan0**

2.  What is the new interface name likely to be after you enable monitor
    mode?

> **Answer: wlan0mon**

3.  What do you do if other processes are currently trying to use that
    network adapter?

> **Answer: airmon-ng check kill**

4.  What tool from the aircrack-ng suite is used to create a capture?

> **Answer: airodump-ng**

5.  What flag do you use to set the BSSID to monitor?

> **Answer: \-- bssid**

6.  And to set the channel?

> **Answer: \-- channel**

7.  And how do you tell it to capture packets to a file?

> **Answer: -w**

![](/kipchumba-portfolio/media-original/wifi-hacking/image5.png)

**1.3 AIRCRACK-NG**

**CRACKING:**

![](/kipchumba-portfolio/media-original/wifi-hacking/image6.png)

**---HELP**

![](/kipchumba-portfolio/media-original/wifi-hacking/image2.png)

**Questions:**

1.  What flag do we use to specify a BSSID to attack?

> **Answer:** -b

2.  What flag do we use to specify a wordlist?

> **Answer:** -w

3.  How do we create a HCCAPX in order to use hashcat to crack the
    password?

> **Answer:** -j

4.  Using the rockyou wordlist, crack the password in the attached
    capture. What\'s the password?

> **Answer:** greeneggsandham

5.  Where is password cracking likely to be fastest, CPU or GPU?

> **Answer: GPU**

**Explanation question 4:**

After downloading the files, unzipped the file.

![](/kipchumba-portfolio/media-original/wifi-hacking/image4.png)

Creating a hashcat file

![](/kipchumba-portfolio/media-original/wifi-hacking/image1.png)

**Cracking the password:**

![](/kipchumba-portfolio/media-original/wifi-hacking/image3.png)

**1.4 CONCLUSION**

The \"***WiFi Hacking 101***\" module was an insightful journey into the
basics of WPA security, packet capturing, and password cracking. From
putting interfaces in monitor mode to using ***aircrack-ng*** for
decryption, the module covered essential steps in Wi-Fi penetration
testing. It was largely theoretical, highlighting best practices and
tools like ***airmon-ng, airodump-ng, and aircrack-ng,*** along with the
almighty rockyou wordlist.

**Completion screenshot:**

![](/kipchumba-portfolio/media-original/wifi-hacking/image8.png)
