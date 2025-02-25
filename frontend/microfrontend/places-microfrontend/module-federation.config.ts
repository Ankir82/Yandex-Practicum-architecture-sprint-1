export const mfConfig = {
  name: "places_microfrontend",
  exposes: {
        './AddPlacePopup': './src/components/AddPlacePopup.js',  
        './ImagePopup': './src/components/ImagePopup.js',  
        './Main': './src/components/Main.js',  
        './PopupWithForm': './src/components/PopupWithForm.js',  
  },
  shared: ["react", "react-dom"],
};
