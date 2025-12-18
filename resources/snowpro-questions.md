# **SnowPro Core (COF-C02) Practice & Scenarios**

## **Domain 1.0: Snowflake AI Data Cloud Features and Architecture (Weightage: 24%)**

### **🏢 Business Scenario: Global Retail Ingest (GRI)**

*GRI is a multi-national retailer migrating from a traditional on-premise data warehouse to Snowflake. They operate in three regions (US, EU, Asia) and use AWS for their cloud infrastructure. They have massive amounts of transactional data (Structured), customer clickstream data (JSON/Semi-structured), and store floor plan images (Unstructured). They need to ensure zero resource contention between their Finance and Data Science teams.*

### **🔹 Sub-topic 1.1: Key Features of Snowflake**

*(10 Questions)*

1. **GRI wants to ensure that their Finance team's month-end reporting does not slow down the Data Science team's model training. Which Snowflake feature directly enables this?**  
   * A. Multi-factor Authentication  
   * B. Separation of Storage and Compute  
   * C. Data Clustering  
   * D. Time Travel  
   * **Answer: B.** By separating storage and compute, GRI can assign different Virtual Warehouses to each team, ensuring zero resource contention.  
2. **GRI is looking for a "zero-management" platform. Which task is GRI responsible for in Snowflake?**  
   * A. Managing physical hardware and servers  
   * B. Installing software updates and security patches  
   * C. Managing data and access control  
   * D. Optimizing the underlying Operating System  
   * **Answer: C.** Snowflake is a SaaS platform; Snowflake manages infrastructure. The user is only responsible for the data and access logic.  
3. **Which layer of the Snowflake architecture is responsible for query parsing and optimization?**  
   * A. Storage Layer  
   * B. Compute Layer  
   * C. Cloud Services Layer  
   * D. Virtual Warehouse Layer  
   * **Answer: C.** The Cloud Services layer is the "brain" and handles query optimization, security, and metadata.  
4. **GRI needs to ensure that their EU data remains strictly in the EU region but needs a global view for the US HQ. Which feature supports this global architecture?**  
   * A. Snowsight  
   * B. Snowgrid  
   * C. Snowpark  
   * D. Snowpipe  
   * **Answer: B.** Snowgrid enables cross-region replication and global data governance.  
5. **A query is run: SELECT COUNT(\*) FROM transactions. If the warehouse is suspended, how does Snowflake return the result?**  
   * A. It fails because the warehouse is off.  
   * B. It auto-resumes the warehouse, scans the data, and shuts down.  
   * C. It fetches the result from the Cloud Services metadata cache without a warehouse.  
   * D. It fetches the result from the local SSD cache of the last used warehouse.  
   * **Answer: C.** Metadata like row counts are stored in Cloud Services. No compute is required.  
6. **GRI requires a dedicated, completely isolated Snowflake instance for their most sensitive financial data. Which edition should they choose?**  
   * A. Standard  
   * B. Enterprise  
   * C. Business Critical  
   * D. Virtual Private Snowflake (VPS)  
   * **Answer: D.** VPS provides a fully isolated environment for high-security requirements.  
7. **What is the minimum billing increment for a Virtual Warehouse after the first 60 seconds?**  
   * A. 1 minute  
   * B. 1 second  
   * C. 5 minutes  
   * D. 1 hour  
   * **Answer: B.** After a 1-minute minimum, billing is per-second.  
8. **Which architectural layer is responsible for maintaining ACID compliance?**  
   * A. Storage Layer  
   * B. Compute Layer  
   * C. Cloud Services Layer  
   * D. Network Layer  
   * **Answer: C.** Cloud Services handles transaction management and ACID compliance.  
9. **GRI scales their Small warehouse to a Medium. This is an example of:**  
   * A. Scaling Out  
   * B. Scaling Down  
   * C. Scaling Up  
   * D. Auto-scaling  
   * **Answer: C.** Scaling "Up" refers to increasing the size of a single warehouse to handle more complex queries.  
10. **A warehouse is set to "Auto-suspend: 5 minutes". It finishes a query at 12:00:00. At 12:02:00, it receives a new query. How much billing occurs for the idle time?**  
    * A. 0 seconds  
    * B. 2 minutes  
    * C. 5 minutes  
    * D. 60 seconds  
    * **Answer: B.** The warehouse was active/running for those 2 minutes waiting for the next query.

### **🔹 Sub-topic 1.2: Snowflake Tools and User Interfaces**

*(10 Questions)*

1. **GRI wants to automate their data loading using a bash script on a Linux server. Which tool should they use?**  
   * A. Snowsight  
   * B. SnowSQL  
   * C. Snowflake SQL API  
   * D. Streamlit  
   * **Answer: B.** SnowSQL is the CLI tool designed for scripting and automation.  
2. **A developer at GRI wants to build a data visualization app using Python directly inside the Snowflake UI. What should they use?**  
   * A. Snowpark  
   * B. Cortex  
   * C. Streamlit in Snowflake  
   * D. SnowCD  
   * **Answer: C.** Streamlit allows building interactive apps within the Snowflake environment.  
3. **Which Snowflake tool is specifically used to diagnose if a corporate firewall is blocking access to Snowflake endpoints?**  
   * A. Snowsight  
   * B. SnowSQL  
   * C. SnowCD  
   * D. Snowpark  
   * **Answer: C.** SnowCD (Connectivity Diagnostic) tests network paths.  
4. **GRI uses Tableau for business intelligence. How does Tableau connect to Snowflake?**  
   * A. Native SQL API  
   * B. ODBC/JDBC Driver  
   * C. SnowSQL  
   * D. Snowpipe  
   * **Answer: B.** External BI tools use standard drivers like ODBC or JDBC.  
5. **Which tool allows a data scientist to write Scala code that executes natively on Snowflake compute?**  
   * A. Snowsight  
   * B. Snowpark  
   * C. SnowSQL  
   * D. Cortex  
   * **Answer: B.** Snowpark enables Python, Java, and Scala logic within Snowflake.  
6. **What is the primary interface for managing Snowflake's account-level billing and usage charts?**  
   * A. SnowSQL  
   * B. Snowsight  
   * C. Classic UI  
   * D. SQL API  
   * **Answer: B.** Snowsight is the primary web-based management interface.  
7. **GRI wants to summarize 1,000 customer reviews using an AI model built into Snowflake. Which feature should they call?**  
   * A. Snowpark  
   * B. Snowsight  
   * C. Cortex  
   * D. SnowCD  
   * **Answer: C.** Cortex provides managed AI functions like SUMMARIZE.  
8. **Which of the following is NOT a Snowflake-provided connector?**  
   * A. Kafka Connector  
   * B. Spark Connector  
   * C. Python Connector  
   * D. Oracle Database Connector  
   * **Answer: D.** Snowflake provides connectors to ingest *into* Snowflake, not for external database management.  
9. **Can the Snowflake SQL API be used to submit DDL commands like CREATE TABLE?**  
   * A. No, it is for SELECT only.  
   * B. Yes, it can execute any SQL statement.  
   * C. No, it is for PUT and GET only.  
   * D. Yes, but only in the Enterprise edition.  
   * **Answer: B.** The SQL API can execute any valid Snowflake SQL.  
10. **In Snowsight, what is the purpose of the "Query Profile"?**  
    * A. To see user login history.  
    * B. To analyze the performance and execution plan of a specific SQL query.  
    * C. To set up MFA for a user.  
    * D. To browse the data marketplace.  
    * **Answer: B.** It provides a visual representation of how a query was processed.

### **🔹 Sub-topic 1.3: Snowflake Catalog and Objects**

*(10 Questions)*

1. **GRI has a clickstream dataset in JSON format. In which column type should they store this?**  
   * A. VARCHAR  
   * B. BLOB  
   * C. VARIANT  
   * D. ARRAY  
   * **Answer: C.** VARIANT is the native data type for semi-structured data like JSON.  
2. **GRI creates a staging table for their daily ETL process that they don't need to recover if a disaster occurs, but it must persist across different sessions. What table type should they use?**  
   * A. Permanent  
   * B. Temporary  
   * C. Transient  
   * D. External  
   * **Answer: C.** Transient tables persist but have no Fail-safe, saving storage costs for non-critical data.  
3. **A user drops a table by mistake. Which command should they use to restore it instantly?**  
   * A. RESTORE TABLE  
   * B. UNDROP TABLE  
   * C. RECOVER TABLE  
   * D. FLASHBACK TABLE  
   * **Answer: B.** UNDROP uses Time Travel to restore dropped objects.  
4. **Which object type allows GRI to share data with a partner without the partner seeing the underlying table names or JOIN logic?**  
   * A. Standard View  
   * B. Secure View  
   * C. Materialized View  
   * D. Stream  
   * **Answer: B.** Secure Views hide the DDL and logic from unauthorized users.  
5. **Which object is used to schedule the execution of a Stored Procedure every Monday at 8 AM?**  
   * A. Stream  
   * B. Pipe  
   * C. Task  
   * D. Sequence  
   * **Answer: C.** Tasks are used for scheduling SQL and procedures.  
6. **A "Managed Access Schema" is different from a "Standard Schema" because:**  
   * A. It is only available in Business Critical edition.  
   * B. The object owner cannot grant privileges; only the schema owner can.  
   * C. It automatically encrypts data.  
   * D. It does not allow the creation of views.  
   * **Answer: B.** Managed schemas centralize grant management to the schema owner.  
7. **GRI wants to track exactly which rows in a table have changed since the last time their ETL process ran. Which object should they use?**  
   * A. Task  
   * B. Pipe  
   * C. Stream  
   * D. View  
   * **Answer: C.** Streams track DML changes (inserts, updates, deletes) on a table.  
8. **What is the maximum size of a single VARIANT column value?**  
   * A. 1 MB  
   * B. 8 MB  
   * C. 16 MB  
   * D. 50 MB  
   * **Answer: C.** VARIANT columns are capped at 16 MB.  
9. **Which object is used to connect an External Stage to a target table for continuous, automated data loading?**  
   * A. Stream  
   * B. Task  
   * C. Pipe  
   * D. Sequence  
   * **Answer: C.** A Pipe (Snowpipe) automates the COPY INTO command.  
