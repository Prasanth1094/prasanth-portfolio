#!/bin/bash
# Navigate to client and install dependencies directly
echo "📦 Installing client dependencies..."
cd client
npm install --legacy-peer-deps --no-audit --no-fund

# Verify vite is installed
echo "🔍 Verifying Vite installation..."
npx vite --version || echo "Vite not found, but continuing..."

# Build directly in client directory

echo "🚀 Starting build process..."

# Set Node.js options for memory and compatibility
export NODE_OPTIONS="--max-old-space-size=4096"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install --legacy-peer-deps --no-audit --no-fund

# Navigate to client and install dependencies directly
echo "� Installing client dependencies..."
cd client
npm install --legacy-peer-deps --no-audit --no-fund

# Build directly in client directory
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
