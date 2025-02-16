export const mfConfig = {
  name: "profile_microfrontend",
  exposes: {
        './EditAvatarPopup': './src/components/EditAvatarPopup.js',  
        './EditProfilePopup': './src/components/EditProfilePopup.js',  
  },
  shared: ["react", "react-dom"],
};
