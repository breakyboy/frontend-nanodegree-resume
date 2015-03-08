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
  display: function() {
    // Formatting
    var name    = HTMLheaderName.replace("%data%", bio.name);
    var role    = HTMLheaderRole.replace("%data%", bio.role);
    var mobile  = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email   = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var github  = HTMLgithub.replace("%data%", bio.contacts.github);
    var loc     = HTMLlocation.replace("%data%", bio.contacts.location);
    var pic     = HTMLbioPic.replace("%data%", bio.biopic);
    var msg     = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    // Display
    $("#header").prepend(name);
    $("#name").after(role);
    $("#topContacts").append(mobile);
    $("#topContacts").append(email);
    $("#topContacts").append(twitter);
    $("#topContacts").append(github);
    $("#topContacts").append(loc);
    $("#header").append(pic);
    $("#header").append(msg);
    $("#header").append(HTMLskillsStart);

    // Skills
    for (var i in bio.skills) {
      // Formatting
      skill = HTMLskills.replace("%data%", bio.skills[i]);

      // Display
      $("#skills").append(skill);
    }
  }
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
  display: function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i in work.jobs) {
      var job = work.jobs[i];

      // Formatting
      var employer = HTMLworkEmployer.replace("%data%", job.employer);
      var title    = HTMLworkTitle.replace("%data%", job.title);
      var dates    = HTMLworkDates.replace("%data%", job.dates);
      var loc      = HTMLworkLocation.replace("%data%", job.location);
      var desc     = HTMLworkDescription.replace("%data%", job.description);

      // Display
      $(".work-entry").append(employer);
      $(".work-entry").append(title);
      $(".work-entry").append(dates);
      $(".work-entry").append(loc);
      $(".work-entry").append(desc);
    }
  }
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
  display: function() {
    for (var i in projects.projects) {
      var project = projects.projects[i];

      // Formatting
      var title = HTMLprojectTitle.replace("%data%", project.title);
      var dates = HTMLprojectDates.replace("%data%", project.dates);
      var desc  = HTMLprojectDescription.replace("%data%", project.description);

      // Display
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(title);
      $(".project-entry:last").append(dates);
      $(".project-entry:last").append(desc);

      // Images
      for (var j in project.images) {
        // Formatting
        var image = HTMLprojectImage.replace("%data%", project.images[j]);

        // Display
        $(".project-entry:last").append(image);
      }
    }
  }
};

bio.display();
work.display();
projects.display();
