import questionsCategoriesImg1 from '../src/assets/interest.webp';
import questionsCategoriesImg2 from '../src/assets/craft.webp';
import questionsCategoriesImg3 from '../src/assets/analisys.webp';
import questionsCategoriesImg4 from '../src/assets/work.webp';
import questionsCategoriesImg5 from '../src/assets/carrer.webp';

import Journalism from '../src/assets/Journalism.webp';
import PublicRelations from '../src/assets/PublicRelations.webp';
import MediaProduction from '../src/assets/Mediaproduction.webp';

// Business
import Accounting from '../src/assets/Accounting.webp';
import Finance from '../src/assets/Finance.webp';
import Marketing from '../src/assets/Marketing.webp';

// Design

import FashionDesign from '../src/assets/FashionDesign.webp';
import FineArts from '../src/assets/FineArts.webp';
import Animation from '../src/assets/Animation.webp';

// Enginnering

import ComputerScience from '../src/assets/ComputerScience.webp';
import ElectricalEngineering from '../src/assets/ElectricalEnginnering.webp';
import CivilEngineering from '../src/assets/CivilEnginnering.webp';

// HealthCare

import Nursing from '../src/assets/Nursing.webp';
import HealthSciences from '../src/assets/HealthSciences.webp';
import Psychology from '../src/assets/Psychology.webp';


export const questionsCategories = [
    {name: 'Interests', desc: 'These questions help identify the user’s interests and areas they are passionate about.', img: questionsCategoriesImg1},
    {name: ' Personality Traits', desc: 'These questions explore the user’s personality traits and how they relate to different career paths.', img: questionsCategoriesImg2},
    {name: 'Skills', desc: 'These questions assess the user’s perceived skills and abilities.', img: questionsCategoriesImg3},
    {name: 'Work Preferences', desc: 'These questions help determine the user’s preferences regarding their ideal work environment and conditions.', img: questionsCategoriesImg4},
    {name: 'Career Goals', desc: 'These questions help identify the user’s long-term career goals and aspirations.', img: questionsCategoriesImg5},
];
  

