import { useState, useEffect } from "react";

export default function GithubActivities() {
  const [activities, setActivities] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    pushes: 0,
    prs: 0,
    issues: 0,
    stars: 0,
    forks: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/orgs/Tux-Glug/events"),
          fetch("https://api.github.com/orgs/Tux-Glug/repos?sort=updated&per_page=10"),
        ]);

        if (!eventsRes.ok || !reposRes.ok) {
          throw new Error(`HTTP error! events: ${eventsRes.status}, repos: ${reposRes.status}`);
        }

        const eventsData = await eventsRes.json();
        const reposData = await reposRes.json();

        setActivities(eventsData);
        setRepos(reposData);

        const newStats = {
          total: eventsData.length,
          pushes: eventsData.filter((e) => e.type === "PushEvent").length,
          prs: eventsData.filter((e) => e.type === "PullRequestEvent").length,
          issues: eventsData.filter((e) => e.type === "IssuesEvent").length,
          stars: eventsData.filter((e) => e.type === "WatchEvent").length,
          forks: eventsData.filter((e) => e.type === "ForkEvent").length,
        };
        setStats(newStats);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTopContributors = () => {
    const contributorMap = {};
    activities.forEach((event) => {
      const user = event.actor.login;
      if (!contributorMap[user]) {
        contributorMap[user] = { login: user, avatar_url: event.actor.avatar_url, count: 0 };
      }
      contributorMap[user].count++;
    });
    return Object.values(contributorMap)
      .sort((a, b) => b.count - a.count)
      .slice(0, 4); 
  };

  const getGroupedTimeline = () => {
    const grouped = {};
    activities.forEach((event) => {
      const key = `${event.actor.login}-${event.type}-${event.repo.name}`;
      if (!grouped[key]) {
        grouped[key] = {
          id: event.id,
          actor: event.actor,
          type: event.type,
          repo: event.repo.name,
          count: 0,
          created_at: event.created_at,
        };
      }
      grouped[key].count++;
    });
    return Object.values(grouped)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 8); 
  };

  const getEventIcon = (type) => {
    const icons = {
      PushEvent: "📤",
      PullRequestEvent: "🔀",
      IssuesEvent: "🐛",
      WatchEvent: "⭐",
      ForkEvent: "🍴",
      CreateEvent: "✨",
      DeleteEvent: "🗑️",
      ReleaseEvent: "📦",
    };
    return icons[type] || "📌";
  };

  const formatEventText = (event) => {
    const repo = <span className="text-gray-300 font-medium break-all">{event.repo}</span>;
    const countText = event.count > 1 ? ` (${event.count} times)` : "";

    switch (event.type) {
      case "PushEvent":
        return <>Pushed{countText} to {repo}</>;
      case "PullRequestEvent":
        return <>Opened{countText} a PR in {repo}</>;
      case "IssuesEvent":
        return <>Opened{countText} an issue in {repo}</>;
      case "WatchEvent":
        return <>Starred {repo}</>;
      case "ForkEvent":
        return <>Forked {repo}</>;
      case "CreateEvent":
        return <>Created a branch/repo in {repo}</>;
      default:
        return <>Performed {event.type} in {repo}</>;
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <section className="mt-20 max-w-7xl mx-auto px-4 overflow-hidden">
        <h2 className="text-green-400 mb-10 font-mono text-2xl break-words">$ github_activities<span className="animate-pulse">_</span></h2>
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-400 animate-pulse">Fetching GitHub activity...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-20 max-w-7xl mx-auto px-4 overflow-hidden">
        <h2 className="text-green-400 mb-6 font-mono text-2xl break-words">$ github_activities</h2>
        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
          <p className="text-red-400 font-medium break-words">Error: {error}</p>
          <p className="text-gray-400 text-sm mt-2">Note: GitHub API rate limit is 60 requests/hr for unauthenticated users.</p>
        </div>
      </section>
    );
  }

  const topContributors = getTopContributors();
  const groupedTimeline = getGroupedTimeline();

  const statCards = [
    { label: "Total Events", value: stats.total },
    { label: "Pushes", value: stats.pushes },
    { label: "Pull Requests", value: stats.prs },
    { label: "Issues", value: stats.issues },
    { label: "Stars", value: stats.stars },
    { label: "Forks", value: stats.forks },
  ];

  return (
    <section className="mt-20 mb-16 max-w-7xl mx-auto px-4 overflow-hidden">
      <h2 className="text-green-400 mb-8 font-mono text-xl sm:text-2xl break-words">$ github_activities</h2>

      {/* Overview Stats - Hidden on mobile, shows as grid on sm screens and up */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
        {statCards.map((stat, idx) => (
          <div key={idx} className="bg-gray-900/50 p-3 sm:p-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 truncate">{stat.label}</p>
            <p className="text-2xl sm:text-3xl text-green-400 font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Repos & Contributors */}
        <div className="lg:col-span-2 space-y-10 min-w-0">
          
          {/* Top Repositories - Hidden on mobile */}
          <div className="hidden sm:block">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-200 text-lg font-semibold">Active Repositories</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repos.slice(0, 4).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-900/40 p-4 sm:p-5 rounded-xl border border-gray-800 hover:border-green-500/50 hover:bg-gray-900 transition-all group min-w-0"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-green-400 font-medium truncate group-hover:text-green-300">
                      {repo.name}
                    </p>
                    <span className="text-gray-600 group-hover:text-gray-400 shrink-0">↗</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2 min-h-[40px] break-words">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex gap-4 mt-4 text-gray-400 text-sm font-medium">
                    <span className="flex items-center gap-1">⭐ {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1">🍴 {repo.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Top Contributors - Visible on mobile and desktop */}
          <div>
            <h3 className="text-gray-200 text-lg font-semibold mb-4">Top Contributors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topContributors.map((user, idx) => (
                <div key={user.login} className="flex items-center gap-3 sm:gap-4 bg-gray-800/30 p-3 sm:p-4 rounded-xl border border-gray-700/50 hover:bg-gray-800/50 transition-colors min-w-0">
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-900 text-gray-400 font-bold text-xs sm:text-sm border border-gray-700 shrink-0">
                    #{idx + 1}
                  </div>
                  <img src={user.avatar_url} alt={user.login} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-200 font-semibold text-base sm:text-lg truncate">{user.login}</p>
                    <p className="text-green-400 text-xs sm:text-sm truncate">{user.count} contributions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Timeline Sidebar - Hidden on mobile */}
        <div className="hidden sm:block lg:col-span-1 min-w-0">
          <div className="bg-[#0d1117] rounded-xl border border-gray-800 p-4 sm:p-6 h-full shadow-lg overflow-hidden">
            <h3 className="text-gray-200 text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
              Activity Feed
            </h3>
            
            <div className="space-y-6 border-l-2 border-gray-800 ml-3 sm:ml-4 pl-5 sm:pl-6 relative">
              {groupedTimeline.map((event) => (
                <div key={event.id} className="relative group">
                  
                  {/* Timeline Icon Marker */}
                  <span className="absolute -left-[37px] sm:-left-[41px] top-1 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-900 border-2 border-gray-700 text-xs sm:text-sm shadow-sm group-hover:border-green-500 transition-colors">
                    {getEventIcon(event.type)}
                  </span>
                  
                  {/* Event Card */}
                  <div className="bg-gray-800/20 rounded-lg p-3 border border-gray-800/50 hover:border-gray-700 transition-colors min-w-0">
                    
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <img src={event.actor.avatar_url} alt="" className="w-5 h-5 rounded-full shrink-0" />
                        <span className="text-green-400 font-medium text-sm truncate">{event.actor.login}</span>
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-500 bg-gray-900 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                        {formatDate(event.created_at)}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-snug break-words">
                      {formatEventText(event)}
                    </p>
                  </div>

                </div>
              ))}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}