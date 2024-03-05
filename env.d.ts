declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PASSWORD: string;
    }
  }
}
export { }