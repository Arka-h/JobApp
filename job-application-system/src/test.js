Jobs = [{
    name: "jobname1",
    resumes:[
    {
        nameCan: 'nameCan1',
        emailCan: 'emailCan1',
        resumeFile: 'resume1'
    },
    {
        nameCan: 'nameCan2',
        emailCan: 'emailCan2',
        resumeFile: 'resume2'
    }]
    },
    {
    name: "jobname2",
    resumes:[{
    nameCan: 'nameCan12',
    emailCan: 'emailCan12',
    resumeFile: 'resume1'
    },
    {
        nameCan: 'nameCan22',
        emailCan: 'emailCan22',
        resumeFile: 'resume22'
    }]
    }
]

Jobs.find(job => { if(job.name==='jobname1') 
                    return true 
                else 
                    return false
                })
                .resumes