my domain

It’s a custom URL that replaces the generic Salesforce login.





##### record type

-based on the field the value in the check list change 

eg: book:technical  checkbox-networking,programming,os

eg: book:non-technical  checkbox-history,scaping





##### Schema Builder

Schema Builder is a tool inside Salesforce that gives you a GUI (graphical user interface) to view and manage your data model (objects, fields, and relationships).









##### market place

Introduction

An online marketplace for Salesforce Apps, Components,

and consulting Services.

Developers or Consultants can use it as a gateway for

connecting with customer to provide their business

solutions.

Salesforce Admins or Users can find tools to improve their

company's productivity.



app Exchange works

Primary marketing tool for promoting App or Components.--add

In listing one can describe Solution, Pricing, Support and

Other details.--provide service, provide solution  

Can also upload videos, white papers and other contents

to help customers understand the app or component.



AppExchange categorizes the listing into various business

areas like sales, marketing or analytics.



---





##### Email templates

can create custom Email templates or a pre bulild Email templates and send mail to the students record by inserting the created format



-------------------------------------------------------------------------------------------------------------------------------------------------

##### Email Alerts

Email alerts are the emails that workflow rules send when triggered.



An Email Alert is an automated email that Salesforce sends to one or more recipients when certain conditions are met.



It’s not standalone → it is used inside Workflow Rules, Approval Processes, or Flows.



Triger by Workflow, Process Builder, Flow, Approval Process







------Support Process



#### What is an Opportunity in Salesforce?



An Opportunity = A potential revenue-generating deal with a customer.



It’s a standard object in Salesforce used to track sales.



Each Opportunity represents money you expect to earn if the deal closes.

👉 Example:



In a school/college app, an Opportunity could be “Student Admission – Navin”.

---------------------------------------------------------------------
///
Sales
#### What is a Stage?



Stage is a picklist field inside Opportunity.



It tells you the current step of the sales process.



Each stage has a probability (%) of closing the deal.



Stage is like a round



&nbsp;            (%)

1 round       10%



2 round       25%



3 round       50%



4 round       75%



5 round       90%

&nbsp;

6 round(placed)100%



7 not placed 0%



student is a opportunity stage is the round he cleared and stage is progression indicator tell placed or not in %



##### What is a Sales Process?



A Sales Process in Salesforce is a way to decide which Stage values (rounds) are available for an Opportunity.

eg 4rounds or 6rounds
/////////
Service

//////////What is a Case in Salesforce Service Cloud?

A Case is a customer’s problem, question, or request for help that is logged in Salesforce.

👉 Think of it like a ticket in a support system.

🔹 Why do we use Cases?

To track customer issues in one place.

To make sure issues are assigned to the right support agents.

To monitor progress until the issue is resolved.

To improve customer satisfaction.



//////🔹 What is a Lead?

A Lead in Salesforce is a potential customer who has shown interest in your product or service but is not yet qualified.

👉 Think of a Lead as the very first stage in the sales journey.
It could be:

A student enquiry form,

A person who downloaded a brochure,

Someone who attended a demo session,

Or a random business card you got at an event.

🔹 Why do we need Leads?

To capture raw interest before deciding if it’s worth pursuing.

To keep sales organized (separate “possible customers” from “real opportunities”).

To avoid cluttering your Accounts/Contacts with unqualified people.

🔹 Lead Fields (common ones)

Name (Person’s name)

Company (if business context)

Email / Phone (contact info)

Status (Open, Working, Converted, etc.)

Lead Source (Web, Event, Referral, etc.)


leads
1. Open – Not Contacted

This is a new lead.

Someone filled a form / enquiry came in, but nobody has contacted them yet.

Example: A student submitted an admission enquiry online, but the counselor hasn’t called them yet.

2. Working – Contacted

The sales rep (or counselor) has spoken to the lead or emailed them.

The lead is being nurtured (follow-ups, clarifying doubts, giving brochures, etc.).

Example: Counselor calls the student, explains about the course.

3. Closed – Converted

The lead was qualified and successful, so it is converted into:

Account (organization or parent)

Contact (the individual)

Opportunity (actual deal/admission)

Example: Student agrees to join → admission process begins.

4. Closed – Not Converted

The lead will not become a customer.

Maybe they chose a competitor, lost interest, or are not eligible.

Example: Student enquires but later decides to join another college.

🔹 Why is this useful?

Helps sales/service teams track progress with every lead.

Ensures no one forgets to follow up.

Provides reports on how many leads are converted vs lost.




IN STANDARD IF WE OPEN ONE THEN THE EXISTING ONE WILL CLOSE IN CONSOLE MULTIPLE SUB TABS CAN BE OPEN WITHOUT REMOVING THE OLD TAB ,USED TO HANDLE HUGE AMOUNT OF DATA

