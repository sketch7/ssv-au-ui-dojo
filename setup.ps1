$package = (Get-Content "package.json") -join "`n" | ConvertFrom-Json

Write-Host "========================" -ForegroundColor Green
Write-Host "    Setup $($package.name)" -ForegroundColor Green
Write-Host "========================" -ForegroundColor Green

Write-Host "npm install..." -ForegroundColor Cyan
& npm install
Write-host ""

Write-Host "npm prune..." -ForegroundColor Cyan
& npm prune
Write-host ""

Write-Host "setup symbolic link..." -ForegroundColor Cyan
cmd /c mklink /d wwwroot\node_modules "$(get-location)\node_modules"
Write-host ""

Write-Host "building..." -ForegroundColor Cyan
& gulp rebuild
Write-host ""

Write-Host "========================" -ForegroundColor Green
Write-Host "    Setup complete" -ForegroundColor Green
Write-Host "========================" -ForegroundColor Green