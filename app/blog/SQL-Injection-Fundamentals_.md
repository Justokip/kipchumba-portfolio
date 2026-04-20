---
title: "HTB Academy: SQL Injection Fundamentals"
description: "A deep dive into SQL injection vulnerabilities, database enumeration, and mitigating attacks."
tags: ["HTB", "SQLi", "Web Security", "Databases"]
platform: "HackTheBox"
---
**1.1 INTRODUCTION**

I delved into the SQL Injection Fundamentals, the module provides an
introduction to SQL injection (SQLi), a critical vulnerability in web
applications that interact with relational databases. By examining how
SQLi exploits improperly handled user input, I learned how attackers
manipulate database queries to gain unauthorized access, retrieve
sensitive data, bypass authentication, and even compromise entire
systems. The module also emphasizes the importance of secure coding
practices, such as input validation and privilege management, to prevent
SQLi attacks and protect database-driven applications.

**1.2 INTRO TO DATABASES**

Here, I explored databases and the role of Database Management Systems
(DBMS) in managing data for web applications. I learned how DBMS
platforms, such as relational and NoSQL databases, provide essential
features like concurrency, consistency, security, and reliability,
making them suitable for storing diverse types of data, from user
information to content assets. The module also covered SQL
(***Structured Query Language***), which enables intuitive database
interactions, and introduced a two-tier architecture where client-side
applications and middleware interact with the DBMS to handle data
requests efficiently. This knowledge is foundational for understanding
SQL injection and secure database interactions.

**Architecture:**![](/kipchumba-portfolio/media-original/sql-injection/image10.png)

**1.3 TYPES OF DATABASES**

In this module, I learned about different types of databases and how
they manage data. Relational databases, such as ***MySQL*** and
***PostgreSQL***, use structured tables and schemas, making them ideal
for well-defined data relationships. They employ a relational database
management system (RDBMS) to organise data across related tables using
keys, allowing for efficient data retrieval and updates.
***Non-relational databases,*** like ***MongoDB,*** store data in
flexible formats like key-value pairs or documents, making them better
suited for unstructured data. Understanding these types helps in
choosing the right database for specific needs and provides insight into
SQL and NoSQL injection techniques**.**

![](/kipchumba-portfolio/media-original/sql-injection/image14.png)

**1.4 INTRO TO MYSQL**

In this module, I learned the basics of ***SQL*** syntax and ***MySQL***
operations, which are crucial for understanding SQL injection
techniques. I explored how to log in to a MySQL database using commands
with different flags for security, created databases and tables, and
managed data using SQL queries. The ***CREATE TABLE*** command allows me
to define tables with specific data types and constraints, such as
***AUTO_INCREMENT, NOT NULL, UNIQUE, and PRIMARY KEY,*** to ensure data
integrity and uniqueness. These fundamentals help in both database
management and identifying security vulnerabilities like SQL injections.

![](/kipchumba-portfolio/media-original/sql-injection/image20.png)

Question:

1.  Connect to the database using the MySQL client from the command
    line. Use the \'show databases;\' command to list databases in the
    DBMS. What is the name of the first database?

> **Answer: employees**

![](/kipchumba-portfolio/media-original/sql-injection/image5.png)

**1.5 SQL STATEMENTS**

In this section, I learned essential SQL statements for managing and
manipulating data in MySQL. The ***INSERT*** statement allows adding
single or multiple records into tables, while ***SELECT*** retrieves
data with options to specify columns. The ***DROP*** statement
permanently deletes tables, making it a powerful but risky command. The
***ALTER*** statement is used for modifying table structures, such as
renaming columns, changing data types, or adding/removing columns.
Finally, ***UPDATE*** modifies specific records based on conditions set
with the ***WHERE*** clause, ensuring precise changes within the
database. Each statement serves a unique role in effective database
management.

Question:

1.  What is the department number for the \'Development\' department?

> **Answer: d005**