export const questions = [
  {
    id: 1,
    question: "Which subject did you enjoy most in school?",
    answers: [
      { text: "Mathematics", category: "Engineering", score: 10 },
      { text: "Literature", category: "Media", score: 5 },
      { text: "Art", category: "Design", score: 8 },
      { text: "Biology", category: "Healthcare", score: 9 },
      { text: "Business Studies", category: "Business", score: 7 },
    ],
  }, {
    id: 2,
    question: "What type of projects do you enjoy working on?",
    answers: [
      { text: "Building or constructing something", category: "Engineering", score: 10 },
      { text: "Writing or creating content", category: "Media", score: 6 },
      { text: "Designing visuals or layouts", category: "Design", score: 9 },
      { text: "Planning and organizing", category: "Business", score: 8 },
      { text: "Conducting experiments", category: "Healthcare", score: 9 },
    ],
  },
  {
    id: 3,
    question: "How do you prefer to spend your free time?",
    answers: [
      { text: "Playing strategy games or puzzles", category: "Engineering", score: 9 },
      { text: "Reading or writing", category: "Media", score: 8 },
      { text: "Drawing or crafting", category: "Design", score: 10 },
      { text: "Volunteering or helping others", category: "Healthcare", score: 9 },
      { text: "Managing personal projects", category: "Business", score: 7 },
    ],
  },
  {
    id: 4,
    question: "Which of these best describes your problem-solving style?",
    answers: [
      { text: "Logical and methodical", category: "Engineering", score: 10 },
      { text: "Creative and innovative", category: "Design", score: 9 },
      { text: "Empathetic and caring", category: "Healthcare", score: 8 },
      { text: "Analytical and data-driven", category: "Business", score: 9 },
      { text: "Persuasive and communicative", category: "Media", score: 7 },
    ],
  },
  {
    id: 5,
    question: "What is your favorite type of book or movie?",
    answers: [
      { text: "Science fiction or technology", category: "Engineering", score: 9 },
      { text: "Biographies or real-life stories", category: "Media", score: 7 },
      { text: "Art and design", category: "Design", score: 10 },
      { text: "Medical dramas or documentaries", category: "Healthcare", score: 8 },
      { text: "Business or finance", category: "Business", score: 9 },
    ],
  },
  {
    id: 6,
    question: "Which skill do you want to improve the most?",
    answers: [
      { text: "Technical or coding skills", category: "Engineering", score: 10 },
      { text: "Public speaking or writing", category: "Media", score: 8 },
      { text: "Design and creativity", category: "Design", score: 9 },
      { text: "Leadership and management", category: "Business", score: 8 },
      { text: "Scientific research", category: "Healthcare", score: 9 },
    ],
  },
  {
    id: 7,
    question: "Which environment do you thrive in?",
    answers: [
      { text: "Labs or tech workshops", category: "Engineering", score: 10 },
      { text: "Newsrooms or media studios", category: "Media", score: 8 },
      { text: "Creative studios or design firms", category: "Design", score: 9 },
      { text: "Hospitals or clinics", category: "Healthcare", score: 9 },
      { text: "Corporate offices", category: "Business", score: 7 },
    ],
  },
  {
    id: 8,
    question: "How do you handle stress?",
    answers: [
      { text: "I focus on solving the problem at hand", category: "Engineering", score: 9 },
      { text: "I express myself through writing or art", category: "Media", score: 8 },
      { text: "I talk it out with others", category: "Healthcare", score: 9 },
      { text: "I take a step back and analyze the situation", category: "Business", score: 8 },
      { text: "I channel it into creative work", category: "Design", score: 7 },
    ],
  },
  {
    id: 9,
    question: "What is your favorite way to learn new things?",
    answers: [
      { text: "By doing hands-on projects", category: "Engineering", score: 10 },
      { text: "By reading and researching", category: "Media", score: 7 },
      { text: "By experimenting and creating", category: "Design", score: 9 },
      { text: "By engaging in discussions", category: "Healthcare", score: 8 },
      { text: "By solving real-world problems", category: "Business", score: 8 },
    ],
  },
  {
    id: 10,
    question: "Which activity do you prefer?",
    answers: [
      { text: "Building models or gadgets", category: "Engineering", score: 10 },
      { text: "Writing articles or blogs", category: "Media", score: 7 },
      { text: "Sketching or painting", category: "Design", score: 9 },
      { text: "Volunteering at community centers", category: "Healthcare", score: 8 },
      { text: "Planning events or managing teams", category: "Business", score: 9 },
    ],
  },
  {
    id: 11,
    question: "What motivates you to work hard?",
    answers: [
      { text: "Solving complex challenges", category: "Engineering", score: 10 },
      { text: "Sharing ideas and stories", category: "Media", score: 8 },
      { text: "Expressing creativity", category: "Design", score: 9 },
      { text: "Helping others", category: "Healthcare", score: 9 },
      { text: "Achieving financial success", category: "Business", score: 8 },
    ],
  },
  {
    id: 12,
    question: "What do you value most in a job?",
    answers: [
      { text: "Innovation and technology", category: "Engineering", score: 9 },
      { text: "Creativity and expression", category: "Media", score: 8 },
      { text: "Artistic freedom", category: "Design", score: 10 },
      { text: "Making a difference in people's lives", category: "Healthcare", score: 9 },
      { text: "Leadership and influence", category: "Business", score: 8 },
    ],
  },
  {
    id: 13,
    question: "Which tool or equipment do you enjoy using?",
    answers: [
      { text: "Computers and software", category: "Engineering", score: 10 },
      { text: "Cameras and microphones", category: "Media", score: 8 },
      { text: "Paintbrushes or digital tablets", category: "Design", score: 9 },
      { text: "Medical instruments", category: "Healthcare", score: 9 },
      { text: "Spreadsheets and financial software", category: "Business", score: 8 },
    ],
  },
  {
    id: 14,
    question: "What kind of problems do you like solving?",
    answers: [
      { text: "Technical or mechanical issues", category: "Engineering", score: 10 },
      { text: "Communication challenges", category: "Media", score: 7 },
      { text: "Creative design problems", category: "Design", score: 9 },
      { text: "Healthcare or medical challenges", category: "Healthcare", score: 9 },
      { text: "Business strategy problems", category: "Business", score: 8 },
    ],
  },
  {
    id: 15,
    question: "What is your dream job?",
    answers: [
      { text: "Engineer or software developer", category: "Engineering", score: 10 },
      { text: "Journalist or content creator", category: "Media", score: 8 },
      { text: "Graphic designer or animator", category: "Design", score: 9 },
      { text: "Doctor or nurse", category: "Healthcare", score: 9 },
      { text: "Entrepreneur or CEO", category: "Business", score: 8 },
    ],
  },
 { id: 16,
  question: "Which of these hobbies do you enjoy the most?",
  answers: [
    { text: "Programming or tinkering with electronics", category: "Engineering", score: 10 },
    { text: "Photography or videography", category: "Media", score: 8 },
    { text: "Drawing or crafting", category: "Design", score: 9 },
    { text: "Volunteering or caregiving", category: "Healthcare", score: 9 },
    { text: "Starting a side business", category: "Business", score: 8 },
  ],
},
{
  id: 17,
  question: "What kind of impact do you want to have?",
  answers: [
    { text: "Advancing technology", category: "Engineering", score: 10 },
    { text: "Telling important stories", category: "Media", score: 8 },
    { text: "Creating beautiful designs", category: "Design", score: 9 },
    { text: "Improving people's health", category: "Healthcare", score: 9 },
    { text: "Building successful companies", category: "Business", score: 8 },
  ],
},
{
  id: 18,
  question: "How do you approach a new project?",
  answers: [
    { text: "I create a detailed plan", category: "Engineering", score: 9 },
    { text: "I brainstorm creative ideas", category: "Design", score: 10 },
    { text: "I consider the impact on people", category: "Healthcare", score: 9 },
    { text: "I analyze the market or audience", category: "Business", score: 8 },
    { text: "I start by gathering information", category: "Media", score: 7 },
  ],
},
{
  id: 19,
  question: "Which of these phrases resonates with you the most?",
  answers: [
    { text: "Innovate and iterate", category: "Engineering", score: 10 },
    { text: "Communicate and connect", category: "Media", score: 8 },
    { text: "Design with purpose", category: "Design", score: 9 },
    { text: "Care and support", category: "Healthcare", score: 9 },
    { text: "Lead and inspire", category: "Business", score: 8 },
  ],
},
{
  id: 20,
  question: "How do you prefer to work?",
  answers: [
    { text: "Independently on technical tasks", category: "Engineering", score: 10 },
    { text: "Collaboratively on creative projects", category: "Design", score: 9 },
    { text: "In a supportive team environment", category: "Healthcare", score: 9 },
    { text: "Strategically on business goals", category: "Business", score: 8 },
    { text: "In a fast-paced, dynamic setting", category: "Media", score: 7 },
  ],
},
{
  id: 21,
  question: "What is your approach to learning new skills?",
  answers: [
    { text: "Practice through hands-on experience", category: "Engineering", score: 10 },
    { text: "Experiment with creative techniques", category: "Design", score: 9 },
    { text: "Engage in group discussions or training", category: "Healthcare", score: 8 },
    { text: "Analyze and apply new information", category: "Business", score: 8 },
    { text: "Research and write about it", category: "Media", score: 7 },
  ],
},
{
  id: 22,
  question: "Which area of study are you most interested in?",
  answers: [
    { text: "Computer Science", category: "Engineering", score: 10 },
    { text: "Communications or Journalism", category: "Media", score: 8 },
    { text: "Graphic Design or Fine Arts", category: "Design", score: 9 },
    { text: "Medicine or Nursing", category: "Healthcare", score: 9 },
    { text: "Business Administration or Economics", category: "Business", score: 8 },
  ],
},
{
  id: 23,
  question: "What type of challenges do you enjoy?",
  answers: [
    { text: "Coding or engineering challenges", category: "Engineering", score: 10 },
    { text: "Creative design challenges", category: "Design", score: 9 },
    { text: "Medical or scientific challenges", category: "Healthcare", score: 9 },
    { text: "Business or financial challenges", category: "Business", score: 8 },
    { text: "Storytelling or communication challenges", category: "Media", score: 7 },
  ],
},
{
  id: 24,
  question: "Which of these best describes your work style?",
  answers: [
    { text: "Detail-oriented and precise", category: "Engineering", score: 10 },
    { text: "Creative and expressive", category: "Media", score: 7 },
    { text: "Caring and compassionate", category: "Healthcare", score: 9 },
    { text: "Analytical and strategic", category: "Business", score: 8 },
    { text: "Innovative and artistic", category: "Design", score: 9 },
  ],
},
{
  id: 25,
  question: "What excites you the most about the future?",
  answers: [
    { text: "New technology and innovation", category: "Engineering", score: 10 },
    { text: "Creative possibilities", category: "Design", score: 9 },
    { text: "Advancements in healthcare", category: "Healthcare", score: 9 },
    { text: "Business growth and opportunities", category: "Business", score: 8 },
    { text: "New ways to communicate and connect", category: "Media", score: 7 },
  ],
},
{
  id: 26,
  question: "How do you prefer to express yourself?",
  answers: [
    { text: "Through coding or building", category: "Engineering", score: 10 },
    { text: "Through writing or media", category: "Media", score: 8 },
    { text: "Through visual arts or design", category: "Design", score: 9 },
    { text: "Through caring for others", category: "Healthcare", score: 9 },
    { text: "Through leadership and management", category: "Business", score: 8 },
  ],
},
{
  id: 27,
  question: "What is your dream project?",
  answers: [
    { text: "Creating a new app or technology", category: "Engineering", score: 10 },
    { text: "Writing a book or documentary", category: "Media", score: 8 },
    { text: "Designing a brand or product", category: "Design", score: 9 },
    { text: "Leading a healthcare initiative", category: "Healthcare", score: 9 },
    { text: "Starting a successful company", category: "Business", score: 8 },
  ],
},
{
  id: 28,
  question: "Which of these areas do you want to contribute to?",
  answers: [
    { text: "Technology and innovation", category: "Engineering", score: 10 },
    { text: "Media and communication", category: "Media", score: 8 },
    { text: "Art and design", category: "Design", score: 9 },
    { text: "Healthcare and well-being", category: "Healthcare", score: 9 },
    { text: "Business and economics", category: "Business", score: 8 },
  ],
},
{
  id: 29,
  question: "What do you enjoy most about working on a team?",
  answers: [
    { text: "Collaborating to solve problems", category: "Engineering", score: 9 },
    { text: "Sharing creative ideas", category: "Design", score: 9 },
    { text: "Supporting and helping others", category: "Healthcare", score: 10 },
    { text: "Strategizing to achieve goals", category: "Business", score: 8 },
    { text: "Communicating and connecting", category: "Media", score: 7 },
  ],
},
{
  id: 30,
  question: "How do you approach a challenge?",
  answers: [
    { text: "With a logical plan", category: "Engineering", score: 10 },
    { text: "With creative solutions", category: "Design", score: 9 },
    { text: "With empathy and care", category: "Healthcare", score: 9 },
    { text: "With analysis and strategy", category: "Business", score: 8 },
    { text: "With communication and outreach", category: "Media", score: 7 },
  ],
},
  
];

