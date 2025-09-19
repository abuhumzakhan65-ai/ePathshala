Write-Host "🚀 Starting ePathshala setup (frontend+backend)..."

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
# adjust path if the script is run from elsewhere
Set-Location $projectRoot

# FRONTEND
Write-Host "Installing frontend dependencies..."
Set-Location (Join-Path $projectRoot "frontend")
npm install

Write-Host "Starting frontend..."
Start-Process powershell -ArgumentList "cd `"$PWD`"; npm run dev" -NoNewWindow

# BACKEND
Set-Location $projectRoot
Write-Host "Installing backend dependencies..."
Set-Location (Join-Path $projectRoot "backend")
npm install

if (-Not (Test-Path ".env")) {
  Copy-Item -Force (Join-Path $projectRoot ".env.example") ".env"
  Write-Host "Created backend .env from .env.example. Please update MONGO_URI and JWT_SECRET!"
}

Write-Host "Starting backend..."
Start-Process powershell -ArgumentList "cd `"$PWD`"; npm run dev" -NoNewWindow
