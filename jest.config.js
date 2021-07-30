module.exports = {
  verbose: true,
  preset: "@shelf/jest-mongodb",
  coverageReporters: ["json", "html"],
  bail: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};
