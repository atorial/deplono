# 🦜 Deplono 
>Dev team quick notifcatation and colaboration action.

>![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/atorial/deplono/releaser.yml) ![GitHub issues](https://img.shields.io/github/issues/atorial/deplono) ![GitHub milestones](https://img.shields.io/github/milestones/all/atorial/deplono) ![GitHub forks](https://img.shields.io/github/forks/atorial/deplono) ![GitHub release (latest by date)](https://img.shields.io/github/downloads/atorial/deplono/latest/total) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/atorial/deplono)
![Website](https://img.shields.io/website?down_color=red&down_message=crinkled&up_color=green&up_message=up&url=https%3A%2F%2Fatoria.africa)
>


This action is aimed at automating software development testing, release and and deployment. It connects developers to decision makers, managers, collaborators and users. Managers can follow work done  in a sprint or daily tasks and make informed decisions on projects in their organization, they do not have to register a github account for that matter but they have full access to dentrimental information that concerns them.. 

## Key features 
 > Use morden platforms connected to your development workflow to communicate with your team members on work done, deployments as well as pendding items/issues.
 - [x] Send emails to colaborators, business owners and operations. 
 - [ ] Send SMS notifications for new releases/deployments.
 - [ ] Allow lead developers or managers to aprove releases which will then trigger additional actions to deploy the code to production servers. 
 - [ ] Allow people to review and make comments to the pushed code via `WhatasApp`, `Slack`, `SMS`, `USSD`, `Teams` or `E-mail`.
 - [ ] Automate releases
 - [ ] an application inteface to connect with this action.
 - [ ] Weekly reports of completed milestones/issues as well as planned work.
 - [ ] connect to azure Devops API for further reporting - especially to those whose workflow exteds to Azure Devops
 
 ## 📤 SMTP Mail Server Settings
 
 ### Secrets - `TransportOptions`
 
 We are using [nodemailer V6.7.2](https://nodemailer.com/about/) to send emails. the secrets here are just few of the options described in the main package.
 
  -  `EMAIL_HOST`: `required`  - This should be the smtp host you wish to use. it can be gmail or company smtp server [smtp.example.com]
  ___
  - `EMAIL_USER`: `required` -  Sender E-mail address
  ___
  - `EMAIL_PASSWORD`: `required` -  Sender Password
  ___ 
  - `EMAIL_PORT` : *default*  `465` ` optional` - Authentication Port - if not provided the default port will be used.

  ### Payload data `email body`
  
  - `MESSAGE`: *optional* -  If not provided the message will be generated from your commit message and all details will be pulled from there.
  - `SUBJECT`: *optional* - We generate the subject from one of  commit message, therefore it is advisable to have good and well defined commit messages - use `conventional-commit messages` format.
  - `RECIPIENTS`: *required* - This is an array/ list of users you want to recieve the update - these can be testers, line managers as well as business decision makers..

> there is no magic bullet in having a successful team other than making sure that the team gets updated on regular intervals and track their work accordingly.

## ✉️ SMS Messaging  Functionality
This feature enables SMS messaging between workflow runs and and any external process. The triger mechanism is from the main workflow run. it can be set to run on PR or on push even just a simple schedule.

This Feature requires minimal configuration on your application or organization. All you need are the following credentials:
1. authorized send email
2. an api key to the prefered sms gateway. 
This library was tested using the following SMS gateways 
1. [BulkSMS](https://bulksms.co.za) in South Africa
2. [SMS Global](https://smsglobal.com) - global
3. [Twilio](https://twlio.com) - global

## 💬 WhatsApp Messaging Functionality.
This feature enables teams to have group communication and anouncements based on their work items. There are few things to get started, 
1. Register on Facbook developers page
2. Get application ID 
3. register the ap id in the application
  