10. **GRI wants to provide a unique ID to every row in a table automatically. Which object should they use?**  
    * A. Stream  
    * B. Task  
    * C. Sequence  
    * D. View  
    * **Answer: C.** Sequences generate unique numerical values.

### **🔹 Sub-topic 1.4: Snowflake Storage Concepts**

*(10 Questions)*

1. **How are micro-partitions created in Snowflake?**  
   * A. Manually by the user using the PARTITION BY clause.  
   * B. Automatically by Snowflake during the data load process.  
   * C. By setting a "Partitioning Key" on the table.  
   * D. Only when using the Enterprise edition.  
   * **Answer: B.** Snowflake automatically and transparently micro-partitions all data.  
2. **A query scans a table with 1,000 micro-partitions but only reads 5 of them based on a date filter. This is known as:**  
   * A. Indexing  
   * B. Clustering  
   * C. Pruning  
   * D. Filtering  
   * **Answer: C.** Pruning uses metadata to skip irrelevant micro-partitions.  
3. **GRI has a 500 TB table where queries by 'Store\_ID' are very slow. What should they consider?**  
   * A. Creating a B-Tree Index.  
   * B. Defining a Clustering Key on 'Store\_ID'.  
   * C. Moving the data to a Transient table.  
   * D. Increasing the warehouse size to 4XL.  
   * **Answer: B.** Clustering keys reorganize data to improve pruning on specific columns for massive tables.  
4. **Where is micro-partition metadata (like Min/Max values) stored?**  
   * A. In the micro-partition file itself.  
   * B. In the Compute Layer.  
   * C. In the Cloud Services Layer.  
   * D. On the user's local machine.  
   * **Answer: C.** Metadata is stored and managed in the Cloud Services layer.  
5. **When data in a micro-partition is "updated," what happens?**  
   * A. The existing micro-partition is modified on disk.  
   * B. The micro-partition is deleted and a new one is created.  
   * C. The micro-partition is marked as "dirty" and new data is added to a new micro-partition.  
   * D. Updates are stored in the Result Cache.  
   * **Answer: C.** Micro-partitions are immutable. Updates result in new micro-partitions being written (enabling Time Travel).  
6. **Which view provides the most up-to-date storage metrics for a specific table?**  
   * A. SNOWFLAKE.ACCOUNT\_USAGE.TABLE\_STORAGE\_METRICS  
   * B. INFORMATION\_SCHEMA.TABLE\_STORAGE\_METRICS  
   * C. SHOW TABLES command  
   * D. SNOWFLAKE.CORE.STORAGE\_HISTORY  
   * **Answer: B.** Information Schema is real-time; Account Usage has a latency of up to 2 hours.  
7. **Data "Clustering" in Snowflake is:**  
   * A. A manual process that requires shutting down the warehouse.  
   * B. A background service that re-sorts data to improve pruning.  
   * C. Only available for JSON data.  
   * D. Used to move data between regions.  
   * **Answer: B.** Automatic clustering is a serverless background service.  
8. **Which of the following does NOT contribute to storage costs in Snowflake?**  
   * A. Data in Permanent Tables.  
   * B. Data in Fail-safe.  
   * C. Data in the Result Cache.  
   * D. Data in Time Travel.  
   * **Answer: C.** Caching does not incur storage fees; only table data (Active, Time Travel, Fail-safe) does.  
9. **What is the typical size of a micro-partition before compression?**  
   * A. 1 KB to 1 MB  
   * B. 50 MB to 500 MB  
   * C. 1 GB to 5 GB  
   * D. Exactly 128 MB  
   * **Answer: B.** Micro-partitions range from 50MB to 500MB of uncompressed data.  
10. **A table is naturally clustered by 'Date'. If data is loaded randomly by date, what happens to pruning performance?**  
    * A. It improves automatically.  
    * B. It degrades, and a Clustering Key may be needed.  
    * C. Snowflake blocks the load.  
    * D. The Cloud Services layer fixes it instantly for free.  
    * **Answer: B.** Natural clustering depends on load order. Random loading degrades pruning performance.

# **SnowPro Core (COF-C02) Practice & Scenarios**

## **Domain 2.0: Account Access and Security (Weightage: 18%)**

### **🏢 Business Scenario: Global Retail Ingest (GRI)**

*GRI has completed their initial data migration. Now, the focus is on securing the environment. They have thousands of users, including internal analysts, external vendors, and automated ETL service accounts. They need to enforce strict IP-based access, implement Single Sign-On (SSO) with Okta, and ensure that sensitive PII (Personally Identifiable Information) like customer emails and credit card numbers are masked for most roles.*

### **🔹 Sub-topic 2.1: Security Principles**

*(10 Questions)*

1. **GRI wants to ensure that the ACCOUNTADMIN role can only be accessed from the corporate headquarters' IP range. Which feature should they use?**  
   * A. Multi-Factor Authentication (MFA)  
   * B. Network Policy applied at the Account level  
   * C. Network Policy applied at the User level  
   * D. Role-Based Access Control (RBAC)  
   * **Answer: C.** While an account-level policy affects everyone, applying a specific Network Policy to a user (or the user holding the ACCOUNTADMIN role) allows for stricter overrides for sensitive access.  
2. **Which protocol does Snowflake use to support Federated Authentication and Single Sign-On (SSO)?**  
   * A. OAuth 2.0  
   * B. SAML 2.0  
   * C. OpenID Connect  
   * D. Active Directory LDAP  
   * **Answer: B.** Snowflake specifically uses SAML 2.0 for federated authentication with Identity Providers (IdP).  
3. **GRI is setting up an automated Python script to load data every night. The script cannot interact with a web browser for MFA. What is the recommended authentication method?**  
   * A. Username and Password in the script  
   * B. Key Pair Authentication  
   * C. Federated SSO  
   * D. Reusable OAuth Token  
   * **Answer: B.** Key Pair Authentication is the best practice for service accounts and automated tools that don't support interactive login.  
4. **A GRI employee is prompted for a Duo Mobile push notification when logging in. Which feature is being utilized?**  
   * A. SSO  
   * B. Federated Authentication  
   * C. Multi-Factor Authentication (MFA)  
   * D. Network Policy  
   * **Answer: C.** Snowflake’s built-in MFA is powered by Duo Security.  
5. **When a Network Policy is applied at both the Account level and the User level, which one takes precedence?**  
   * A. The Account-level policy  
   * B. The User-level policy  
   * C. Both are combined (the most restrictive applies)  
   * D. Neither; they conflict and cause an error  
   * **Answer: B.** User-level network policies always override Account-level policies.  
6. **GRI wants to disable the ability for users to use a password and force them to use Okta for all logins. What must they configure?**  
   * A. A Network Policy blocking all IPs  
   * B. Disable MFA  
   * C. Advanced SAML configuration with the SAML\_IDENTITY\_PROVIDER parameter  
   * D. Use the SECURITYADMIN role to delete all passwords  
   * **Answer: C.** Configuring Federated Auth/SSO via SAML allows the organization to manage authentication through their IdP.  
7. **Can a Snowflake user have more than one public key assigned for Key Pair Authentication?**  
   * A. No, only one key is allowed per user.  
   * B. Yes, up to two public keys (RSA\_PUBLIC\_KEY and RSA\_PUBLIC\_KEY\_2).  
   * C. Yes, up to ten public keys.  
   * D. Only if they have the ACCOUNTADMIN role.  
   * **Answer: B.** Snowflake allows two keys to facilitate key rotation without downtime.  
8. **An admin at GRI creates a Network Policy but forgets to add their own IP to the "Allowed" list before applying it to the account. What happens?**  
   * A. Snowflake automatically adds the admin's current IP.  
   * B. The admin is locked out, and only Snowflake Support can fix it.  
   * C. Snowflake blocks the action and issues an error message.  
   * D. The policy is created but not activated.  
   * **Answer: C.** Snowflake includes a safety check; it will not let you apply a policy that blocks your own current connection.  
9. **Which of the following is NOT a benefit of using Federated Authentication?**  
   * A. Users only have to remember one password.  
   * B. Snowflake manages the user's password complexity rules.  
   * C. Terminated employees lose access to Snowflake immediately when deactivated in the IdP.  
   * D. Reduced administrative overhead for managing user credentials in Snowflake.  
   * **Answer: B.** In Federated Auth, the Identity Provider (IdP) manages the password rules, not Snowflake.  
10. **GRI wants to use a 3rd party tool (like a Data Catalog) that needs to access Snowflake metadata but shouldn't have a permanent password. Which method is most secure?**  
    * A. Key Pair Authentication  
    * B. OAuth  
    * C. MFA  
    * D. Direct Share  
    * **Answer: B.** OAuth allows 3rd party applications to access Snowflake via tokens without sharing user credentials.

### **🔹 Sub-topic 2.2: Entities and Roles**

*(10 Questions)*

1. **GRI’s CFO needs to view billing statements and manage credit usage across all accounts in the organization. Which role should they be granted?**  
   * A. ACCOUNTADMIN  
   * B. ORGADMIN  
   * C. SYSADMIN  
   * D. SECURITYADMIN  
   * **Answer: B.** ORGADMIN is the organizational-level role for managing accounts and viewing multi-account billing.  
2. **A new developer needs to create a new Database and a Virtual Warehouse. Which system role is primarily responsible for this?**  
   * A. USERADMIN  
   * B. SECURITYADMIN  
   * C. SYSADMIN  
   * D. PUBLIC  
   * **Answer: C.** SYSADMIN is the role intended for creating and managing all "functional" objects like warehouses and databases.  
3. **GRI uses a custom role called SALES\_ANALYST. They want to ensure that SYSADMIN can manage the tables created by this role. How should they set this up?**  
   * A. Grant SYSADMIN to the SALES\_ANALYST role.  
   * B. Grant the SALES\_ANALYST role to SYSADMIN.  
   * C. Give SYSADMIN the ACCOUNTADMIN role.  
   * D. This happens automatically and requires no setup.  
   * **Answer: B.** In the role hierarchy, granting a lower role to a higher role allows the higher role to inherit all permissions.  
