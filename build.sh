# Build script for Render deployment
#!/bin/bash

echo "🚀 Starting Render build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the client
echo "🔨 Building React client..."
npm run build:client

echo "✅ Build completed successfully!"
echo "📁 Client built to: client/dist/"
echo "🌐 Server will serve from: server/server.js"
