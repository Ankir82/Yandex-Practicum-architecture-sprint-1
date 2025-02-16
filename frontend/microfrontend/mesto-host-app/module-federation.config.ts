export const mfConfig = {
  name: "mesto_host_app",
  exposes: {},
  remotes: {
    'auth-microfrontend': 'auth-microfrontend@http://localhost:8081/remoteEntry.js',  
    'places-microfrontend': 'places-microfrontend@http://localhost:8082/remoteEntry.js',
    'profile-microfrontend': 'profile-microfrontend@http://localhost:8084/remoteEntry.js',
  },
  shared: ["react", "react-dom"],
};
