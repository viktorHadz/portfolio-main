import planetSurveyGen from '@/assets/icons/planetSurveyGen.svg'
import planetAscii from '@/assets/icons/planetAscii.svg'
import planetFukla from '@/assets/icons/planetFukla.svg'
import planetWatch from '@/assets/icons/planetWatch.svg'
import planetInvoicer from '@/assets/icons/planetInvoicer.svg'
import planetSam from '@/assets/icons/planetSam.svg'
// project icons

export const projects = [
  {
    id: 'project-1',
    name: 'Invoicer',
    orbit: 'inner',
    size: 36,
    icon: planetInvoicer,
    variant: 'gas',
    picture: 'invoicer',
    pictureAlt: 'Image showing the user interface of the invoicing program.',
    description:
      'A full-stack invoicing system built with Express and SQL, featuring a lightweight Alpine.js frontend. Handles invoice generation, tracking, and management. Secure authentication implemented via OAuth 2.0. Deployed on a self-hosted server and actively used in production by a small business.',
    techIcons: [
      'Node.js',
      'Express',
      'SQLite',
      'OAuth2',
      'Alpine.js',
      'TailwindCSS',
    ],
    links: [{ gitHubAvailable: false }, { webPage: true, link: '#' }],
  },
  {
    id: 'project-2',
    name: 'FUKLA',
    orbit: 'middle',
    size: 36,
    icon: planetFukla,
    variant: 'rocky',
    picture: 'fukla',
    pictureAlt: 'Image showing the home page of the fukle.me website.',
    description:
      'A React-based salon website powered by a Firebase backend for managing gallery uploads and content. Implements a preloading and caching system for gallery transitions and Firebase cost management. Deployed on Cloudflare Pages.',
    techIcons: ['Firebase', 'React', 'Cloudflare-Pages', 'TailwindCSS'],
    links: [{ gitHubAvailable: false }, { webPage: true, link: '#' }],
  },
  {
    id: 'project-3',
    name: 'S.A.M. Creations',
    orbit: 'middle',
    size: 36,
    icon: planetSam,
    variant: 'slime',
    picture: 'samCreations',
    pictureAlt:
      'Image showing the home page of the s.a.m.creations.uk website.',
    description:
      'A marketing web app for a London-based garment manufacturer, built with Next.js, React, and TailwindCSS. SEO Optimized and integrates Resend for mailing. Deployed on a self-managed server for hosting control.',
    techIcons: ['Next.js', 'React', 'TailwindCSS', 'Resend', 'Cloudflare'],
    links: [{ gitHubAvailable: false }, { webPage: true, link: '#' }],
  },
  {
    id: 'project-4',
    name: 'Watch Maker',
    orbit: 'outer',
    size: 36,
    icon: planetWatch,
    variant: 'gas',
    picture: 'watchMaker',
    pictureAlt: 'Image showing the home page of thewatchmaker.uk website.',
    description:
      'A Vue & Vite web app using Supabase and Resend for backend services. Includes admin login, blog management, and a custom image compression algorithm with rate limiting and server-side security logging.',
    techIcons: [
      'Node.js',
      'Supabase',
      'Vite.js',
      'Vue.js',
      'TailwindCSS',
      'Resend',
    ],
    links: [{ gitHubAvailable: false }, { webPage: true, link: '#' }],
  },
  {
    id: 'project-5',
    name: 'Survey Generator',
    orbit: 'outer',
    size: 36,
    icon: planetSurveyGen,
    variant: 'rocky',
    picture: 'surveyGenerator',
    pictureAlt:
      'Image showing a sample report from the Python survey generator.',
    description:
      'A Python automation tool that converts survey data into Word reports with charts and summaries. Uses Matplotlib and Python-docx. Used to save time each university intake.',
    techIcons: ['Python', 'Matplotlib', 'python-docx'],
    links: [{ gitHubAvailable: false }, { webPage: true, link: '#' }],
  },
  {
    id: 'project-6',
    name: 'ASCII Generator',
    orbit: 'outer',
    size: 36,
    icon: planetAscii,
    variant: 'slime',
    picture: 'asciiGenerator',
    description:
      'A fun utility based in the browser that performs image-to-ASCII conversion that uses the Canvas API for real-time rendering and interactive adjustments for density, contrast, and brightness.',
    techIcons: ['JavaScript', 'Canvas-Api', 'HTML5', 'CSS3'],
    links: [{ gitHubAvailable: false }, { webPage: true, link: '#' }],
  },
]
