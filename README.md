<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/phonist/readtymap">
    <img src="https://github.com/phonist/readtymap/blob/master/public/favicon.ico?raw=true" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">ReadtyMap</h3>

  <p align="center">
    ReadtyMap is a tool that can search for a location by voice, as well as by typing and searching.
    Deepgram and Google Maps are the technologies being used here.
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

![ReadtyMap](https://github.com/phonist/readtymap/blob/master/public/assets/readtymap.png?raw=true)

Sometimes people are just lazy when it comes to typing.
People frequently use Google Maps to find the location in many everyday situations.
Despite the fact that there are many similar apps available, it is still worthwhile to create a simple one.

### Build With
* [Deepgram](https://deepgram.com/)
* [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)
* [React](https://reactjs.org/)
* [NextJs](https://nextjs.org/docs/basic-features/typescript)
* [Typescript](https://www.typescriptlang.org/)
* [Redux](https://redux.js.org/)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Material-UI](https://mui.com/)


<!-- GETTING STARTED -->
## Getting Started

# Use Voice

# Development
The majority of the time, development takes place in `src/components/Map/`, where the keys feature is used.

The deepgram.ts in `pages/api/deepgram.ts` is used for the speech to text feature, which is called by function in `src/components/Map/Autocomplete.tsx`.

Meanwhile, the Google Maps API is used for the map feature, which is called by function in `src/components/Map/GoogleMap.tsx`.

The project structure are depicts below. 
```
pages/
|-- api/
  |-- deepgram.ts
|-- index.tsx
|-- _app.tsx
|-- Map.tsx
redux/
|-- reducers/
|-- actions/
|-- thunks/
|-- types/
      |-- interfaces/
|-- reducers.ts
|-- store.ts
src/
|-- components/
  |-- Map/
    |-- Autocomplete.tsx
    |-- GoogleMap.tsx
    |-- Pointer.tsx
|-- Listening.tsx
|-- Loading.tsx
|-- Searching.tsx
```
* Deepgram.ts is Deepgram's API interface. 
* All UI components are stored in the `src` folder. 
* All redux logic is stored in the `redux` folder. 
* All typescript interfaces are kept in the folders `types` and `types/interfaces.`


### Prerequisites
* Node - 16.2.0
* Yarn - 1.22.17
* Deepgram acount
* Google Maps API key


### Installation
1. git clone https://github.com/phonist/readtymap
2. cd readtymap
3. yarn dev
4. navigate to localhost:3000 and start your development

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement" or "bug".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/<featureName>`)
3. Commit your Changes (`git commit -m 'add <featurename>'`)
4. Push to the Branch (`git push origin feature/<featureName>`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.




<!-- CONTACT -->
## Contact


Adrian Chong - [@twitter_handle](https://twitter.com/AdrianC50883820) - rujyi94@hotmail.com

Project Link: [https://github.com/phonist/readtymap](https://github.com/phonist/readtymap)