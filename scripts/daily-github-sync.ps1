# Daily GitHub sync for Nexus Forge.
# Commits any working-tree changes and pushes them to origin.
# Registered as a Windows Scheduled Task (see scripts/README.md).

$ErrorActionPreference = 'Stop'
Set-Location 'D:\CLAUDE WORKS'

$log = 'D:\CLAUDE WORKS\scripts\daily-sync.log'
$stamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'

try {
    git add -A
    $changes = git status --porcelain
    if ([string]::IsNullOrWhiteSpace($changes)) {
        Add-Content $log "$stamp  no changes"
        exit 0
    }
    git commit -m "chore: daily sync $stamp" | Out-Null
    git push origin HEAD
    Add-Content $log "$stamp  pushed"
}
catch {
    Add-Content $log "$stamp  ERROR: $($_.Exception.Message)"
    exit 1
}