4. **Which role is the only one that can manage the ORGADMIN role?**  
   * A. ACCOUNTADMIN  
   * B. SECURITYADMIN  
   * C. ORGADMIN (it is self-managing)  
   * D. Only Snowflake Support  
   * **Answer: C.** Only a user with the ORGADMIN role can grant the ORGADMIN role to other users.  
5. **A user at GRI has been granted both ANALYST and DEVELOPER roles. When they log in, which permissions do they have?**  
   * A. Both roles' permissions combined automatically.  
   * B. Only the permissions of the PUBLIC role until they switch roles.  
   * C. Only the permissions of their "Primary Role" designated in their user profile.  
   * D. No permissions until they use the USE ROLE command.  
   * **Answer: C.** Every user has a default/primary role. While they can switch, their session starts with that primary role.  
6. **Who is the "Owner" of an object in Snowflake's Discretionary Access Control (DAC) model?**  
   * A. The user who created the object.  
   * B. The ACCOUNTADMIN role.  
   * C. The role that was active when the object was created.  
   * D. The SYSADMIN role.  
   * **Answer: C.** Ownership is tied to a **Role**, not a User.  
7. **GRI wants to prevent a data engineer from granting access to their own tables and instead have a central admin manage all grants. What should they implement?**  
   * A. A standard schema.  
   * B. A Managed Access Schema.  
   * C. Remove the SYSADMIN role.  
   * D. Use a Reader Account.  
   * **Answer: B.** In a Managed Access Schema, object owners lose the ability to grant permissions; it is centralized to the schema owner.  
8. **Which system role is best suited for creating and dropping users and roles, but should NOT have access to query business data?**  
   * A. ACCOUNTADMIN  
   * B. SECURITYADMIN  
   * C. USERADMIN  
   * D. SYSADMIN  
   * **Answer: C.** USERADMIN is dedicated to user and role management to help separate concerns.  
9. **If a role is revoked from a user while they are in an active session using that role, what happens?**  
   * A. The session is immediately terminated.  
   * B. The user can continue using the role until the session ends or they switch roles.  
   * C. The user is downgraded to the PUBLIC role immediately.  
   * D. Snowflake freezes the account.  
   * **Answer: B.** Revocations do not affect currently active sessions; they apply to the next session or role switch.  
10. **The SECURITYADMIN role inherits the privileges of which other role?**  
    * A. ACCOUNTADMIN  
    * B. USERADMIN  
    * C. SYSADMIN  
    * D. PUBLIC  
    * **Answer: B.** SECURITYADMIN is a parent to USERADMIN in the default system hierarchy.

### **🔹 Sub-topic 2.3: Data Governance**

*(10 Questions)*

1. **GRI needs to hide the first 12 digits of customer credit card numbers for all roles except BILLING\_ADMIN. Which feature should they use?**  
   * A. Row Access Policy  
   * B. Dynamic Data Masking  
   * C. Secure View  
   * D. Object Tagging  
   * **Answer: B.** Dynamic Data Masking is a column-level security feature used to mask sensitive data.  
2. **A manager at GRI should only see sales records from the "North" region. Which feature should be used to enforce this?**  
   * A. Column-level masking  
   * B. Row Access Policy  
   * C. Information Schema  
   * D. Network Policy  
   * **Answer: B.** Row Access Policies filter which rows are returned based on the user's role or attributes.  
3. **GRI wants to track which users have queried a specific table containing PII over the last 6 months. Where can they find this?**  
   * A. INFORMATION\_SCHEMA.QUERY\_HISTORY  
   * B. SNOWFLAKE.ACCOUNT\_USAGE.ACCESS\_HISTORY  
   * C. SNOWFLAKE.ACCOUNT\_USAGE.QUERY\_HISTORY  
   * D. Snowsight Dashboards only  
   * **Answer: B.** ACCESS\_HISTORY specifically tracks which columns and tables were accessed by users.  
4. **Which view allows an admin to see a list of all tables in the database that are tagged as "High Sensitivity"?**  
   * A. INFORMATION\_SCHEMA.TABLES  
   * B. SNOWFLAKE.ACCOUNT\_USAGE.TAG\_REFERENCES  
   * C. SNOWFLAKE.ACCOUNT\_USAGE.OBJECT\_ATTRIBUTES  
   * D. SNOWFLAKE.CORE.TAG\_LIST  
   * **Answer: B.** TAG\_REFERENCES allows you to track where tags are applied across the account.  
5. **When sharing a view with an external partner, why should GRI use a "Secure View"?**  
   * A. To encrypt the data during transit.  
   * B. To prevent the partner from seeing the underlying table names and JOIN logic via GET\_DDL.  
   * C. To make the view read-only.  
   * D. To improve the query performance for the partner.  
   * **Answer: B.** Secure views prevent users from viewing the definition of the view or using optimizations that might leak data patterns.  
6. **What is the maximum number of days of historical data available in the ACCOUNT\_USAGE schema?**  
   * A. 14 days  
   * B. 30 days  
   * C. 180 days  
   * D. 365 days  
   * **Answer: D.** ACCOUNT\_USAGE views retain data for up to 1 year.  
7. **GRI wants to automatically apply a masking policy to any column that is tagged with the string 'PII'. This is called:**  
   * A. Dynamic Masking  
   * B. Tag-Based Masking  
   * C. Row-Level Security  
   * D. Conditional Masking  
   * **Answer: B.** Tag-Based Masking allows policies to be applied automatically to any object carrying a specific tag.  
8. **Which of the following describes "Data Lineage" in Snowflake?**  
   * A. The history of which users logged into the account.  
   * B. The path of how data flowed from source objects to target objects.  
   * C. The geographical location where data is stored.  
   * D. The list of versions of a stored procedure.  
   * **Answer: B.** Access History and Object Dependencies help define data lineage.  
9. **Which schema contains real-time metadata but has no historical retention beyond currently existing objects?**  
   * A. SNOWFLAKE.ACCOUNT\_USAGE  
   * B. INFORMATION\_SCHEMA  
   * C. PUBLIC  
   * D. METADATA\_SCHEMA  
   * **Answer: B.** INFORMATION\_SCHEMA provides a real-time view of current objects.  
10. **Can a masking policy be applied to a column that is part of a Cluster Key?**  
    * A. Yes, without restriction.  
    * B. No, Snowflake does not allow masking on columns used for clustering.  
    * C. Yes, but only for ACCOUNTADMIN.  
    * D. Only if the table is a Transient table.  
    * **Answer: B.** Masking policies cannot be applied to columns used as clustering keys.

# **SnowPro Core (COF-C02) Practice & Scenarios**

## **Domain 3.0: Performance and Cost Optimization Concepts (Weightage: 16%)**

### **🏢 Business Scenario: Global Retail Ingest (GRI)**

*GRI’s Snowflake environment is now fully active. However, the CFO is concerned about rising credit consumption, and the Data Science team is complaining that their complex joins are "running out of memory." The BI team is also seeing delays during the Monday morning dashboard rush. You need to use Snowflake's performance tools to optimize speed and cost.*

### **🔹 Sub-topic 3.1: Explain the use of the Query Profile**

*(10 Questions)*

1. **An analyst at GRI notices a query is running significantly slower than usual. Upon checking the Query Profile, they see "Remote Disk Spilling." What does this indicate?**  
   * A. The query is perfectly optimized.  
   * B. The warehouse ran out of memory (RAM) and local SSD, and had to use slower cloud storage.  
   * C. The result was fetched from the Result Cache.  
   * D. There is a network issue between the warehouse and the database.  
   * **Answer: B.** Remote spilling is the slowest form of data processing and indicates the warehouse size is too small for the query's memory requirements.  
2. **In the Query Profile, what does the "Partitions Scanned" vs "Partitions Total" metric help you evaluate?**  
   * A. Warehouse sizing efficiency.  
   * B. Pruning efficiency.  
   * C. Data compression ratios.  
   * D. Network latency.  
   * **Answer: B.** If a query scans many partitions but returns few rows, pruning is inefficient, possibly suggesting a need for a clustering key.  
3. **GRI wants to see why a query from 3 days ago was slow. Where can they find the Query Profile for historical queries?**  
   * A. Only in the active session.  
   * B. In the Query History page of Snowsight.  
   * C. In the INFORMATION\_SCHEMA.QUERY\_HISTORY view.  
   * D. It is deleted immediately after the query finishes.  
   * **Answer: B.** Snowsight maintains the visual Query Profile for queries run within the last 14 days.  
4. **If a Query Profile shows that 80% of the time was spent in "Query Compilation," what is likely the cause?**  
   * A. Large data volume.  
   * B. Highly complex SQL with many joins or nested views.  
   * C. Small warehouse size.  
   * D. Data spilling to remote disk.  
   * **Answer: B.** Compilation happens in the Cloud Services layer and is driven by query complexity, not data volume.  
5. **Which operator in the Query Profile tree represents the final step where data is sent back to the user?**  
   * A. TableScan  
   * B. Join  
   * C. Result  
   * D. Aggregate  
   * **Answer: C.** The Result operator represents the final output of the query.  
6. **A GRI admin sees "Local Disk Spilling" in a profile. What is the immediate recommendation?**  
   * A. Increase the warehouse size (Scale Up).  
   * B. Add more clusters (Scale Out).  
   * C. Turn on Search Optimization.  
   * D. Do nothing; this is normal.  
   * **Answer: A.** Local spilling occurs when RAM is exhausted. Scaling up provides more RAM per node.  
7. **The Query Profile shows "Metadata Only" for a specific query. This means:**  
   * A. The data was corrupted.  
   * B. The query was answered entirely by the Cloud Services layer without a warehouse.  
   * C. The warehouse was too small to read the data.  
   * D. The user doesn't have permissions to see the data.  
   * **Answer: B.** Simple metadata queries (like COUNT(\*)) don't require compute.  
8. **If the "Exploding Joins" warning appears in the Query Profile, what is happening?**  
   * A. The warehouse is crashing.  
   * B. The join is producing significantly more rows than the input tables (likely a Cartesian product).  
   * C. The query is too fast for the profile to track.  
   * D. The tables are not clustered.  
   * **Answer: B.** Exploding joins indicate a logic error in the SQL JOIN condition.  
