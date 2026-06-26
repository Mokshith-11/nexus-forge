# Scripts

## Daily GitHub sync

`daily-github-sync.ps1` commits any working-tree changes and pushes them to
`origin`. It is run automatically once a day by a Windows Scheduled Task named
**NexusForge Daily GitHub Sync** (default time: 18:00 local).

### Manage the task

```powershell
# Run it now
schtasks /Run /TN "NexusForge Daily GitHub Sync"

# See its status / next run time
schtasks /Query /TN "NexusForge Daily GitHub Sync" /V /FO LIST

# Change the time (e.g. 09:30)
schtasks /Change /TN "NexusForge Daily GitHub Sync" /ST 09:30

# Remove it
schtasks /Delete /TN "NexusForge Daily GitHub Sync" /F
```

Activity is logged to `scripts/daily-sync.log` (git-ignored).
