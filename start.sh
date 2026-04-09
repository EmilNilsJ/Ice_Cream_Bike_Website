#!/bin/bash
if [ ! -f "node_modules/.package-lock.json" ]; then
  echo "Installing dependencies..."
  npm install
  echo "Generating Prisma client..."
  npm run prisma:generate
fi
npm run dev
