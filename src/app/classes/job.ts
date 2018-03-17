export class Job {

  Name: string;
  Address: string;
  responsibilities: string[];
  title: string;
  image: string;
  link: string;
  duration: string;

  constructor(
    Name: string,
    Address: string,
    title: string,
    image: string,
    link: string,
    duration: string,
    responsibilities: string[]
  ) {
    this.Name = Name;
    this.Address = Address;
    this.responsibilities = responsibilities;
    this.title = title;
    this.image = '/assets/' + image;
    this.link = link;
    this.duration = duration;
  }
}

export const JOBS = [
  new Job(
    'Focus!... On Innovation Inc.',
    'Casselberry/Jacksonville Fl',
    'Tech Support / Junior Developer',
    'esuretysite.png',
    'http://e-surety.net/',
    'August 2016 - December 2017',
    [
      'Created documentation for the e - SURETY TM web application',
      'Created WordPress plugins',
      'Acted as a QA engineer',
      'Wrote and performed automated testing in C# and Python',
      'Acted as a junior database administrator.',
      'Ran SQL scripts everyday to ensure the smooth operation of legacy products.',
      'Worked within the rules of PCI level Certification.'
    ]
  ),
  new Job(
    'Mullinax Ford',
    'Apopka, Fl',
    'Pricing/Inventory/IT/Software Development',
    'mullinaxsite.jpg',
    'http://mullinaxfordfl.com/',
    'June 2015 – July 2016',
    [
      'New Car Inventory Pricing',
      'Managing Inventory Intake Process',
      'Managing medium size computer network',
      'Basic Windows Server Domain Management',
      'Developed Computer software Programs to automate above Job Roles'
    ]
  ),
  new Job(
    'AIP Design',
    'Winter Park, Fl',
    'IT Manager',
    'aipsite.png',
    'http://www.aipdesign.com/?page_id=29',
    'December 2011- June 2015',
    [
      'Managing company\'s website',
      'Managing and developing company\'s servers',
      'Various clerical duties',
      'Answering phone calls, aiding clients'
    ]
  )
];
