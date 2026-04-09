if (-not (Test-Path "node_modules\.package-lock.json")) {
  Write-Host "Installing dependencies..."
  npm install
  Write-Host "Generating Prisma client..."
  npm run prisma:generate
}
npm run dev