////sales vs sales console

This is the standard Sales app in Salesforce.

It’s used by general sales users to manage Leads, Opportunities, Accounts, Contacts.

It has a tab-based navigation: you move from Leads → Opportunities → Accounts by clicking different tabs.

////Sales Console App

A console app is like a power tool for advanced sales reps.

It gives a split-view workspace:

On the left: list view (e.g., all Leads).

On the right: details of the selected record.

You can open multiple records as subtabs within one main window → no need to keep switching tabs.



🔹 Service App vs Service Console in Salesforce

1. Service App (Standard Service)

A standard Salesforce app for handling customer support.

Uses tab-based navigation (like Sales app).

Agents work on one case at a time.

Good for smaller teams or organizations with fewer cases.

Example: An agent opens one student support case (e.g., “Issue with admission form”) → resolves it → closes it.

2. Service Console App (Service Console)

A special console app designed for support/service agents who handle high case volumes.

Provides a multi-tabbed workspace:

Main tab = Case

Subtabs = Related records (e.g., Contact, Account, Knowledge Article, Emails)

//How to apply profile check in validation rule | Salesforce Training | Learn Salesforce Admin
object manager->account->validation rule->write the condition $Profile.Name   =  'System Administrator'  &&  ISBLANK( AnnualRevenue )


////Bypass validation rule through permission set & custom permissions in Salesforce


create a user 
create a permission set and add the user
create a custom permission with the name of permission set
go to permission set and to custom permission and assign the custom permission 

object manager->account->validation rule->write the condition $Profile.Name   =  '//custom admin that is created'  &&  ISBLANK( AnnualRevenue )

/////////////{ISBLANK, AND, OR, NOT, IF return true or false, ISNEW, ISPICKVAL  value="yes"}\\\\\\\\\\\\\\\\\\

/////What is a Global Action in Salesforce?

A Global Action is a type of Quick Action in Salesforce that is not tied to a specific object.

You can use it anywhere in Salesforce (Home page, Chatter feed, Record pages, Salesforce mobile app).

It lets users quickly create records, log calls, send emails, or perform custom actions without navigating to the object’s tab.



////////A Quick Action is like a shortcut button in Salesforce that lets users do common tasks quickly, without navigating through multiple pages.

They appear in places like:

Record detail pages

Chatter feeds

Global Actions menu

Salesforce mobile app



Global Action VS Quick Action     prepopulate
glo
Not tied to any object.
Can be used anywhere in Salesforce → Home page, Chatter feed, Salesforce mobile, etc.

Quick
Object-Specific Quick Actions (tied to a particular object like Student, Opportunity, Case).
///path
path contains several stages ,can modify the stage add descriptions,and display specific field and celebrate when the path is completed




///LINK
In Salesforce, a link usually refers to a URL or navigation element that takes a user to another location (inside Salesforce or outside). There are a few contexts where “link” is commonly used:

1. Custom Links

These are links you can add to a page layout or record detail page.

They can point to:

An external website (e.g., your company’s support site).

A Salesforce page (like a report, dashboard, or another record).

A custom URL that passes record values as parameters.

👉 Example: A “Track Shipment” link on an Order record that redirects to a courier tracking site using the order’s tracking number.


////Lock Opportunity once it is closed through validation rule
when all stages are completed that will be won closed or lost closed after this stage it need to be locked 

ISCHANGED( StageName ) && PRIORVALUE(IsClosed)=true ||   //check for already closed
NOT(ISCHANGED( StageName )) && IsClosed=true //check for the change of closed








/////view setup audit trail in Salesforce.

The Setup Audit Trail in Salesforce lets you see a log of the last 6 months of configuration changes made in your org (who made them, what was changed, when it happened, and from where).

//bypass the opportunity validation by using quick action





///single related list
if there is a account, in related there will be opportunity contact but it cannot see in details so we use, single related list help to see other object in the details page in contact details
parent   ->  child
account   ->contact






****////Adminastator can login any user  when he activate login user policy

***////deliverablity -allow access to send email
🔎 Types of Licenses in Salesforce


     User Licenses



Salesforce → full CRM access (Accounts, Contacts, Opportunities, etc.).

Salesforce Platform → limited to custom apps but not full CRM features.

Chatter Free / Chatter Only → collaboration access only.

Service Cloud / Sales Cloud → access to service or sales features.


    Feature Licenses

Add extra functionality to a user on top of their base license.

Examples:

Marketing User → allows running campaigns.

Knowledge User → allows accessing and managing Salesforce Knowledge.

Service Cloud User → enables Service Console features.

     Permission Set Licenses

Give access to specific features or add-ons that are not covered by the user’s base license.

Example:

Einstein Analytics Plus License (for Tableau CRM / Analytics).

