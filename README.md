# Audiophilia

[Deployed Site](https://audiophilia.vercel.app/) WIP - currently working on UI kit

## Abstract

A sample e-commerce site with which users shop for high-end home audio equipment.

## Technologies

- **Framework**: React / NextJS
- **Static Analysis**: TypeScript
- **Data Fetching & State Management**: Apollo Client
- **Styling**: TailwindCSS
- **Test-Driven Development**: Mock Service Worker, Jest, React Testing Library, Cypress
- **Code Hygiene**: ESLint, Prettier, Husky
- **Wireframing**: Figma
- **CI/CD**: GitHub Actions, Vercel

## Goals

- Build to a set of comps using Figma
  - Rather than coming up with my own project spec, I elected to get wireframes from an an existing spec to simulate the workflow of collaborating with a product design team, and to get some additional practice working with detailed Figma files.
- Learn NextJS
  - I'd previously been building SPAs with client side rendering and wanted to start building front-ends with SSR, for its benefits with speed and SEO.
- Learn Mock Service Worker, Jest, React Testing Library
  - Having used Mocha/Chai for unit testing and Cypress for E2E testing on previous projects, I wanted to expand on my mocking and testing strategies, especially when working on applications for which a backend is not already built.
- Build a GraphQL API
  - Since I'd previously built REST APIs in Node and worked with GraphQL on the front end in other projects, I wanted to get a taste of working with GraphQL on the back end as well.

## Project Planning

- [GitHub Projects Board](https://github.com/n0land0/audiophilia/projects/1)
- Wireframes:
  <img width="869" alt="Screen Shot 2022-03-09 at 11 35 11 AM" src="https://user-images.githubusercontent.com/79823098/157508346-2e177de4-ac00-45b5-8d8c-d91d0f7eb46d.png">

## Architecture

## Snapshots of Application

## Wins

## Challenges

- Unit testing Tailwind style changes proved difficult, as these styles aren't reflect in the stylesheet used by JSDOM. I've been having to work around this with a combination of testing class names and moving actual DOM testing to Cypress

## Viewing & Installation

## Future Features

## Contributors

- Nolan Caine - [GitHub](https://github.com/n0land0) ??? [LinkedIn](https://www.linkedin.com/in/nolancaine/)

## Project Spec
