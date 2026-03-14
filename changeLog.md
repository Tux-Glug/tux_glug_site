# Changelog

## [Unreleased]

### Added
- **Bootcamp page** (`Client/src/pages/Bootcamp.jsx`)
  - Basic page with navbar and footer
  - Placeholder text "Coming soon..."
  
- **GithubActivities component** (`Client/src/components/GithubActivities.jsx`)
  - Top 3 contributors leaderboard with GitHub avatars
  - Top 5 repositories with stars and forks (clickable links)
  - Activity stats: Total Events, Pushes, PRs, Issues, Stars, Forks
  - Timeline with grouped events and user avatars
  - Fetches from GitHub API: `https://api.github.com/orgs/Tux-Glug/events`
  - Fetches repos from: `https://api.github.com/orgs/Tux-Glug/repos`

- **New route** in App.jsx: `/bootcamp`
- **Nav link** added to Navbar (mobile menu)

### Changed
- Global font size increased by 2 points (112%) in index.css
- Timeline layout:
  - Green dots with connecting lines
  - User avatars visible on all screen sizes (mobile + desktop)
  - Limited to 6 entries
  - Added margin-bottom (mb-16) to separate from footer
  - Timeline entries now show grouped events: "user pushed (x times) to reponame"
- Component text sizes increased (headings, stats)

### Fixed
- Fixed React error: "Objects are not valid as a React child" - event.actor is an object, need to use event.actor.login
- Fixed vite.config.js base path error (added leading slash)
- Fixed timeline icon rendering issue

### Known Issues
- GitHub API rate limit (60 requests/hour for unauthenticated)
- Some event types show raw names (e.g., "performed CreateEvent in reponame")
