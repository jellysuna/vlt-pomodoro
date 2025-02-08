/// <reference types="vite/client" />
declare global {
    interface Window {
      YT: any; // This will allow access to YT global object in TypeScript
    }
  }
  export {}; // This ensures that the file is treated as a module