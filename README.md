# Study words

## Project Description

This application assists users in creating a list of English words and automatically translating them into French. Users can study this list, and once they've learned the words, they can transfer them to another list of learned words. The application also includes a small game for practicing translations.

## Technologies Used

- **React**: Used to build the user interface of the application.
- **Redux Saga**: Used to manage the application's store and side effects, such as API calls.
- **DERL**: Used for word translation.
- **i18n**: Used for translating the application's interface.
- **MUI**: Used for the application's design.
- **Axios**: Used for making API calls.
- **Vite**: Used for launching the application.
- **Vitest**: Used for unit testing.

## How It Works

When a user adds a word to the list, the application makes an API call to translate this word into French. Users can also play a small game to practice translations.

## Installation and Usage

1. Clone this repository on your local machine.
2. Clone repository https://github.com/max8392/StudyWordsApi
3. Create file env.local in root projet. Add variabble VITE_API_URL=study-words-api-url
4. Install the dependencies by running `npm install`.
5. Launch the application by running `npm run start`.
6. Open your browser and go to `http://localhost:5173`.

## License

Open Source
