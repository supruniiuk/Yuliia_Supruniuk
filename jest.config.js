module.exports = {
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report"
        }]
    ],

    moduleFileExtensions: ['ts', 'js'],

    testEnvironment: 'jsdom',

    testMatch: [ '**/?(*.)+(spec|test).ts'],

    verbose: false,
};
  