9. **Which metric in the Query Profile indicates how much data was sent over the network between warehouse nodes?**  
   * A. Bytes scanned  
   * B. Bytes sent over the network  
   * C. Bytes spilled to local disk  
   * D. Cloud services execution time  
   * **Answer: B.** This helps identify if data shuffling between nodes is causing a bottleneck.  
10. **Can you compare two query profiles side-by-side in Snowflake?**  
    * A. No, only one at a time.  
    * B. Yes, by selecting multiple queries in Query History and choosing "Compare."  
    * C. Yes, but only in the Business Critical edition.  
    * D. Only if they were run by the same user.  
    * **Answer: B.** Snowsight allows comparing execution plans to see why performance differs.

### **🔹 Sub-topic 3.2: Virtual Warehouse Configuration**

*(10 Questions)*

1. **GRI's BI dashboard is used by 500 people simultaneously. Queries are queuing. What should they do?**  
   * A. Increase the warehouse size from Small to Large.  
   * B. Enable a Multi-cluster warehouse and set it to Auto-scale.  
   * C. Turn off Auto-suspend.  
   * D. Switch to a Transient table.  
   * **Answer: B.** Multi-cluster warehouses solve concurrency (queuing) by scaling "Out."  
2. **A warehouse is configured with MIN\_CLUSTER\_COUNT \= 2 and MAX\_CLUSTER\_COUNT \= 2. What mode is this?**  
   * A. Auto-scale  
   * B. Maximized  
   * C. Economy  
   * D. Standard  
   * **Answer: B.** When Min and Max are equal, the warehouse is in Maximized mode.  
3. **In "Economy" scaling policy, when does Snowflake start a new cluster?**  
   * A. Immediately when a query is queued.  
   * B. Only if there is enough load to keep the cluster busy for at least 6 minutes.  
   * C. When the first cluster reaches 50% capacity.  
   * D. Every hour on the hour.  
   * **Answer: B.** Economy policy prioritizes cost savings over immediate performance.  
4. **GRI scales their warehouse from X-Small to Small. How much does the credit cost per hour change?**  
   * A. It stays the same.  
   * B. It doubles.  
   * C. It increases by 1 credit.  
   * D. It triples.  
   * **Answer: B.** Credit costs double with each T-shirt size increase.  
5. **Which setting prevents a single user from running a query that consumes credits for 24 hours straight?**  
   * A. AUTO\_SUSPEND  
   * B. STATEMENT\_TIMEOUT\_IN\_SECONDS  
   * C. AUTO\_RESUME  
   * D. MAX\_CONCURRENCY\_LEVEL  
   * **Answer: B.** This parameter kills queries that exceed a specific time limit.  
6. **A warehouse is set to AUTO\_SUSPEND \= 60. A query finishes at 10:00:00. No other queries arrive. When does it stop charging credits?**  
   * A. 10:00:00  
   * B. 10:01:00  
   * C. 10:05:00  
   * D. It never stops unless manually suspended.  
   * **Answer: B.** It suspends after 60 seconds of inactivity.  
7. **GRI wants to ensure that a warehouse is always available for a high-priority CEO dashboard. Which setting is most critical?**  
   * A. AUTO\_SUSPEND \= 0  
   * B. AUTO\_RESUME \= TRUE  
   * C. SCALING\_POLICY \= 'ECONOMY'  
   * D. WAREHOUSE\_SIZE \= '4XL'  
   * **Answer: B.** Auto-resume ensures the warehouse wakes up as soon as the CEO opens the dashboard.  
8. **Can a Virtual Warehouse be resized while it is actively running queries?**  
   * A. No, it must be suspended first.  
   * B. Yes, and the new size applies to all currently running queries.  
   * C. Yes, but the new size only applies to *new* queries submitted after the change.  
   * D. Only if it is a Multi-cluster warehouse.  
   * **Answer: C.** Resizing is dynamic but doesn't affect queries already in progress.  
9. **Which role is required to change the size of a warehouse?**  
   * A. Any user with USAGE on the warehouse.  
   * B. Only ACCOUNTADMIN.  
   * C. A role with the MODIFY privilege on the warehouse.  
   * D. Only the ORGADMIN.  
   * **Answer: C.** MODIFY (or OWNERSHIP) is required to alter warehouse parameters.  
10. **What is the primary difference between a "Standard" and "Snowpark-Optimized" warehouse?**  
    * A. Snowpark-Optimized has more CPU.  
    * B. Snowpark-Optimized has 16x more memory (RAM) per node.  
    * C. Standard doesn't support Python.  
    * D. Snowpark-Optimized is free for the first hour.  
    * **Answer: B.** Snowpark-Optimized warehouses are designed for memory-intensive ML workloads.

### **🔹 Sub-topic 3.3: Performance Tools**

*(10 Questions)*

1. **Which feature allows Snowflake to automatically offload parts of a query to a serverless pool of compute to speed it up?**  
   * A. Multi-cluster scaling  
   * B. Query Acceleration Service (QAS)  
   * C. Automatic Clustering  
   * D. Search Optimization  
   * **Answer: B.** QAS acts like an "extra boost" for specific query types without resizing the warehouse.  
2. **GRI notices that a specific warehouse has a "Load Monitoring" chart showing a consistent red bar (Queued queries). What is the recommended action to improve concurrency?**  
   * A. Increase warehouse size (Scale Up).  
   * B. Increase Max Clusters (Scale Out).  
   * C. Decrease Auto-suspend time.  
   * D. Re-cluster the tables.  
   * **Answer: B.** Queuing is a sign that there aren't enough clusters to handle the volume of queries.  
3. **Does the Query Acceleration Service (QAS) cost additional credits?**  
   * A. No, it is included in the warehouse price.  
   * B. Yes, it is billed as a serverless cost.  
   * C. Only in the Business Critical edition.  
   * D. Only if the query takes longer than 10 minutes.  
   * **Answer: B.** QAS is a serverless feature billed based on usage.  
4. **When comparing "Scaling Up" vs "Scaling Out," which one is better for a single query that processes 100TB of data?**  
   * A. Scaling Out  
   * B. Scaling Up  
   * C. Both are equal.  
   * D. Neither; use a result cache.  
   * **Answer: B.** Scaling "Up" (larger size) gives that single query more resources to finish faster.  
5. **Which view in the SNOWFLAKE database helps GRI monitor warehouse load history over the last year?**  
   * A. WAREHOUSE\_LOAD\_HISTORY  
   * B. QUERY\_HISTORY  
   * C. METERING\_HISTORY  
   * D. LOAD\_METRICS\_YEARLY  
   * **Answer: A.** This view provides average running and queued queries over time.  
6. **What is the maximum number of clusters a Multi-cluster warehouse can have?**  
   * A. 5  
   * B. 10 (unless a limit increase is requested)  
   * C. 50  
   * D. Unlimited  
   * **Answer: B.** The default limit is 10 clusters.  
7. **A query is eligible for QAS. How can a user verify if QAS actually helped the query?**  
   * A. By looking at the Query Profile "Query Acceleration" stats.  
   * B. By checking their credit bill.  
   * C. By running DESCRIBE WAREHOUSE.  
   * D. It is impossible to know.  
   * **Answer: A.** The profile shows how many partitions were offloaded to the service.  
8. **GRI wants to optimize their "Standard" scaling policy to be more aggressive in shutting down idle clusters. What should they do?**  
   * A. They cannot; "Standard" is fixed.  
   * B. Switch to "Economy" policy.  
   * C. Use a Resource Monitor.  
   * D. Increase the Max Cluster count.  
   * **Answer: B.** Economy policy is more conservative about starting clusters and more aggressive about stopping them.  
9. **If a warehouse is resized from Large to Small while a Large query is running, what size does the running query use?**  
   * A. It is immediately killed.  
   * B. It continues running on the Large resources until finished.  
   * C. It is throttled to Small speed instantly.  
   * D. It restarts automatically on the Small warehouse.  
   * **Answer: B.** Running queries are not interrupted by resizing operations.  
10. **Which tool would you use to find the "peak" concurrency hour for your Snowflake account?**  
    * A. Query Profile  
    * B. Warehouse Load Monitoring (Snowsight)  
    * C. Resource Monitor  
    * D. Data Marketplace  
    * **Answer: B.** The load monitoring charts show concurrency spikes visually.

### **🔹 Sub-topic 3.4: Query Performance Optimization**

*(10 Questions)*

1. **A user runs SELECT \* FROM table twice within 5 minutes. The second time is instant. Which cache was used?**  
   * A. Metadata Cache  
   * B. Warehouse Cache (SSD)  
   * C. Result Cache  
   * D. Snowpark Cache  
   * **Answer: C.** Result cache stores query results for 24 hours.  
2. **Under what condition is the Result Cache purged or bypassed?**  
   * A. After 24 hours.  
   * B. If the underlying data in the table changes.  
   * C. If the user changes their active role (sometimes).  
   * D. All of the above.  
   * **Answer: D.** Result cache is very sensitive to data and context changes.  
3. **GRI has a table with 1 Billion rows. They frequently run queries like WHERE User\_Email \= 'abc@xyz.com'. What optimization is best?**  
   * A. Materialized View  
   * B. Search Optimization Service (SOS)  
   * C. Scaling Up to 6XL  
   * D. Zero-copy Cloning  
   * **Answer: B.** SOS is specifically for "point lookups" (finding specific values in large tables).  
4. **What is a major limitation of Materialized Views in Snowflake?**  
   * A. They cannot be queried.  
   * B. They only work on a single table (no joins allowed in the definition).  
   * C. They don't update automatically.  
   * D. They are free to maintain.  
   * **Answer: B.** Snowflake Materialized Views currently do not support JOINS in their definition.  
5. **A warehouse is suspended. Which cache is immediately lost?**  
   * A. Result Cache  
   * B. Metadata Cache  
   * C. Warehouse/Local SSD Cache  
   * D. All of them  
   * **Answer: C.** The local SSD cache is tied to the running compute nodes.  
6. **GRI uses a Clustering Key on their Sales table. What background service maintains this clustering?**  
   * A. Query Acceleration Service  
   * B. Automatic Clustering (Serverless)  
   * C. Snowpipe  
   * D. Cloud Services Optimizer  
   * **Answer: B.** Automatic Clustering is a serverless maintenance service.  
