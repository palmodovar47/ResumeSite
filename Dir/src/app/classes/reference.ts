export class Ref {

  name: string;
  link: string;
  title: string;
  company: string;
  image: string;
  blurb: string;

  constructor (
    name: string,
    link: string,
    title: string,
    company: string,
    image: string,
    blurb: string
  ) {
    this.name = name;
    this.link = link;
    this.title = title;
    this.company = company;
    this.image = '/assets/' + image;
    this.blurb = blurb;
  }
}

export const REFS = [
  new Ref(
    'Jason Callison',
    'https://www.linkedin.com/in/jasoncallison/',
    'Product Development Manager',
    'eSURETY™',
    'JCallison.jpg',
    `  Jason was my last manager at eSURETY™. I worked with him as a support
    specialist assigned to help with bugs and feature requests. Later in the
    same role, I worked with him to begin creating an automated integration
    testing suite that was specific to the eSURETY™ web application and written
    in C# with Selenium.
    When I left that role and became a junior web developer contractor, Jason
    became my control at eSURETY™ and we continued to work well together until
    my contract came to an end and we part ways on great terms.`
  )
];
