#!/bin/bash
set -e

echo "🚀 Starting build process..."

# Set Node.js options for memory and compatibility
export NODE_OPTIONS="--max-old-space-size=4096"

# Install root dependencies first
echo "📦 Installing root dependencies..."
npm install --legacy-peer-deps --no-audit --no-fund

# Navigate to client and install dependencies
echo "📦 Installing client dependencies..."
cd client
npm install --legacy-peer-deps --no-audit --no-fund

# Verify vite is available
echo "🔍 Verifying Vite installation..."
npx vite --version

# Build the client
echo "🔨 Building client application..."
npm run build

# Go back to root
cd ..

# Verify build output
if [ -d "client/dist" ]; then
  echo "✅ Build successful!"
  echo "📁 Build output:"
  ls -la client/dist/
else
  echo "❌ Build failed - no dist directory found"
  exit 1
fi