7. **How can a user "force" Snowflake to bypass the Result Cache for testing purposes?**  
   * A. Suspend the warehouse.  
   * B. Use the parameter USE\_CACHED\_RESULT \= FALSE.  
   * C. Change the table name.  
   * D. Log out and log back in.  
   * **Answer: B.** This session parameter disables the result cache.  
8. **Which optimization technique uses "shredding" to improve performance on VARIANT (JSON) columns?**  
   * A. Clustering  
   * B. Automatic optimization of semi-structured data.  
   * C. Materialized Views.  
   * D. Search Optimization.  
   * **Answer: B.** Snowflake automatically optimizes JSON storage to make querying as fast as relational data.  
9. **When should GRI use a "Materialized View" instead of a "Standard View"?**  
   * A. When the query is simple and runs fast.  
   * B. When the query involves complex aggregations and the results are needed frequently.  
   * C. When they want to hide SQL logic.  
   * D. When they want to avoid storage costs.  
   * **Answer: B.** MVs trade storage and maintenance costs for significantly faster query speeds.  
10. **Does "Search Optimization" require a warehouse to be running to serve results?**  
    * A. No, it is serverless.  
    * B. Yes, the query still runs on a Virtual Warehouse, but it uses the SOS index to prune data.  
    * C. Only if the table is larger than 10TB.  
    * D. Only for the ACCOUNTADMIN role.  
    * **Answer: B.** SOS helps the warehouse prune data; it doesn't replace the warehouse.

### **🔹 Sub-topic 3.5: Cost Optimization Concepts**

*(10 Questions)*

1. **GRI wants to be notified when their "Dev\_WH" consumes more than 500 credits. Which feature should they use?**  
   * A. Resource Monitor  
   * B. Snowflake Budget  
   * C. ACCOUNT\_USAGE views  
   * D. Storage Monitor  
   * **Answer: A.** Resource monitors are the primary tool for setting credit quotas and alerts.  
2. **A Resource Monitor is set to "Suspend Immediately" at 100%. What happens to queries currently running when the limit is hit?**  
   * A. They are allowed to finish.  
   * B. They are canceled immediately.  
   * C. They are moved to another warehouse.  
   * D. They are paused and resumed next month.  
   * **Answer: B.** "Suspend Immediately" kills all active queries.  
3. **Which Snowflake cost represents the "Average daily storage" across the month?**  
   * A. Compute Cost  
   * B. Storage Cost  
   * C. Data Transfer Cost  
   * D. Cloud Services Cost  
   * **Answer: B.** Storage is billed based on average monthly usage in Terabytes.  
4. **GRI sees a charge for "Cloud Services" on their bill. Under what rule are they charged for this?**  
   * A. It is always 10% of the bill.  
   * B. They are only charged if Cloud Services usage exceeds 10% of their total daily compute.  
   * C. It is a flat fee of $100/month.  
   * D. Only if they use the ORGADMIN role.  
   * **Answer: B.** Snowflake provides a 10% credit for cloud services.  
5. **Which view provides a 365-day history of every credit spent by every warehouse in the account?**  
   * A. INFORMATION\_SCHEMA.WAREHOUSE\_METERING\_HISTORY  
   * B. SNOWFLAKE.ACCOUNT\_USAGE.WAREHOUSE\_METERING\_HISTORY  
   * C. SNOWFLAKE.CORE.BILLING\_REPORT  
   * D. METERING\_DAILY  
   * **Answer: B.** ACCOUNT\_USAGE contains the 1-year historical view.  
6. **GRI wants to assign costs to the "Marketing" department. How should they label their warehouses?**  
   * A. Using Object Tags (e.g., Cost\_Center \= 'Marketing').  
   * B. By naming the warehouse "Marketing\_WH".  
   * C. By creating a separate Snowflake account for Marketing.  
   * D. Using a Resource Monitor named "Marketing".  
   * **Answer: A.** Tagging objects is the best practice for cost attribution and reporting.  
7. **Does "Fail-safe" storage incur a cost?**  
   * A. No, it is a free service provided by Snowflake.  
   * B. Yes, it is billed at the same rate as standard storage.  
   * C. Only if you actually recover data from it.  
   * D. Only for the Standard edition.  
   * **Answer: B.** Data in Fail-safe contributes to your total monthly storage bill.  
8. **Which of the following is a "Serverless" cost in Snowflake?**  
   * A. Virtual Warehouse usage  
   * B. Snowpipe data ingestion  
   * C. Data transfer to another cloud region  
   * D. SSO configuration  
   * **Answer: B.** Snowpipe, Automatic Clustering, and MV maintenance are serverless costs.  
9. **GRI wants to prevent an accidental "infinite loop" query from costing $10,000. What is the best safety measure?**  
   * A. Set a STATEMENT\_TIMEOUT\_IN\_SECONDS at the account or warehouse level.  
   * B. Delete the user's account.  
   * C. Use a Transient table.  
   * D. Disable Auto-resume.  
   * **Answer: A.** This ensures queries are killed after a reasonable amount of time.  
10. **A Snowflake "Budget" (the specific feature) can monitor:**  
    * A. Only warehouses.  
    * B. Only storage.  
    * C. A custom group of Snowflake objects (Warehouses, Pipes, MVs, etc.).  
    * D. Only the ACCOUNTADMIN salary.  
    * **Answer: C.** Budgets are flexible and can track groups of objects to alert on total spend.

# **SnowPro Core (COF-C02) Practice & Scenarios**

## **Domain 4.0: Data Loading and Unloading (Weightage: 12%)**

### **🏢 Business Scenario: Global Retail Ingest (GRI)**

*GRI needs to ingest various data sources: 1\) Massive daily logs from an AWS S3 bucket, 2\) Small, ad-hoc CSV files from regional manager laptops, and 3\) Continuous sales data from their web app. They also need to unload monthly financial summaries to an external SFTP server (via an S3 bucket) for their partners. You are the architect responsible for the data pipeline.*

### **🔹 Sub-topic 4.1: Data Loading Concepts & Best Practices**

*(10 Questions)*

1. **GRI wants to load data from an AWS S3 bucket. Which type of stage is required?**  
   * A. User Stage  
   * B. Table Stage  
   * C. Named Internal Stage  
   * D. External Stage  
   * **Answer: D.** External stages point to cloud storage locations (S3, GCS, Azure) outside of Snowflake.  
2. **A data engineer at GRI is loading files that are 2 GB each. What is the Snowflake best practice for optimal load performance?**  
   * A. Load them as-is to save time on splitting.  
   * B. Split the files into 100-250 MB compressed chunks.  
   * C. Convert the files to a single large JSON VARIANT.  
   * D. Use a 4XL warehouse to process the large file.  
   * **Answer: B.** Snowflake processes data in parallel; smaller, balanced files allow multiple threads to work simultaneously.  
3. **GRI's web app sends sales data every minute. Which feature provides the most cost-effective, near real-time ingestion?**  
   * A. Bulk loading with COPY INTO every minute.  
   * B. Snowpipe.  
   * C. INSERT INTO statements for every sale.  
   * D. External Tables.  
   * **Answer: B.** Snowpipe is designed for continuous, near real-time ingestion using serverless compute.  
4. **Which internal stage is automatically available to every user and does not need to be created?**  
   * A. Named Internal Stage  
   * B. User Stage  
   * C. Table Stage  
   * D. Schema Stage  
   * **Answer: B.** The User Stage (@\~) is unique to each user and created automatically.  
5. **When loading data, which architectural layer handles the "metadata" about which files have already been loaded to prevent duplication?**  
   * A. Storage Layer  
   * B. Compute Layer (Virtual Warehouse)  
   * C. Cloud Services Layer  
   * D. Network Layer  
   * **Answer: C.** Cloud Services manages load metadata (load history) to prevent re-loading the same file.  
6. **GRI wants to load data from S3 without providing secret keys in every SQL command. What object should they use to store credentials securely?**  
   * A. Secret Store  
   * B. Storage Integration  
   * C. Credential Schema  
   * D. Security Role  
   * **Answer: B.** A Storage Integration object allows Snowflake to access cloud storage via IAM roles instead of credentials.  
7. **A warehouse is suspended. Can Snowpipe still load data?**  
   * A. No, it requires an active warehouse.  
   * B. Yes, it uses Snowflake-managed serverless compute.  
   * C. Only if it is the Standard edition.  
   * D. Only if the AUTO\_RESUME setting is on.  
   * **Answer: B.** Snowpipe is a serverless feature and does not depend on the user's Virtual Warehouses.  
8. **GRI organizes their S3 bucket by date: /logs/2024/01/01/. How does this help Snowflake?**  
   * A. It doesn't; Snowflake ignores folder structures.  
   * B. It allows for "path-based" loading to limit the number of files scanned in a COPY command.  
   * C. It automatically clusters the table by date.  
   * D. It makes the data encrypted.  
   * **Answer: B.** Using paths (prefixes) allows Snowflake to efficiently filter files during the load process.  
9. **Which file format is NOT natively supported for direct loading into Snowflake?**  
   * A. Parquet  
   * B. Avro  
   * C. JSON  
   * D. HTML  
   * **Answer: D.** Snowflake supports CSV, JSON, XML, Avro, Parquet, and ORC.  
10. **Does Snowflake automatically detect the compression type of a file during the load process?**  
    * A. No, you must specify it in the FILE\_FORMAT.  
    * B. Yes, for supported types like GZIP, BZIP2, and ZSTD.  
    * C. Only for CSV files.  
    * D. Only if using an External Stage.  
    * **Answer: B.** Snowflake can auto-detect compression for most standard formats.

### **🔹 Sub-topic 4.2: Data Loading Commands**

*(10 Questions)*

1. **A regional manager wants to upload a CSV from their laptop to a Snowflake internal stage. Which command must they use?**  
   * A. COPY INTO  
   * B. GET  
   * C. PUT  
   * D. INSERT  
   * **Answer: C.** PUT is used to upload local files to Snowflake internal stages.  
