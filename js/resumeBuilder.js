var bio = {
  name: "Andres Rojas",
  role: "DevOps Engineer",
  contacts: {
    mobile: "+1 305-982-7325",
    email: "andres@consumingpatience.com",
    github: "andres-rojas",
    twitter: "breakyboy",
    location: "Miramar"
  },
  welcomeMessage: "lorem ipsum dolor sit amet etc etc etc",
  skills: [
    "Ruby Developer",
    "Cloud Infrastructure Automation",
    "Continuous Integration / Continuous Deployment"
  ],
  biopic: "images/biopic.jpg",
  display: function() {}
};

var education = {
  schools: [
    {
      name: "Miami Dade College",
      location: "North Miami, FL",
      degree: "Associate of Arts",
      majors: [
        "Focus in Computer Science"
      ],
      dates: 2009,
      url: "http://www.mdc.edu/"
    },
    {
      name: "Florida International University",
      location: "Miami, FL",
      degree: "Bachelor of Science",
      majors: [
        "Computer Science"
      ],
      dates: 0,   // Interpret as 'Coursework not completed'
      url: "http://www.fiu.edu/"
    }
  ],
  onlineCourses: [
    {
      title: "Front-End Web Developer Nanodegree",
      school: "Udacity",
      date: 0,   // Interpret as 'Coursework not completed'
      url: "https://www.udacity.com/course/nd001"
    }
  ],
  display: function() {}
};

var work = {
  jobs: [
    {
      employer: "MTN Satellite Communications",
      title: "DevOps Engineer",
      location: "Miramar, FL",
      dates: "2012 - Present",
      description: "<ul><li>Automated deployment of various PaaS platforms (i.e. Stackato, Cloud Foundry, AppFog) on to 20 seven-node bare metal clusters, and three multi-node AWS clusters</li><li>Developed custom automation tools using Ruby, Bash, Chef & Razor</li><li>Set up and administered AWS services, including EC2, VPC, S3, Route 53 & RDS</li><li>First place in the company's first annual Hackathon</li></ul>"
    },
    {
      employer: "MTN Satellite Communications",
      title: "Systems Development Technician II",
      location: "Miramar, FL",
      dates: "2011 - 2012",
      description: "<ul><li>Developed & deployed custom Linux & Windows-based kiosks</li><li>Assisted with the development of PBX administration tools</li><li>Administed hardware & software firewalls & routers</li><li>Conducted site surveys to deploy WLAN aboard cruise ships</li></ul>"
    },
    {
      employer: "MTN Satellite Communications",
      title: "R&D Support Technician",
      location: "Miramar, FL",
      dates: "2007 - 2011",
      description: "<ul><li>Assisted in the development of Windows-based kiosks</li><li>Provided remote technical support for clients at sea</li><li>Developed and deployed a LAMP-based internal wiki</li></ul>"
    }
  ],
  display: function() {}
};

var projects = {
  projects: [
    {
      title: "Stackadmin",
      dates: "2015",
      description: "Gem to facilitate administration of Stackato deployments",
      images: ["images/stackadmin.png"]
    },
    {
      title: "CouchDB Service Broker for Cloud Foundry v2",
      dates: "2014",
      description: "This application sets up a Cloud Foundry v2 service broker to provide access to a CouchDB server",
      images: ["images/cfv2-couchdb.png"]
    },
    {
      title: "Bitcoin Printer",
      dates: "2013",
      description: "A quick and dirty port of Carlos Bueno's bitcoin-printer python script, which generates \"paper Bitcoins\" which contain one-time-use keypairs and Bitcoin payment addresses.",
      images: ["images/bitcoin-printer.jpg"]
    }
  ],
  display: function() {}
};