![](/kipchumba-portfolio/media-original/sql-injection/image3.png)

**1.6 QUERY RESULTS**

In this section, I learned how to control and refine the output of SQL
query results. By using the ***ORDER BY*** clause, we can sort results
in ascending or descending order based on specified columns, and even
sort by multiple columns. The ***LIMIT*** clause allows us to restrict
the number of results returned, with the option to use an offset. The
***WHERE*** clause enables filtering results based on conditions, such
as selecting records with a specific value or range. Additionally, the
***LIKE*** clause supports pattern matching with wildcards, allowing for
more flexible searches. These techniques help in efficiently managing
large datasets and retrieving the exact information needed.

Question:

1.  What is the last name of the employee whose first name starts with
    \"Bar\" AND who was hired on 1990-01-01?

> **Answer: Mitchem**

![](/kipchumba-portfolio/media-original/sql-injection/image6.png)

**1.7 SQL OPERATORS**

SQL operators allow for more complex queries by evaluating multiple
conditions. The ***AND*** operator requires both conditions to be true,
while the ***OR*** operator only requires one condition to be true. The
***NOT*** operator negates a boolean value, converting true to false and
vice versa. These ***logical operators*** can also be represented with
symbols (&&, \|\|, !). Additionally, operators like != allow for
negation within conditions. I also learned about operator precedence,
where operations like multiplication and division are evaluated before
addition, and comparison operators are evaluated before logical
operators, ensuring the correct order of operations in complex queries.

**Operator precedence:**

![](/kipchumba-portfolio/media-original/sql-injection/image9.png)

**Question:**

1.  In the \'titles\' table, what is the number of records WHERE the
    employee number is greater than 10000 OR their title does NOT
    contain \'engineer\'?

> **Answer: 654**

![](/kipchumba-portfolio/media-original/sql-injection/image1.png)

**1.8 INTRO TO SQL INJECTIONS**

SQL injections is a critical security vulnerability in web applications.
Web applications that interact with databases, like MySQL, can be
vulnerable if user input is not properly sanitised before being used in
SQL queries. ***SQL injection occurs*** when an attacker manipulates
user input to execute unauthorised SQL code, potentially causing damage
such as data theft or deletion. The types of SQL injection include
***In-band SQL injection*** (with Union-based and Error-based methods),
***Blind SQL injection (***Boolean and Time-based), and ***Out-of-band
SQL injection,*** with a focus on Union-based injection in this module.
Proper sanitization of user input is essential to prevent these attacks.

![](/kipchumba-portfolio/media-original/sql-injection/image19.png)

**1.9 SUBVERTING QUERY LOGIC**

In this section, I learned about SQL injection, specifically how to
***bypass authentication*** by modifying SQL queries. By injecting the
***OR operato***r and using ***SQL comments***, we can manipulate the
logic of a query to bypass authentication without needing the correct
password. For example, injecting ***OR \'1\'=\'1*** into the username
field can force the query to return true, regardless of the password.
This allows attackers to log in as the admin user. Additionally, if the
username is unknown, injecting ***OR \'1\'=\'1*** into the password
field can also result in successful authentication. This highlights the
importance of sanitising user input to prevent such vulnerabilities.

![](/kipchumba-portfolio/media-original/sql-injection/image11.png)

Question:

1.  Try to log in as the user \'tom\'. What is the flag value shown
    after you successfully log in?

> **Answer: 202a1d1a8b195d5e9a57e434cc16000c**

![](/kipchumba-portfolio/media-original/sql-injection/image17.png)

**1.10 USING COMMENTS**

In this section, I learned how to use SQL comments to ***bypass
authentication*** by manipulating SQL queries. Comments, such as \-- and
#, allow us to ignore parts of a query, enabling us to bypass conditions
like the password check. For example, injecting admin\'\-- as the
username will modify the query to only check for the username,
effectively bypassing authentication. Additionally, I learned that
parentheses can be used to prioritise certain conditions, and combining
comments with parentheses allows us to bypass checks that would normally
prevent login.

