// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    c += Object.keys(bin).sort()[i - 1] + '\n';
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary of my information.
'resume' - my latest resume.
'readme' - github readme for this website.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};


export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `.
..
secret_stuff
incriminating_pictures
`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Here, there be dragons.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `${config.ps1_username} is not in the sudoers file. <u><a class="text-light-blue dark:text-dark-blue underline" href="https://xkcd.com/838/" target="_blank">This incident will be reported.</a></u>  `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  ░█████╗░██████╗░██████╗░██╗░█████╗░███╗░░██╗████████╗░░░░░██╗██╗░██████╗
  ██╔══██╗██╔══██╗██╔══██╗██║██╔══██╗████╗░██║╚══██╔══╝░░░░░██║╚█║██╔════╝
  ███████║██║░░██║██████╔╝██║███████║██╔██╗██║░░░██║░░░░░░░░██║░╚╝╚█████╗░
  ██╔══██║██║░░██║██╔══██╗██║██╔══██║██║╚████║░░░██║░░░██╗░░██║░░░░╚═══██╗
  ██║░░██║██████╔╝██║░░██║██║██║░░██║██║░╚███║░░░██║░░░╚█████╔╝░░░██████╔╝
  ╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░░╚════╝░░░░╚═════╝░
  
  ██████╗░░█████╗░██████╗░████████╗███████╗░█████╗░██╗░░░░░██╗░█████╗░
  ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██║░░░░░██║██╔══██╗
  ██████╔╝██║░░██║██████╔╝░░░██║░░░█████╗░░██║░░██║██║░░░░░██║██║░░██║
  ██╔═══╝░██║░░██║██╔══██╗░░░██║░░░██╔══╝░░██║░░██║██║░░░░░██║██║░░██║
  ██║░░░░░╚█████╔╝██║░░██║░░░██║░░░██║░░░░░╚█████╔╝███████╗██║╚█████╔╝
  ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░░╚════╝░╚══════╝╚═╝░╚════╝░
  
Type 'help' to see the list of available commands.
Type 'sumfetch' to display a summary of my information.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository to this website.
`;
};
