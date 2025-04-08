# smartlog


### front-End system workflow

## User Arrives at Work & Logs In

- The app requests location access.

- It checks if the user arrived on time.

- The system logs their check-in time.

## User Remains Logged In During Work Hours

- Logging out is disabled until the end of the workday.

- The app can still track breaks, movement within the office, etc.

## End of Workday – User Can Log Out

- The app checks location again before allowing logout.

- If the user has left the workplace early, it logs an early exit record.

- Otherwise, the user logs out normally


