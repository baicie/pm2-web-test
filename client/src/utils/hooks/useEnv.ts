const useEnv = () => {
  return {
    // @ts-ignore
    isSSR: import.meta.env.SSR,
  };
};

export { useEnv };
