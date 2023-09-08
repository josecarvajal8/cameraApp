## Camera APP

This app is your go-to camera tool made with React Native. Snap photos with your camera, and you decide whether to keep or toss them. Plus, it keeps a handy list of your saved pics with quick info. 📸✨

![Android preview 1](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWZnMXN1YmIyZjB0bzJ1M3h2czNpaDluMDE4dnJmMGp1MWpuNHNuciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zA4xIz91HEBPkWEXZT/giphy.gif)  ![iOS preview 1](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHhpbzM2ODZxMWlmdWxob3A1Ync1bjEweXRrNXU5MTI4N3J6Y2thMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7g0e689vMb0sML7jIY/giphy.gif)


### Before start

This project was built using React Native, following the usual setup. To dive in, just make sure your environment is ready. You can find all the details in the React Native [documentation](https://reactnative.dev/docs/environment-setup).

If you're using Android, it's a good idea to take your time and follow the documentation's instructions to install all the required SDK.

#### Step 1: Clone the repo.

`git clone https://github.com/josecarvajal8/cameraApp.git`

#### Step 2: Dependencies and pods

Install the dependencies by running:
`yarn`

Dependencies used in this project.
- [React Native camera-kit](https://github.com/teslamotors/react-native-camera-kit)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [React Native permissions](https://github.com/zoontek/react-native-permissions)
- [React Native fs](https://github.com/itinance/react-native-fs)
- [React Native vector icons](https://github.com/oblador/react-native-vector-icons)

Install pods by running:

`cd ios/ && pod install && cd ..`

#### Step 3: Run your app

Start the server by running:
`yarn start`

Run your app by running:
`yarn ios` or `yarn android`

#### Trouble shooting

If you run into iOS issues or face permission problems while installing pods, here's a quick fix:

`cd ios/ && pod deintegrate && pod install && cd ..`
