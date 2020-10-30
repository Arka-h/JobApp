# Job App
A prototype application platform for Job Seekers and Employers
![Login Page](https://github.com/Arka-h/JobApp/blob/master/job-application-system/src/assets/img/screenshots/login-filled.png)

<br/>
<br/>

## Features : 
* Registration System for new users and Login System for existing candidates and employers.
* Candidates can upload resume to apply for available jobs in the jobs section
* The jobs applied can be viewed at the Applied section, by the candidate.  
* An employer can create jobs, and recruit from the candidates that have applied for the job. 
* An employer can view all the jobs available for the candidate to view on the platform too. 
* An employer can view the submitted resume by the job applicant that he is interested in.
* An employer can reach out to the applicant by writing an email to them.
* Each have a profile section which contain all their registered information, held by the application.

<br/>
<br/>

### Candidate Page
<br/>

![Candidate Page](https://github.com/Arka-h/JobApp/blob/master/job-application-system/src/assets/img/screenshots/candidate-jobs.png)

<br/>
<br/>

### Employer Page
<br/>

![Employer Page](https://github.com/Arka-h/JobApp/blob/master/job-application-system/src/assets/img/screenshots/jobname1-candidates-initial.png)

<br/>
<br/>

### PreRequisites
* node.js

### Installation Instructions

* Go into each folder and run `npm install` to get all the dependencies downloaded

* Then Rock n Roll, with `npm start` in each folder to get the client and server running at port 3000 and 4000 respectively.

* This application uses MongoDB Atlas, so make an account and create a cluster, add the necessary information in your .env file in the following path `backend > .env` 
<br/>
.env

```

NODE_ENV=development
DB_PASSWD=<your_db_password>
DB_NAME=<your_db_name>

```

NOTE: Check the file mongo.js, you probably need to change that as well, and replace certain terms from the MongoDB Atlas string to replace it with `dbPassword` and `dbName`, so that they are fetched from the environment and used.

`mongodb+srv://admin:${dbPassword}@cluster0.zmjdd.mongodb.net/${dbName}?retryWrites=true&w=majority`
<br/> 
<br/> 
Check out the prototype [here](https://www.figma.com/proto/y8Px0upLKDR0L9aCseNwAP/JobApp?node-id=6%3A2&scaling=scale-down)
<br/>
UI credits: [Creative Tim](https://www.creative-tim.com/product/argon-dashboard-react)
