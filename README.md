# Job App
An (almost) complete prototype for Job Seekers and Employers
![Login Page](job-application-system\src\assets\img\screenshots\login-filled.png)
### Features : 
* Registration System for new users and Login System for existing candidates and employers.
* Candidates can upload resume to apply for available jobs in the jobs section
* The jobs applied can be viewed at the Applied section, by the candidate.  
* An employer can create jobs, and recruit from the candidates that have applied for the job. 
* An employer can view all the jobs available for the candidate to view on the platform too. 
* An employer can view the submitted resume by the job applicant that he is interested in.
* An employer can reach out to the applicant by writing an email to them.
* Each have a profile section which contain all their registered information, held by the application.

![Candidate Page](job-application-system\src\assets\img\screenshots\candidate-jobs.png)

![Employer Page](job-application-system\src\assets\img\screenshots\jobname1-candidates-initial.png)

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
<br/> 
`mongodb+srv://admin:${dbPassword}@cluster0.zmjdd.mongodb.net/${dbName}?retryWrites=true&w=majority`
<br/> 
<br/> 
UI credits: [Creative Tim](https://www.creative-tim.com/product/argon-dashboard-react)