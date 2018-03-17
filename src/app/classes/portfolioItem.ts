export class PortfolioItem {

  Name: string;
  image: string;
  link: string;
  gitHubLink: string;
  blurb: string;

  constructor(
    Name: string,
    image: string,
    link: string,
    gitHubLink: string,
    blurb: string
  ) {
    this.Name = Name;
    this.image = '/assets/' + image;
    this.link = link;
    this.gitHubLink = gitHubLink;
    this.blurb = blurb;
  }
}

export const PORTFOLIOITEMS: PortfolioItem[] = [
  new PortfolioItem (
    'Unfolding Word API Viewer',
    'UWV.png',
    'http://paul.services/unfoldingWord/viewer/',
    'https://github.com/palmodovar47/unfoldingWordViewer',
    `
    This is a SPA that loads a catalog of different Bibles translated into many
    different languages for the user to choose from. The user can switch from
    chapter to chapter and verse to verse with the viewport auto scrolling along
    . I was given this project from a Christian organization and upgraded
    it. The upgrade is that rather than one view, you can have as many views as
    your computer can take. Thanks to the Bootstrap grid system, views that
    would make the other views 'squished' are automatically sent to the next
    line.`
  )
];