Question:

1.  Login as the user with the id 5 to get the flag.

> **Answer: cdad9ecdf6f14b45ff5c4de32909caec**

![](/kipchumba-portfolio/media-original/sql-injection/image15.png)

**1.11 UNION CLAUSE**

SQL Union Injection allows attackers to inject entire SQL queries
alongside the original query. The SQL UNION clause combines results from
multiple ***SELECT statements,*** enabling attackers to extract data
from multiple tables or databases. However, for a UNION query to work,
the number of columns in the original query must match the injected
query. In cases where the number of columns differs, junk data (such as
numbers or NULL) is used to fill the remaining columns, ensuring the
structure matches. This technique allows attackers to retrieve sensitive
information, such as usernames and passwords, from other tables in the
database.

**Question:**

1.  Connect to the above MySQL server with the \'mysql\' tool, and find
    the number of records returned when doing a \'Union\' of all records
    in the \'employees\' table and all records in the \'departments\'
    table.

> **Answer**: 663

Command used:

![](/kipchumba-portfolio/media-original/sql-injection/image2.png)

Number returned:

![](/kipchumba-portfolio/media-original/sql-injection/image12.png)

**1.12 UNION INJECTION**

I learned how to conduct a Union-based SQL injection attack by
exploiting vulnerabilities in web applications. The process involves
injecting a query with the UNION clause, which combines results from
multiple SELECT statements. To successfully exploit a vulnerability, the
first step is determining the number of columns in the original query,
which can be done using either the ***ORDER BY*** or ***UNION*** method.
Once the number of columns is known, the next challenge is finding the
correct column where the injected query's result will be displayed. By
using numbers or junk data, we can track which columns are being printed
on the page and place our query accordingly. Testing with a simple SQL
query, such as ***@@version,*** can help verify that the injection is
working and data from the database can be extracted.

1.  Use a Union injection to get the result of \'user()\'

> **Answer**: [root@localhost]

![](/kipchumba-portfolio/media-original/sql-injection/image13.png)

**[1.13 DATABASE ENUMERATION]**

I learned how to perform database enumeration through SQL injection by
leveraging the ***INFORMATION_SCHEMA*** database. First, I identified
the type of DBMS using fingerprinting queries, such as ***SELECT
@@version*** for MySQL. Once the database type is known, I used the
***INFORMATION_SCHEMA.***SCHEMATA table to list all databases, followed
by querying the TABLES table to find the available tables in a specific
database. After identifying the tables, I used the ***COLUMNS*** table
to retrieve column names, enabling me to target specific data, such as
usernames and passwords. By constructing UNION-based SQL queries, I was
able to extract sensitive information, demonstrating how to enumerate
databases and gather data from vulnerable web applications.

![](/kipchumba-portfolio/media-original/sql-injection/image18.png)

Question:

1.  What is the password hash for \'newuser\' stored in the \'users\'
    table in the \'ilfreight\' database?

> **Answer: [9da2c9bcdf39d8610954e0e11ea8f45f]**

Command used ***cn\' UNION select 1,username,password,4 from
ilfreight.users\-- -***

![](/kipchumba-portfolio/media-original/sql-injection/image7.png)

**1.14 READING FILES**

The ability to read and write files depends on the privileges granted to
the database user. For example, in MySQL, the FILE privilege allows a
user to load and read files from the server. To determine the privileges
of the current user, I used queries like ***SELECT USER()*** and
***SELECT super_priv*** to check for superuser rights. Once confirmed, I
leveraged the ***LOAD_FILE() f***unction to read system files, such as
/etc/passwd or web application files like search.php. This demonstrated
how SQL injection can be used to extract sensitive information,
including application source code, by reading files from the server.

Question:

1.  We see in the above PHP code that \'\$conn\' is not defined, so it
    must be imported using the PHP include command. Check the imported
    page to obtain the database password.

