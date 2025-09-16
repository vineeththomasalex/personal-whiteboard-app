# Create Teams App Package
# This script creates the required icons and packages the app for Teams

Write-Host "Creating Teams App Package..." -ForegroundColor Green

# Create icons directory if it doesn't exist
$iconsDir = "public/icons"
if (!(Test-Path $iconsDir)) {
    New-Item -ItemType Directory -Path $iconsDir -Force
    Write-Host "Created icons directory" -ForegroundColor Yellow
}

# Create a simple color icon (192x192) using PowerShell
$colorIconPath = "$iconsDir/color.png"
$outlineIconPath = "$iconsDir/outline.png"

Write-Host "Note: You'll need to add proper icon files:" -ForegroundColor Yellow
Write-Host "  - $colorIconPath (192x192px)" -ForegroundColor Yellow
Write-Host "  - $outlineIconPath (32x32px)" -ForegroundColor Yellow
Write-Host ""
Write-Host "For now, creating placeholder text files..." -ForegroundColor Yellow

# Create placeholder files
"Placeholder for color icon (192x192px)" | Out-File -FilePath $colorIconPath -Encoding ASCII
"Placeholder for outline icon (32x32px)" | Out-File -FilePath $outlineIconPath -Encoding ASCII

# Copy manifest to package directory
$packageDir = "package"
if (!(Test-Path $packageDir)) {
    New-Item -ItemType Directory -Path $packageDir -Force
}

Copy-Item "public/manifest/manifest.json" "$packageDir/manifest.json"
Copy-Item "$colorIconPath" "$packageDir/color.png" -ErrorAction SilentlyContinue
Copy-Item "$outlineIconPath" "$packageDir/outline.png" -ErrorAction SilentlyContinue

Write-Host "Package contents ready in $packageDir/" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Add proper PNG icon files to the package directory" -ForegroundColor White
Write-Host "2. Create a ZIP file with manifest.json, color.png, and outline.png" -ForegroundColor White
Write-Host "3. Upload the ZIP file to Teams Developer Portal" -ForegroundColor White