CPQ License (for Configure, Price, Quote).




survey
What is a Salesforce Survey?

Salesforce Surveys let you create and send branded questionnaires to collect feedback from customers, employees, or partners.

It’s a point-and-click tool (no coding needed).

Responses are stored in Salesforce and can be tied directly to records (like Case, Opportunity, Contact, etc.).




In Salesforce, a Community (officially called Experience Cloud site) is basically a digital space that connects people with your company, partners, or customers. Think of it as a customized website or portal built on Salesforce where external and internal users can interact.

Here’s a detailed breakdown:

1️⃣ Purpose of a Community

Engage Customers: Allow customers to ask questions, log cases, find solutions, and track their requests.

Collaborate with Partners: Partners can see opportunities, leads, and cases relevant to them.

Enable Employees: Employees can access knowledge, share updates, and collaborate internally.


Builder: Use it to customize pages, components, and navigation visually.

Administration: Use it to manage members, roles, login, and security.



contact -community -salesforce classic - merge account -this will convert the contact to community

🌐 1. Enable Digital Experiences (Communities)
🏗️ 2. Create a New Community (Site)
🛠️ 3. Add Members (Who Can Access the Community)
👤 4. Add Roles for Members
📩 5. Add Individual Users
🚀 6. Publish the Community



Show Parent Record Details on Child Record thru Related Record Component in Salesforce Lightning

go to accounts create a quick action on buttons ,go to the child that means contact and parent is account because the contact is displaying the detail from account,
go to contact and into a record and click edit page and search for related record and place it any ware and choose account name it will relate based on that , and save




56 Make a Field Required | Required on field, Page Layout, Validation Rule, Trigger | Salesforce

1 Required on field  if we give a field req while creating if there is two record type we need req for one and not req for one this cannot be used 

2 Page Layout can be customized if I need the field req in sales not in service it will be used

3 Validation Rule   it is used when the new record is created then only check if the field is empty ,if modify the old record it will not check ISNEW() && ISBLANK(TEXT(VALUE))

4  Trigger

You would only use a trigger if the required logic is too complex for validation rules.

Example:

----Make Rating required only if Active = True AND the Account has more than 3 related Contacts.”

-----This checks related records → not possible with just a validation rule.

    trigger AccountNameRequired on Account (before insert, before update) {
    for(Account acc: Trigger.new) {
        if(acc.Active__c != null && acc.Rating == null) {
            acc.addError('Account Rating is Required');
        }
    }
}



Make a Field Read Only through Field Level Security(FLS), Page Layout, Validation Rule Salesforce

Field Level Security(FLS)  while creating(fields and relationships) there will be asking for the profile which can read only and edit
Page Layout can be customized if I need the field read only in sales not in service it will be used

validation create a validation rule and check ISCHANGING then give a aleart

//////////Data Import Wizard 

The Data Import Wizard is a built-in Salesforce tool that helps you easily upload data into Salesforce without needing coding or external tools.

basically insert ,update and upsert a record (a combination of insert and update)


eg xl sheets Importing student lists, teacher lists, survey responses, etc. etc;


---if the record is need to be updated no to do it separate give update exiting record name if not create new if it is already just update
--- after all changes go to reports and click new reports ->account->select the fields -> create report->save->all report-> account report->export




What is Data Loader in Salesforce?

The Data Loader is a client application (you install it on your computer) used to bulk import, export, update, upsert, and delete large volumes of data in Salesforce.

It’s more powerful than the Data Import Wizard.

🛠️ Key Features

Can handle up to 5 million records (vs. 50,000 in Import Wizard).

Works with all standard and custom objects.

Supports:

Insert → add new records.

Update → update existing records.

Upsert → insert new + update existing (based on external ID).

Delete → remove records.

Hard Delete → permanent delete (bypasses Recycle Bin).

Export / Export All → extract data (with or without deleted records).





AgentForce



it is not a traditional chat bot it can take action based on the prompt, run on a atlus super computer for reason engine it knows all the data in the in salesforce,if we take service sector ,there will be 1000 of users it is not possible to handle with small human power there comes the agentforce ,it can handle multiple user an a time and give 360 degree view of the customer, helps to reduce the time ,human power etc.
the are many types of agent.

autonomous agents that can interact with customers

fully integrated with Salesforce CRM, Data Cloud, Apex, and Flows.



Agent

if a customer order a product the product is delayed and decide to ask the customer support that is an salesforce agent

1 at first it get the history or order id
2 check it in inventory now it is out of stock
3 check the policy for out of stock there will be 10 % refund 
4 it will replay
 We are sorry your order
was delayed, please
accept this 10% refund
for your order. Your
items are scheduled to
ship on 10/1/2024


there is lot of possible outcome like ;order number not exits ,delivered, lost based on that it will replay
 