> **Answer: dB_pAssw0rd_iS_flag!**

Used the command: ***cn\' UNION SELECT 1,
LOAD_FILE(\"/var/www/html/config.php\"), 3, 4 \-- -***

![](/kipchumba-portfolio/media-original/sql-injection/image4.png)

**1.16 MITIGATING SQL INJECTION**

SQL injection vulnerabilities can be mitigated by implementing several
techniques. ***Input sanitization, using functions like
mysqli_real_escape_string(), escapes special characters to prevent
malicious input***. Input validation ensures data matches expected
formats, such as using regular expressions to restrict input to specific
characters. ***User privilege***s should be minimized, with database
users granted only the necessary permissions to limit potential damage.
***Web Application Firewalls*** (WAFs) can detect and block malicious
queries by inspecting incoming requests. Finally, parameterized queries
use placeholders for user input, ensuring it is treated as data rather
than code, thus preventing injection. These measures collectively reduce
the risk of SQL injection attacks.

**1.17 SKILLS ASSESSMENTS**

The company Inlanefreight has contracted you to perform a web
application assessment against one of their public-facing websites. In
light of a recent breach of one of their main competitors, they are
particularly concerned with SQL injection vulnerabilities and the damage
the discovery and successful exploitation of this attack could do to
their public image and bottom line.

They provided a target IP address and no further information about their
website. Perform a full assessment of the web application from a \"grey
box\" approach, checking for the existence of SQL injection
vulnerabilities.

**Question:**

1.  Assess the web application and use a variety of techniques to gain
    remote code execution and find a flag in the / root directory of the
    file system. Submit the contents of the flag as your answer.

> **Answer**: 528d6d9cedc2c7aab146ef226e918396

To bypass the login, I executed the following SQL command: ***admin\' or
1=1\-- jjjkajsak***

![](/kipchumba-portfolio/media-original/sql-injection/image23.png)

successfully bypassing the login:

![](/kipchumba-portfolio/media-original/sql-injection/image26.png)

Using the union method, I established that there are 5 columns and it
also revealed that columns 2,3,4 & 5 are the only ones displayed on the
screen.

![](/kipchumba-portfolio/media-original/sql-injection/image25.png)

Using the command ***\' UNION SELECT 1, super_priv, 3, 4, 5 FROM
mysql.user\-- -*** confirms that the user has superuser privileges

![](/kipchumba-portfolio/media-original/sql-injection/image22.png)

![](/kipchumba-portfolio/media-original/sql-injection/image21.png)

navigated to the root directory with the payload:

![](/kipchumba-portfolio/media-original/sql-injection/image8.png)

To load the file to read its contents using the payload, command used:
***\' UNION SELECT 1,LOAD_FILE(\"/flag_cae1dadcd174.txt\"),3,4,5\-- -***

![](/kipchumba-portfolio/media-original/sql-injection/image24.png)

**CONCLUSION**

In conclusion, the module provided a deep dive into one of the most
common and critical vulnerabilities in web applications. It helped me
understand the various types of SQL injection attacks, their mechanisms,
and effective prevention methods. However, I faced some challenges,
particularly when trying to identify vulnerable points in applications
and crafting payloads that would successfully exploit these
vulnerabilities. There were moments when the logic behind the attack
wasn\'t immediately clear, and overcoming issues with bypassing security
filters took a bit of time and experimentation. Despite these hurdles, I
eventually solved them by carefully analyzing the responses from the
application, adjusting my payloads, and refining my understanding of how
web applications interact with databases. This module has strengthened
my knowledge of both offensive and defensive strategies for securing web
applications against SQL injection.

**Completion Screenshot:**

![](/kipchumba-portfolio/media-original/sql-injection/image16.png)

**Link to my completed module:**

[**[https://academy.hackthebox.com/achievement/1065123/33]**](https://academy.hackthebox.com/achievement/1065123/33)
