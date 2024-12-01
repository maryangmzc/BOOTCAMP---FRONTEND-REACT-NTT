export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,ts,tsx}",
    "!src/**/*.d.ts", // excluye archivos de definición
  ],
  coverageDirectory: "coverage", // carpeta donde se guardarán los resultados
  coverageReporters: ["text", "lcov", "json"], // Tipos de reporte
};
