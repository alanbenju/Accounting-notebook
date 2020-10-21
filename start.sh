#!/bin/bash
path=`pwd`
echo "Starting.."
echo "Installing dependencies..."
npm install
echo "Dependencies Installed"
echo "Starting server..."
nodemon app.js
echo "Server started on port 3000"
