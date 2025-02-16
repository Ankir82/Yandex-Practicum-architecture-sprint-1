export const mfConfig = {
  name: "auth_microfrontend",
  exposes: {
        './InfoTooltip': './src/components/InfoTooltip.js',
        './Login': './src/components/Login.js',
        './Register': './src/components/Register.js',
  },
  shared: ["react", "react-dom"],
};