2. **GRI wants to load data from a stage but needs to skip the first column and convert the second column to uppercase. Can they do this in a single command?**  
   * A. No, they must load to a staging table first.  
   * B. Yes, using a transformation inside the COPY INTO statement.  
   * C. Only if using Snowpipe.  
   * D. Only for JSON data.  
   * **Answer: B.** COPY INTO supports basic transformations like column reordering and simple functions.  
3. **Which command is used to troubleshoot and view rows that failed to load during a COPY INTO operation?**  
   * A. LIST  
   * B. VALIDATE  
   * C. CHECK\_ERRORS  
   * D. SHOW LOADS  
   * **Answer: B.** VALIDATE allows you to inspect the errors of a previous load.  
4. **GRI wants to query a large set of log files in S3 without actually importing the data into Snowflake tables. What should they create?**  
   * A. Internal Table  
   * B. External Table  
   * C. Secure View  
   * D. Materialized View  
   * **Answer: B.** External tables allow querying files directly in cloud storage.  
5. **Which parameter in the COPY INTO command ensures that the file is deleted from the stage after a successful load?**  
   * A. ON\_ERROR \= 'DELETE'  
   * B. PURGE \= TRUE  
   * C. DELETE\_AFTER\_LOAD \= TRUE  
   * D. CLEANUP \= TRUE  
   * **Answer: B.** PURGE \= TRUE removes files from the stage upon successful completion.  
6. **A user attempts to run a PUT command in the Snowsight SQL Worksheet. What happens?**  
   * A. The file is uploaded to the user stage.  
   * B. It fails; PUT and GET are not supported in the web UI.  
   * C. It succeeds only for files under 50 MB.  
   * D. It requires the ACCOUNTADMIN role.  
   * **Answer: B.** PUT and GET must be executed via SnowSQL (CLI) or drivers.  
7. **What is the default behavior of COPY INTO if it encounters a single error in a file?**  
   * A. It skips the bad row and continues.  
   * B. It aborts the entire load operation (ABORT\_STATEMENT).  
   * C. It loads the bad row as a NULL.  
   * D. It pauses the warehouse.  
   * **Answer: B.** The default ON\_ERROR value is ABORT\_STATEMENT.  
8. **Which object stores the definition of a CSV's delimiter, header count, and escape characters for reuse?**  
   * A. Stage  
   * B. Table  
   * C. File Format  
   * D. Storage Integration  
   * **Answer: C.** File Formats are reusable objects for parsing rules.  
9. **GRI needs to reload a file that was loaded 20 days ago. The file is still in the stage. By default, what will COPY INTO do?**  
   * A. Reload it automatically.  
   * B. Skip it because it is in the load history.  
   * C. Fail with a "Duplicate File" error.  
   * D. Overwrite the existing table data.  
   * **Answer: B.** Snowflake tracks load history for 64 days and skips previously loaded files unless FORCE \= TRUE is used.  
10. **Which command defines the automated ingestion logic used by Snowpipe?**  
    * A. CREATE SNOWPIPE  
    * B. CREATE PIPE  
    * C. CREATE STAGE  
    * D. ALTER TABLE ... ENABLE SNOWPIPE  
    * **Answer: B.** CREATE PIPE defines the COPY INTO logic for Snowpipe.

### **🔹 Sub-topic 4.3: Data Unloading Concepts & Best Practices**

*(10 Questions)*

1. **GRI is unloading a 10 TB table. By default, how many files will Snowflake create?**  
   * A. Exactly one.  
   * B. One per micro-partition.  
   * C. Multiple files, to utilize parallel execution.  
   * D. None; unloading is a single-threaded process.  
   * **Answer: C.** Snowflake unloads data in parallel, creating multiple files for performance.  
2. **Which compression format is applied by default when unloading data from Snowflake?**  
   * A. ZIP  
   * B. GZIP  
   * C. ZSTD  
   * D. None (Plain Text)  
   * **Answer: B.** GZIP is the default compression for unloading.  
3. **GRI needs to export data to a partner who can only process a single large file. Which parameter should they use in COPY INTO \<location\>?**  
   * A. SINGLE \= TRUE  
   * B. FILES \= 1  
   * C. MAX\_FILE\_COUNT \= 1  
   * D. MERGE\_FILES \= TRUE  
   * **Answer: A.** SINGLE \= TRUE forces Snowflake to output a single file.  
4. **When unloading a table to a CSV, how are NULL values represented in the file by default?**  
   * A. As the word "NULL".  
   * B. As an empty string (,,).  
   * C. As a zero.  
   * D. They are skipped.  
   * **Answer: B.** By default, NULL values are unloaded as empty strings.  
5. **GRI wants to unload relational data into a JSON file format. Which function helps convert rows into JSON objects during the unload?**  
   * A. PARSE\_JSON  
   * B. OBJECT\_CONSTRUCT  
   * C. TO\_VARIANT  
   * D. CAST\_TO\_JSON  
   * **Answer: B.** OBJECT\_CONSTRUCT builds a JSON object from relational columns.  
6. **Is it possible to unload data directly to a local hard drive from the Snowsight UI?**  
   * A. Yes, using the "Export" button.  
   * B. No, you must unload to a stage first, then use GET.  
   * C. Only for tables under 1 GB.  
   * D. Only if using the SYSADMIN role.  
   * **Answer: B.** The COPY INTO \<location\> command requires a stage.  
7. **GRI wants to ensure that unloaded files do not exceed 500 MB. Which parameter should they set?**  
   * A. MAX\_FILE\_SIZE  
   * B. FILE\_SIZE\_LIMIT  
   * C. BLOCK\_SIZE  
   * D. CHUNK\_SIZE  
   * **Answer: A.** MAX\_FILE\_SIZE defines the upper limit for each unloaded file.  
8. **Which column property is NOT preserved when unloading data to a CSV file?**  
   * A. Column Name (unless headers are enabled)  
   * B. Data Type  
   * C. Constraints (Not Null, Primary Key)  
   * D. All of the above  
   * **Answer: D.** CSV files are plain text; they do not store metadata like data types or constraints.  
9. **Can a user unload data from a View?**  
   * A. No, only from physical tables.  
   * B. Yes, the COPY INTO \<location\> command accepts a SELECT statement.  
   * C. Only if it is a Materialized View.  
   * D. Only if the view is in the PUBLIC schema.  
   * **Answer: B.** You can unload the results of any query, including those from a view.  
10. **GRI wants to overwrite files in the stage that have the same name as the new unloaded files. Which parameter is needed?**  
    * A. OVERWRITE \= TRUE  
    * B. PURGE \= TRUE  
    * C. FORCE \= TRUE  
    * D. REPLACE \= TRUE  
    * **Answer: A.** OVERWRITE \= TRUE allows the unload to replace existing files in the stage.

### **🔹 Sub-topic 4.4: Data Unloading Commands**

*(10 Questions)*

1. **Which command is used to move files from a Snowflake Internal Stage to a local folder?**  
   * A. PUT  
   * B. DOWNLOAD  
   * C. GET  
   * D. COPY INTO  
   * **Answer: C.** GET is used to download files from internal stages.  
2. **GRI wants to verify the size and count of files they just unloaded into @my\_stage. Which command should they use?**  
   * A. SHOW FILES  
   * B. LIST  
   * C. DESCRIBE STAGE  
   * D. SELECT \* FROM @my\_stage  
   * **Answer: B.** LIST (or LS) shows the files in a stage.  
3. **Does the GET command support downloading files from an External Stage (e.g., S3)?**  
   * A. Yes.  
   * B. No, GET only works with Internal Stages.  
   * C. Only if the Storage Integration is configured.  
   * D. Only for the ACCOUNTADMIN role.  
   * **Answer: B.** GET is restricted to Snowflake internal storage.  
4. **Which command is used to export data from a Snowflake table to an external cloud bucket?**  
   * A. PUT  
   * B. GET  
   * C. COPY INTO \<location\>  
   * D. EXPORT TABLE  
   * **Answer: C.** COPY INTO \<location\> is the command for unloading.  
5. **When using LIST @stage, what information is provided?**  
   * A. File name, size, MD5 hash, and last modified date.  
   * B. The data inside the files.  
   * C. The users who accessed the files.  
   * D. The SQL command that created the files.  
   * **Answer: A.** LIST provides metadata about the files in the stage.  
6. **GRI is using SnowSQL. They want to download all files from a stage that end in .csv. What syntax should they use?**  
   * A. GET @my\_stage \*.csv file:///local/path;  
   * B. GET @my\_stage pattern='.\*\\.csv' file:///local/path;  
   * C. DOWNLOAD FROM @my\_stage WHERE type='csv';  
   * D. COPY INTO file:///local/path FROM @my\_stage;  
   * **Answer: B.** GET (and PUT) support regex patterns for file selection.  
7. **Which role is required to execute a GET command on a Named Internal Stage?**  
   * A. Any role with the USAGE privilege on the stage.  
   * B. Only the ACCOUNTADMIN.  
   * C. Only the user who created the stage.  
   * D. Only the SYSADMIN.  
   * **Answer: A.** USAGE (or READ depending on version/setting) is required to access files in a stage.  
8. **Can the LIST command filter results to show only files in a specific sub-folder of a stage?**  
   * A. No, it always shows the whole stage.  
   * B. Yes, by specifying the path (e.g., LIST @my\_stage/folder1/).  
   * C. Only if the stage is an External Stage.  
   * D. Only if using the SECURITYADMIN role.  
   * **Answer: B.** You can specify paths in the LIST command.  
9. **GRI unloads data to an internal stage using COPY INTO @\~. Where does the data go?**  
   * A. The User Stage.  
   * B. The Table Stage.  
   * C. The Named Stage.  
   * D. The Cloud Services metadata.  
   * **Answer: A.** @\~ denotes the User Stage.  
10. **A user unloads data to a stage and then runs a GET command. They notice the file name in the local folder has an additional .gz extension. Why?**  
    * A. Snowflake renamed it for security.  
    * B. The GET command compresses data during the download.  
    * C. Snowflake compresses unloaded files by default (GZIP).  
    * D. The user's operating system added it.  
    * **Answer: C.** Unloading defaults to GZIP compression.

# **SnowPro Core (COF-C02) Practice & Scenarios**

