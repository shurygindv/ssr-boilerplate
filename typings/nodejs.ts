declare module NodeJS {

  interface ProcessEnv {
    RAZZLE_ASSETS_MANIFEST: string;
    RAZZLE_PUBLIC_DIR: string;
  }

  export interface Process {
    env: ProcessEnv
  }
}

declare interface NodeModule {
  hot: {
    accept(path?: string, callback?: () => void): void
  }
}