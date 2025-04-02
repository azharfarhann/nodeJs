/*
/*
Node.js is a powerful and popular JavaScript runtime environment that allows developers to run JavaScript code outside the browser, typically on a server.

Here's a detailed breakdown to help you fully understand it:

What is Node.js?
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment built on Chrome's V8 JavaScript engine.

It allows developers to use JavaScript for server-side development — meaning, you can build backend services (APIs, web servers, etc.) using the same language you use for front-end development.

How does Node.js work?
Node.js uses the V8 engine to compile JavaScript directly to native machine code.

It operates on a non-blocking, event-driven architecture using a single-threaded event loop, making it lightweight and efficient for I/O-heavy tasks.

Single-threaded: One thread handles all incoming requests.

Event Loop: Manages asynchronous operations like reading files, querying a database, or calling APIs.

Non-blocking I/O: Instead of waiting, Node.js moves on and handles results through callbacks, Promises, or async/await.

*/

// Who created Node.js?
// Name: Ryan Dahl

// Year: 2009

// Background: Ryan was frustrated by the limitations of existing web servers (like Apache) and wanted a better way to handle many simultaneous connections with high performance.

//JavaScript was only used in browsers (frontend only).

// Aim : Non-blocking, event-driven I/O runtime for building scalable network applications in JavaScript

// 2009	Node.js was released by Ryan Dahl.
// 2010	NPM (Node Package Manager) was introduced to manage third-party packages.

// When do we use Node.js?
// Use Case                     	             Why Node.js Fits
// API backend	                                Fast, scalable, and easy to integrate with frontend
// Real-time apps (e.g., chat, notifications)	Handles many concurrent connections efficiently
// Single Page Applications (SPA)	            Perfect match with React, Angular, Vue
// Streaming services	                        Handles I/O streams efficiently
// Microservices architecture	                Lightweight, modular server environment
// Command Line Tools	                        Node.js is used to build tools like ESLint, Webpack, etc.
// Serverless functions	                        Popular on platforms like AWS Lambda, Vercel

// Real-World Examples
// Netflix: Chose Node for faster load times and lightweight processing.

// PayPal: Rebuilt parts of its app in Node.js and saw significant performance gains.

// LinkedIn: Used Node for their mobile backend to improve performance and scalability.



// Current Version : Nodejs  V23.10.0 
// LTS (Long Term Support) : 1 Year (Stable)  V22.14.0
// https:/nodejs.org/download

// Setups to Install Nodejs
// 1.Visit this website // https:/nodejs.org/download


// NPM ==> Node Package Manager
// npm stands for Node Package Manager.
/*
It is:

A package manager for JavaScript.

The default package manager for Node.js.

A command-line tool used to install, manage, and share code (packages/modules) in your project


Think of npm as the "Play Store" or "App Store" — but for JavaScript developers. You can install tools, libraries, frameworks, and utilities with a simple command.
*/

// you are building otp 
// you have 2 options

// 1. build everything from scratch
// 2. use a npm otp package

// What is a package?
// A package is a reusable piece of code (library or tool) shared by developers at npmjs website. Examples include:

/*
express – for building servers

mongoose – for MongoDB interactions
*/

// NPM Commands

// To install any package 
// npm install _____
// OR
// npm i ____

// example : npm install express or npm i express

// To Start any backend project the command is
// npm init or npm init -y 













*/