## **Domain 5.0: Data Transformations (Weightage: 18%)**

### **🏢 Business Scenario: Global Retail Ingest (GRI)**

*GRI has successfully loaded their data. Now, the engineering team needs to transform it. They have billions of rows of transaction history where they need fast estimates of unique customers. They also have a massive JSON dataset from their mobile app containing nested arrays of product views. Finally, they need to process thousands of PDF invoices stored in S3 using Snowflake's unstructured data features.*

### **🔹 Sub-topic 5.1: Working with Structured Data**

*(10 Questions)*

1. **GRI needs to find the approximate number of unique customers who visited their site across 5 billion rows. Which function provides the fastest result with minimal compute?**  
   * A. COUNT(DISTINCT customer\_id)  
   * B. APPROX\_COUNT\_DISTINCT(customer\_id)  
   * C. ESTIMATE\_UNIQUE\_VALUES(customer\_id)  
   * D. SUM(DISTINCT customer\_id)  
   * **Answer: B.** APPROX\_COUNT\_DISTINCT uses the HyperLogLog algorithm to provide a fast estimate, avoiding the heavy compute required for an exact count on massive datasets.  
2. **GRI wants to test a new machine learning model on exactly 10% of their 100 TB Transactions table. Which sampling method is most efficient for a table of this size?**  
   * A. Bernoulli (Row) Sampling  
   * B. System (Block) Sampling  
   * C. Random Aggregate Sampling  
   * D. Partitioned Sampling  
   * **Answer: B.** System (Block) sampling selects micro-partitions rather than individual rows, making it significantly faster for massive tables, though less "random" at the row level.  
3. **A developer at GRI writes a function in SQL that calculates a tax rate and returns a single decimal value. This is an example of a:**  
   * A. Stored Procedure  
   * B. Scalar UDF  
   * C. Tabular UDF (UDTF)  
   * D. External Function  
   * **Answer: B.** A Scalar User-Defined Function (UDF) returns exactly one value for each input row.  
4. **GRI wants to use a 3rd-party sentiment analysis API to process customer comments stored in Snowflake. Which feature allows Snowflake to send data to an external API and receive the result?**  
   * A. Stored Procedure  
   * B. UDTF  
   * C. External Function  
   * D. Snowpark  
   * **Answer: C.** External functions allow Snowflake to call services outside the platform, such as AWS Lambda or Azure Functions.  
5. **What is the main difference between a Stored Procedure and a UDF in Snowflake?**  
   * A. Procedures are only in JavaScript; UDFs are only in SQL.  
   * B. Procedures are called using CALL to perform actions; UDFs are used in SELECT statements to calculate values.  
   * C. Procedures return tables; UDFs return single values.  
   * D. UDFs can modify the database; Procedures cannot.  
   * **Answer: B.** Procedures are for procedural logic and administrative tasks (invoked with CALL), whereas UDFs are for data transformation within a query.  
6. **GRI wants to process only the "New" records that have been added to the Orders table since the last ETL run. Which object acts as a Change Data Capture (CDC) mechanism?**  
   * A. Task  
   * B. Stream  
   * C. Pipe  
   * D. Materialized View  
   * **Answer: B.** Streams track DML changes (inserts, updates, deletes) on a table so that only delta data can be processed.  
7. **A GRI task is scheduled to run every 5 minutes. However, the engineers don't want to waste credits if there is no new data. What is the best practice?**  
   * A. Set the task to "Auto-suspend".  
   * B. Use WHEN SYSTEM$STREAM\_HAS\_DATA('my\_stream') in the task definition.  
   * C. Use a smaller warehouse.  
   * D. Manually pause the task.  
   * **Answer: B.** The WHEN clause allows a task to check if a stream contains data before starting the warehouse.  
8. **Can a Snowflake Task be configured to trigger based on a message from an external queue like AWS SQS?**  
   * A. Yes, using the TRIGGER parameter.  
   * B. No, tasks can only be scheduled by time (Cron/Interval) or as a child of another task.  
   * C. Only in the Business Critical edition.  
   * D. Only if using Snowpark.  
   * **Answer: B.** Tasks are currently time-based or dependency-based (DAGs); they are not natively triggered by external events.  
9. **GRI has a "Task Tree" (DAG). If the Parent Task fails, what happens to the Child Task?**  
   * A. It runs anyway.  
   * B. It is skipped.  
   * C. it retries the Parent Task automatically.  
   * D. It waits indefinitely.  
   * **Answer: B.** By default, child tasks only execute if the predecessor task completes successfully.  
10. **A "Standard" stream on a table tracks which of the following?**  
    * A. Only Inserts  
    * B. Only Updates  
    * C. Inserts, Updates, and Deletes  
    * D. Only DDL changes (e.g., Alter Table)  
    * **Answer: C.** A standard stream tracks all DML changes, including the "before" and "after" state of updated rows.

### **🔹 Sub-topic 5.2: Working with Semi-Structured Data**

*(10 Questions)*

1. **GRI stores mobile app logs in a VARIANT column. What is the maximum size allowed for a single row in this column?**  
   * A. 1 MB  
   * B. 8 MB  
   * C. 16 MB (compressed)  
   * D. Unlimited  
   * **Answer: C.** The VARIANT data type has a limit of 16 MB per row.  
2. **Which character is used in Snowflake SQL to navigate through nested keys in a JSON object stored in a VARIANT column?**  
   * A. Dot (.)  
   * B. Colon (:)  
   * C. Arrow (\-\>)  
   * D. Dollar ($)  
   * **Answer: B.** The colon (:) is used to traverse semi-structured data (e.g., column\_name:key\_name).  
3. **GRI's JSON data contains an array of items: {"items": \[1, 2, 3\]}. Which function should they use to turn these 3 array elements into 3 separate rows?**  
   * A. SPLIT  
   * B. UNNEST  
   * C. FLATTEN  
   * D. EXPLODE  
   * **Answer: C.** The FLATTEN table function explodes compound values (arrays/objects) into multiple rows.  
4. **When using FLATTEN, which clause is commonly used to join the exploded rows back to the original source row?**  
   * A. INNER JOIN  
   * B. LATERAL  
   * C. CROSS APPLY  
   * D. OUTER APPLY  
   * **Answer: B.** LATERAL FLATTEN is the standard pattern for joining flattened data with the parent record.  
5. **GRI wants to convert a JSON string value "123.45" from a VARIANT column into an actual numeric type for a calculation. What is the correct syntax?**  
   * A. CAST(src:value AS NUMBER)  
   * B. src:value::number  
   * C. Both A and B  
   * D. CONVERT(src:value, number)  
   * **Answer: C.** Both CAST and the double-colon :: notation are valid for casting semi-structured data.  
6. **Does Snowflake automatically optimize the storage of semi-structured data (like Parquet or JSON) for better performance?**  
   * A. No, it is stored as a raw blob.  
   * B. Yes, it "shreds" common paths into hidden columns for faster access.  
   * C. Only if the table is Clustered.  
   * D. Only in the Enterprise edition.  
   * **Answer: B.** Snowflake performs automatic internal optimizations on VARIANT data to achieve performance similar to relational data.  
7. **Which function returns a JSON object created from multiple relational columns?**  
   * A. OBJECT\_CONSTRUCT  
   * B. ARRAY\_CONSTRUCT  
   * C. PARSE\_JSON  
   * D. TO\_JSON  
   * **Answer: A.** OBJECT\_CONSTRUCT takes key-value pairs or column names and builds a JSON object.  
8. **GRI is querying a VARIANT column and receives a value enclosed in double quotes: "Active". They want the raw string Active. What should they do?**  
   * A. Use TRIM().  
   * B. Cast the value to a string (e.g., ::string).  
   * C. Use REPLACE().  
   * D. Use STRIP\_QUOTES().  
   * **Answer: B.** Casting a VARIANT value to a string removes the JSON quotes.  
9. **If a GRI analyst queries a key that does not exist in a JSON object, what does Snowflake return?**  
   * A. An Error  
   * B. NULL  
   * C. An empty string  
   * D. The string "undefined"  
   * **Answer: B.** If a path/key does not exist, Snowflake returns a SQL NULL.  
10. **Which semi-structured format is NOT supported for direct loading into a VARIANT column?**  
    * A. XML  
    * B. Avro  
    * C. Parquet  
    * D. CSV  
    * **Answer: D.** CSV is a structured format. While you can load it, it doesn't go into a VARIANT column in its raw form like JSON or XML.

### **🔹 Sub-topic 5.3: Working with Unstructured Data**

*(10 Questions)*

1. **GRI has thousands of PDF invoices in an S3 bucket. Which object allows them to see the file names, sizes, and metadata of these files inside Snowflake?**  
   * A. External Table  
   * B. Directory Table  
   * C. File Table  
   * D. Metadata Stage  
   * **Answer: B.** A Directory Table is a catalog of files in a stage (internal or external).  
2. **GRI wants to generate a temporary link to a PDF file that a user can click on to view the document without logging into Snowflake. Which URL type should they use?**  
   * A. Scoped URL  
   * B. File URL  
   * C. Stage URL  
   * D. Direct URL  
   * **Answer: A.** Scoped URLs are temporary, encoded links that allow access without a Snowflake login for a short duration.  
3. **Which URL type is permanent and does not expire, but requires the user to be authenticated into Snowflake to access the file?**  
   * A. Scoped URL  
   * B. File URL  
   * C. Stage URL  
   * D. Eternal URL  
   * **Answer: B.** File URLs are permanent but require authentication/authorization.  
4. **GRI needs to extract the "Text" from a PDF stored in Snowflake. How can they achieve this natively?**  
   * A. SELECT \* FROM table  
   * B. Using a Python UDF (Snowpark) with a library like PyPDF2.  
   * C. Using PARSE\_PDF function.  
   * D. Using COPY INTO.  
   * **Answer: B.** Snowflake unstructured data support allows you to use UDFs or Stored Procedures (Java/Python) to process files.  
5. **When using an External Stage for unstructured data, how does the Directory Table stay in sync with the files in S3?**  
   * A. It is always real-time.  
   * B. By running ALTER STAGE ... REFRESH.  
   * C. By setting AUTO\_REFRESH \= TRUE (via cloud notifications).  
   * D. Both B and C.  
   * **Answer: D.** You can manually refresh or automate it using event notifications from the cloud provider.  
