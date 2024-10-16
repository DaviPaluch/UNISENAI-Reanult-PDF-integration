; (async () => {
  const tailwindcss = await import('prettier-plugin-tailwindcss')

  module.exports = {
    plugins: [tailwindcss.default],
  }
})()
