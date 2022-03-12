export default {
  get: async (url: string) => {
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);

    return response.json();
  },
};