6. **Which function is used to retrieve the "Stage URL" for a specific file?**  
   * A. GET\_STAGE\_URL()  
   * B. BUILD\_STAGE\_FILE\_URL()  
   * C. GET\_PRESIGNED\_URL()  
   * D. BUILD\_SCOPED\_FILE\_URL()  
   * **Answer: B.** This function generates a URL to a file in a stage.  
7. **Does a Directory Table incur additional storage costs?**  
   * A. No, it is a free service.  
   * B. Yes, it is billed as a very small amount of storage in a background table.  
   * C. Only if the stage is internal.  
   * D. Only in Business Critical edition.  
   * **Answer: B.** Directory tables have a small overhead for storing file metadata.  
8. **GRI wants to grant a user the ability to see the files in a directory table but not the data inside the tables. What privilege is needed?**  
   * A. SELECT on the Directory Table.  
   * B. USAGE on the Stage.  
   * C. READ on the Stage.  
   * D. MONITOR on the Account.  
   * **Answer: A.** You grant SELECT on the stage's directory table just like a regular table.  
9. **Which of the following is a metadata column automatically provided by a Directory Table?**  
   * A. RELATIVE\_PATH  
   * B. SIZE  
   * C. LAST\_MODIFIED  
   * D. All of the above  
   * **Answer: D.** Directory tables provide standard file metadata columns.  
10. **Can GRI search for a specific PDF file name using a standard SQL WHERE clause on a Directory Table?**  
    * A. No, you must use the LIST command.  
    * B. Yes, Directory Tables can be queried using standard SQL.  
    * C. Only if the files are indexed.  
    * D. Only using the ACCOUNTADMIN role.  
    * **Answer: B.** This is the primary benefit of Directory Tables over the LIST command.

# **SnowPro Core (COF-C02) Practice & Scenarios**

## **Domain 6.0: Data Protection and Data Sharing (Weightage: 12%)**

### **🏢 Business Scenario: Global Retail Ingest (GRI)**

*GRI has moved into the "Collaboration and Resilience" phase. They need to ensure that if a developer accidentally drops a critical production table, it can be recovered in seconds. They also want to share live sales data with their supply chain partners. Some partners have Snowflake accounts, while others do not. Finally, they need a robust Disaster Recovery (DR) plan to replicate data from their primary AWS region to an Azure region.*

### **🔹 Sub-topic 6.1: Continuous Data Protection (CDP)**

*(10 Questions)*

1. **A developer at GRI accidentally executes DROP TABLE TRANSACTIONS. Which command will restore the table and all its data immediately?**  
   * A. RECOVER TABLE TRANSACTIONS;  
   * B. UNDROP TABLE TRANSACTIONS;  
   * C. RESTORE TABLE TRANSACTIONS FROM FAILSAFE;  
   * D. ROLLBACK;  
   * **Answer: B.** UNDROP uses Time Travel metadata to restore dropped objects instantly.  
2. **GRI is using the Snowflake Enterprise Edition. What is the maximum number of days they can configure for Time Travel on their permanent production tables?**  
   * A. 1 day  
   * B. 7 days  
   * C. 90 days  
   * D. 365 days  
   * **Answer: C.** Enterprise Edition allows up to 90 days of Time Travel retention.  
3. **GRI has a table that reached the end of its 90-day Time Travel period yesterday. Today, they realize they need to recover deleted data. Which feature applies now?**  
   * A. Time Travel (extended)  
   * B. Fail-safe  
   * C. Zero-copy cloning  
   * D. Metadata Archiving  
   * **Answer: B.** Fail-safe is the 7-day period that automatically begins after the Time Travel window closes.  
4. **Who can access and query data that is currently in the Fail-safe period?**  
   * A. The ACCOUNTADMIN role.  
   * B. The object owner.  
   * C. Only Snowflake Support.  
   * D. Any user with the MONITOR privilege.  
   * **Answer: C.** Fail-safe is a system-recovery feature accessible only by Snowflake personnel.  
5. **GRI wants to create a "Sandbox" environment for testing. They want to copy their 100 TB Production database without incurring additional storage costs or waiting hours for a data transfer. What should they use?**  
   * A. INSERT INTO ... SELECT \*  
   * B. CREATE DATABASE sandbox CLONE production;  
   * C. Data Replication  
   * D. Backup and Restore  
   * **Answer: B.** Zero-copy cloning creates a metadata-based copy instantly with no initial storage cost.  
6. **Which table types do NOT have a Fail-safe period?**  
   * A. Permanent and Transient  
   * B. Transient and Temporary  
   * C. Only Temporary  
   * D. All tables have Fail-safe.  
   * **Answer: B.** Transient and Temporary tables are designed for non-critical/session data and do not have Fail-safe to save on storage costs.  
7. **GRI is replicating data from AWS US-East to Azure West-Europe. In the event of a regional AWS outage, which feature allows them to switch their secondary Azure database to "Primary" status?**  
   * A. Fail-safe  
   * B. Time Travel  
   * C. Failover  
   * D. Cloning  
   * **Answer: C.** Failover (and Failback) is the process of switching the primary/secondary status of replicated databases.  
8. **GRI updates a single row in a 10 GB table. How much storage is added to their Time Travel bill?**  
   * A. 10 GB (the whole table is copied)  
   * B. Only the size of the original micro-partition that was changed.  
   * C. 0 bytes (Time Travel is free).  
   * D. 16 MB (the size of a VARIANT).  
   * **Answer: B.** Snowflake only stores the "changed" micro-partitions in Time Travel, not the entire table.  
9. **Does Snowflake encrypt data at rest?**  
   * A. Yes, but you must enable it in the ACCOUNTADMIN settings.  
   * B. Yes, all data is automatically encrypted by default using AES-256.  
   * C. No, encryption is an add-on feature.  
   * D. Only for the Business Critical edition.  
   * **Answer: B.** Snowflake provides transparent, automatic encryption at rest for all data.  
10. **A GRI analyst wants to see what the Customers table looked like exactly 2 hours ago. Which syntax should they use?**  
    * A. SELECT \* FROM customers AT(OFFSET \=\> \-7200);  
    * B. SELECT \* FROM customers AS OF 2 HOURS AGO;  
    * C. SELECT \* FROM customers BEFORE(QUERY\_ID \=\> 'last');  
    * D. UNDROP TABLE customers;  
    * **Answer: A.** The AT clause with OFFSET (in seconds) is the standard way to query historical data.

### **🔹 Sub-topic 6.2: Data Sharing Capabilities**

*(10 Questions)*

1. **GRI wants to share data with a partner company. The partner uses Snowflake. How is the data transferred to the partner?**  
   * A. Via an encrypted S3 bucket.  
   * B. Via Snowflake's internal API.  
   * C. The data is not transferred; the partner queries GRI's data directly via metadata sharing.  
   * D. Using the PUT and GET commands.  
   * **Answer: C.** Secure Data Sharing is "zero-copy"; no data movement occurs.  
2. **In a data sharing relationship, who pays for the storage of the shared data?**  
   * A. The Provider (GRI).  
   * B. The Consumer (Partner).  
   * C. Both split the cost 50/50.  
   * D. Snowflake provides shared storage for free.  
   * **Answer: A.** The provider always pays for the storage of the original data.  
3. **GRI has a partner who does NOT have a Snowflake account but wants to query GRI's shared data. What should GRI create for them?**  
   * A. A new User in the GRI account.  
   * B. A Reader Account.  
   * C. A Managed Access Schema.  
   * D. A VPN tunnel.  
   * **Answer: B.** Reader Accounts allow non-Snowflake users to query shared data.  
4. **Who pays for the compute (Virtual Warehouse) used by a Reader Account?**  
   * A. The user of the Reader Account.  
   * B. The Provider (GRI) who created the Reader Account.  
   * C. Snowflake.  
   * D. The SYSADMIN of the Consumer account.  
   * **Answer: B.** The provider account is billed for all compute credits consumed by the reader accounts they manage.  
5. **GRI wants to share a dataset with the general public so any Snowflake user can find and use it. Where should they list it?**  
   * A. Private Data Exchange  
   * B. Snowflake Marketplace  
   * C. Direct Share  
   * D. Public S3 bucket  
   * **Answer: B.** The Snowflake Marketplace is the public platform for sharing and discovering data.  
6. **GRI wants to share a table but hide certain columns like Profit\_Margin. What is the best practice?**  
   * A. Share the whole table and ask the partner not to look at that column.  
   * B. Create a Secure View that excludes the sensitive column and share the view.  
   * C. Use a standard view.  
   * D. Clone the table, delete the column, and share the clone.  
   * **Answer: B.** Secure Views are required for sharing to prevent logic leaks and to control column visibility.  
7. **A Consumer account wants to join a shared table from GRI with their own internal Inventory table. Can they do this?**  
   * A. No, shared tables cannot be joined with local tables.  
   * B. Yes, shared tables behave like local read-only tables.  
   * C. Only if they clone the shared table first.  
   * D. Only if the ACCOUNTADMIN allows it.  
   * **Answer: B.** One of the main benefits of sharing is the ability to join shared "live" data with local data.  
8. **Can a Consumer account perform an UPDATE command on a table shared by GRI?**  
   * A. Yes.  
   * B. No, all shared data is read-only for the consumer.  
   * C. Only if they are given the OWNERSHIP privilege.  
   * D. Only in the Business Critical edition.  
   * **Answer: B.** Shared data is strictly read-only for consumers.  
9. **Which role is typically required to create a Share object?**  
   * A. SYSADMIN  
   * B. USERADMIN  
   * C. ACCOUNTADMIN  
   * D. PUBLIC  
   * **Answer: C.** Creating a share is a high-level administrative task usually reserved for ACCOUNTADMIN.  
10. **GRI wants to share data with a specific group of vetted enterprise partners in a private environment. Which feature should they use?**  
    * A. Snowflake Marketplace  
    * B. Data Exchange  
    * C. Global Share  
    * D. Snowgrid  
    * **Answer: B.** A Data Exchange is a private, invitation-only data marketplace.

