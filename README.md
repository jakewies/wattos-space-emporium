# 🚀 Wattos Spaceship Emporium

- Built with [NextJS](https://github.com/zeit/next.js/)
- Styled with [Styled Components](https://www.styled-components.com/)
- Data stored in a [Firebase Realtime Database](https://firebase.google.com/docs/database)
- Deployed with [`now`](https://zeit.co/now)

View the application [here](https://wattos-space-emporium.jakewies.now.sh)

## Develop

``` 
git clone git@github.com:jakewies/wattos-space-emporium.git

cd wattos-space-emporium

yarn install

yarn dev
```

No configuration needed. The project was initially setup using `env` variables for Firebase's realtime database, but a late issue in deployment prevented the realtime database from being used. Data is fetched using the database endpoints instead, which require no `env` variables.

## Design

I designed the UI for this project using [Figma](https://www.figma.com). The design files can be viewed in the browser [here](https://www.figma.com/file/e4Swj3D347NrpPkxDh2Jvkdy/Watto-s-Spaceship-Emporium).

The goal of my design was to make it feel like you were perusing Watto's inventory on a futuristic tablet in his store on Tatooine.

## Architectural decisions

### State management

The data of the application is fetched when the app loads, and stored in local component state using React's [Context API](https://reactjs.org/docs/context.html). I decided to go this route instead of pulling in Redux as a dependency. 

### Data storage

I configured a realtime database with Firebase, and for the better part of the development cycle was using the database with no issues. Unfortunately, when attempting to deploy with `now`, I ran into an [unresolved error](https://github.com/zeit/next.js/issues/6655) that was preventing me from moving forward. Due to time restraints I commented out the firebase logic and am fetching the data using `axios` and the realtime database endpoint: `https://wattos-spaceship-emporium.firebaseio.com/products`.
