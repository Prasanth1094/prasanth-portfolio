#!/bin/bash
set -e

echo "🚀 Starting build process..."

# Set Node.js options for memory and compatibility
export NODE_OPTIONS="--max-old-space-size=4096"

# Clean install
echo "📦 Installing dependencies..."
npm ci --no-audit --no-fund

# Verify client dependencies
echo "🔍 Verifying client workspace..."
npm ls --workspace=client || echo "Dependency tree has issues, continuing..."

# Build with verbose output
echo "🔨 Building client application..."
npm run build --workspace=client --verbose

# Verify build output
if [ -d "client/dist" ]; then
  echo "✅ Build successful!"
  echo "📁 Build output:"
  ls -la client/dist/
else
  echo "❌ Build failed - no dist directory found"
  exit 1
fi