// majors.js
export const majorDetails = {
  Engineering: {
    description: `
      Engineering is a diverse and dynamic field that focuses on the application of scientific principles to design, build, and maintain various structures, systems, and technologies. It encompasses several disciplines, including mechanical, electrical, civil, chemical, and computer engineering. Engineers work on creating solutions to complex problems, often involving technology and innovation. 

      In engineering, you will find yourself working on cutting-edge projects that range from designing bridges and buildings to developing software and electronics. This field requires a strong foundation in mathematics and science, as well as problem-solving skills and creativity. Engineers often collaborate with other professionals and stakeholders to bring projects to fruition, ensuring that they meet safety, efficiency, and performance standards. If you enjoy tackling challenges, working with advanced technologies, and seeing tangible results from your efforts, engineering could be a rewarding career path for you.
    `,

    Links: [
      {
      link: 'https://research.com/degrees/engineering-majors',
      name: 'Engineering Majors Explained: Cost, Requirements, Careers & Salary in 2024 (Research.com)'
    },

      {
        link: 'https://www.usnews.com/education/articles/what-are-different-types-of-engineering',
        name: 'What are the different types of engineering (usnews.com)'
      },
    ],

    relatedMajors: [
      {
        name: 'Computer Science',
        description: 'Developing software, algorithms, and systems to solve technological problems.',
        img: ComputerScience,
      },
      {
        name: 'Electrical Engineering',
        description: 'Designing and developing electrical systems and devices for various applications.',
        img: ElectricalEngineering,
      },
      {
        name: 'Civil Engineering',
        description: 'Planning and constructing infrastructure projects like bridges, roads, and buildings.',
        img: CivilEngineering,
      }
    ]
  },

  Media: {
    description: `
      Media encompasses a broad range of disciplines centered around communication, journalism, and content creation. This field involves crafting stories, producing videos, managing social media, and engaging audiences through various platforms. Media professionals work in newsrooms, advertising agencies, television studios, and digital media companies.

      Careers in media can include roles such as journalists, content creators, public relations specialists, and media analysts. This field requires strong writing and communication skills, creativity, and an understanding of audience engagement. Media professionals often work under tight deadlines and must stay current with trends and developments in technology and communication. If you have a passion for storytelling, reporting news, or creating engaging content, a career in media may offer you the creative and dynamic environment you seek.
    `,

    Links: [
      {
       link: 'https://wavelearningfestival.medium.com/a-deep-dive-into-college-majors-communications-and-media-studies-d07789a6462a',
       name: 'A Deep Dive Into College Majors: Communications and Media Studies (wavelearningfestival.medium.com)'
      },
      {
       link: 'https://www.theguardian.com/education/article/2024/jun/11/media-studies-popular-dynamic-profound-impact-report',
       name: 'Media studies are popular, dynamic and have ‘profound impact’, report says (theguardian.com)',
      },
    ],

    relatedMajors: [
      {
        name: 'Journalism',
        description: 'Reporting and writing news stories for various media outlets.',
        img: Journalism,
      },
      {
        name: 'Public Relations',
        description: 'Managing communication between organizations and the public.',
        img: PublicRelations,
      },
      {
        name: 'Media Production',
        description: 'Creating and editing multimedia content for various platforms.',
        img: MediaProduction,
      }
    ]
  },


  Design: {
    description: `
      Design is a multifaceted field that focuses on creating visually appealing and functional solutions for various mediums, including print, digital, and environmental spaces. It involves disciplines such as graphic design, interior design, fashion design, and user experience (UX) design. Designers work to enhance aesthetics, improve usability, and communicate messages effectively through their work.

      In the design field, you may find yourself developing branding strategies, creating visual content, designing user interfaces, or planning spatial layouts. This field requires a keen eye for detail, a strong sense of creativity, and the ability to understand and address user needs. Designers often collaborate with clients, stakeholders, and other creatives to ensure that their work aligns with project goals and meets high standards of quality. If you have a passion for creativity, problem-solving, and visual communication, a career in design could be both fulfilling and stimulating.
    `,

    Links: [
      {
       link: 'https://www.wayup.com/guide/design-major-right/',
       name: 'What is a Design Major and is it Right for Me? (wayup.com)'
      },
      {
       link: 'https://www.ucdavis.edu/majors/blog/what-can-i-do-my-design-major',
       name: 'What Can I Do With My Design Major? (UCdavis)'
      },
    ],

    relatedMajors: [
      {
        name: 'Fashion Design',
        description: 'Creating clothing and accessories with an emphasis on style and trends.',
        img: FashionDesign,
      },
      {
        name: 'Fine Arts',
        description: 'Producing visual art, such as painting, sculpture, and drawing.',
        img: FineArts,
      },
      {
        name: 'Animation',
        description: 'Creating animated visuals and effects for media and entertainment.',
        img: Animation,
      }
    ]
  },


  Healthcare: {
    description: `
      Healthcare is a vital field dedicated to improving and maintaining people's health and well-being. It encompasses a wide range of professions, including doctors, nurses, medical researchers, public health experts, and mental health professionals. Careers in healthcare involve diagnosing and treating medical conditions, conducting research, and providing support to patients and communities.

      Working in healthcare requires a deep commitment to helping others, strong interpersonal skills, and a solid understanding of medical and scientific principles. This field offers opportunities to work in various settings, such as hospitals, clinics, research institutions, and community health organizations. Healthcare professionals often face challenging and rewarding experiences, from providing direct patient care to advancing medical knowledge through research. If you are passionate about making a difference in people's lives and are dedicated to lifelong learning and service, healthcare could be a meaningful career choice for you.
    `,

    Links: [
      {
        link: 'https://www.nbcnews.com/health/health-care',
        name: 'Health Care News (nbcnews.com)'
      },
      {
        link: 'https://www.crimsoneducation.org/us/blog/best-healthcare-degrees/',
        name: 'The Best Healthcare Degrees: Facts and Projections (crimsoneducation.org)'
      }
    ],

    relatedMajors: [
      {
        name: 'Nursing',
        description: 'Providing patient care and support in medical settings.',
        img: Nursing,
      },
      {
        name: 'Health Sciences',
        description: 'Studying the scientific aspects of health and disease.',
        img: HealthSciences,
      },
      {
        name: 'Psychology',
        description: 'Understanding human behavior and mental processes.',
        img: Psychology,
      }
    ]
  },


  Business: {
    description: `
      Business is a broad field that focuses on managing and organizing resources to achieve economic goals and drive organizational success. It includes various disciplines such as management, finance, marketing, entrepreneurship, and human resources. Business professionals work to develop strategies, make financial decisions, and lead teams to achieve objectives.

      Careers in business can range from financial analysts and marketing managers to entrepreneurs and corporate executives. This field requires strong analytical skills, leadership abilities, and an understanding of market dynamics and organizational behavior. Business professionals often work in dynamic environments, addressing challenges and seizing opportunities to drive growth and innovation. If you are interested in strategy, leadership, and making impactful decisions, a career in business could be both challenging and rewarding.
    `,

    Links: [
      {
        link: 'https://www.usnews.com/education/best-colleges/business-administration-major-overview', 
        name: 'Business administration major overview (usnews.com)'
      },
      {
        link: 'https://blog.collegeboard.org/basics-business-majors', 
        name: 'The Basics of Business Majors (collegeboard.org)'
      },
    ],

    relatedMajors: [
      {
        name: 'Accounting',
        description: 'Managing financial records and ensuring compliance with regulations.',
        img: Accounting,
      },
      {
        name: 'Finance',
        description: 'Managing investments, budgeting, and financial planning.',
        img: Finance,
      },
      {
        name: 'Marketing',
        description: 'Promoting products and services through various strategies and media.',
        img: Marketing,
      }
    ]
  }
};


