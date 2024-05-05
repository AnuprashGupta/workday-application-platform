# Job Listing Application

This project is a simple job listing application built with React and Redux. It allows users to view a list of jobs fetched from an API and apply filters to search for specific jobs.

## Project Structure

The project structure is organized as follows:

- **src/**
  - **components/**: Contains React components used in the application.
    - **Jobs/**: Contains components related to job listing.
      - `JobList.jsx`: Renders the list of jobs and handles infinite scrolling.
      - `JobCard.jsx`: Renders an individual job card.
    - **Filters/**: Contains components related to filtering jobs.
      - `Filter.jsx`: Renders filter options for users to refine job search.
  - **redux/**: Contains Redux-related files.
    - **actions/**
      - `actions.js`: Defines action creators for fetching jobs and handling success/failure.
    - **reducers/**
      - `reducer.js`: Defines the root reducer for managing job-related state.
    - **types.js**: Defines action types used in Redux actions.
  - **App.js**: Main component rendering the entire application.
  
## Components Overview

### JobList.jsx

The `JobList` component is responsible for rendering the list of jobs fetched from the API. It handles fetching more jobs as the user scrolls to the bottom of the page (infinite scrolling). Additionally, users can apply filters to refine their job search. These filters include minimum experience, company name, location, remote/onsite, tech stack, role, and minimum base pay.

### JobCard.jsx

The `JobCard` component represents an individual job listing. It displays details such as job title, company, and location. This component is used by the `JobList` component to render each job in the list.

### Filter.jsx

The `Filter` component provides UI elements for users to apply filters to the job search. It renders input fields and dropdowns for various filter options. Users can adjust these filters to narrow down their search results based on specific criteria.

## Redux Overview

Redux is used for state management in this project. Actions are dispatched to fetch jobs from the API, and the Redux store is updated accordingly. The `JobList` component subscribes to changes in the Redux store to display the latest list of jobs. The Redux store also manages error states and loading indicators, providing a seamless user experience.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
