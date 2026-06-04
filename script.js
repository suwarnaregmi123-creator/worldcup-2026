// Teams Data with Confederations and Groups
const teams = [
    // UEFA (16 teams)
    { name: 'Austria', flag: '🇦🇹', confederation: 'UEFA', group: 'F' },
    { name: 'Belgium', flag: '🇧🇪', confederation: 'UEFA', group: 'E' },
    { name: 'Bosnia and Herzegovina', flag: '🇧🇦', confederation: 'UEFA', group: 'G' },
    { name: 'Croatia', flag: '🇭🇷', confederation: 'UEFA', group: 'H' },
    { name: 'Czechia', flag: '🇨🇿', confederation: 'UEFA', group: 'E' },
    { name: 'England', flag: '🇬🇧', confederation: 'UEFA', group: 'D' },
    { name: 'France', flag: '🇫🇷', confederation: 'UEFA', group: 'D' },
    { name: 'Germany', flag: '🇩🇪', confederation: 'UEFA', group: 'J' },
    { name: 'Greece', flag: '🇬🇷', confederation: 'UEFA', group: 'C' },
    { name: 'Italy', flag: '🇮🇹', confederation: 'UEFA', group: 'C' },
    { name: 'Netherlands', flag: '🇳🇱', confederation: 'UEFA', group: 'B' },
    { name: 'Poland', flag: '🇵🇱', confederation: 'UEFA', group: 'I' },
    { name: 'Portugal', flag: '🇵🇹', confederation: 'UEFA', group: 'J' },
    { name: 'Spain', flag: '🇪🇸', confederation: 'UEFA', group: 'B' },
    { name: 'Switzerland', flag: '🇨🇭', confederation: 'UEFA', group: 'K' },
    { name: 'Turkey', flag: '🇹🇷', confederation: 'UEFA', group: 'L' },

    // CONMEBOL (6 teams)
    { name: 'Argentina', flag: '🇦🇷', confederation: 'CONMEBOL', group: 'A' },
    { name: 'Brazil', flag: '🇧🇷', confederation: 'CONMEBOL', group: 'I' },
    { name: 'Chile', flag: '🇨🇱', confederation: 'CONMEBOL', group: 'L' },
    { name: 'Colombia', flag: '🇨🇴', confederation: 'CONMEBOL', group: 'A' },
    { name: 'Ecuador', flag: '🇪🇨', confederation: 'CONMEBOL', group: 'G' },
    { name: 'Uruguay', flag: '🇺🇾', confederation: 'CONMEBOL', group: 'H' },

    // AFC (8 teams)
    { name: 'Australia', flag: '🇦🇺', confederation: 'AFC', group: 'B' },
    { name: 'China', flag: '🇨🇳', confederation: 'AFC', group: 'F' },
    { name: 'Iran', flag: '🇮🇷', confederation: 'AFC', group: 'C' },
    { name: 'Iraq', flag: '🇮🇶', confederation: 'AFC', group: 'K' },
    { name: 'Japan', flag: '🇯🇵', confederation: 'AFC', group: 'E' },
    { name: 'South Korea', flag: '🇰🇷', confederation: 'AFC', group: 'K' },
    { name: 'Saudi Arabia', flag: '🇸🇦', confederation: 'AFC', group: 'J' },
    { name: 'Qatar', flag: '🇶🇦', confederation: 'AFC', group: 'F' },

    // CAF (9 teams)
    { name: 'Cameroon', flag: '🇨🇲', confederation: 'CAF', group: 'L' },
    { name: 'Egypt', flag: '🇪🇬', confederation: 'CAF', group: 'I' },
    { name: 'Ghana', flag: '🇬🇭', confederation: 'CAF', group: 'H' },
    { name: 'Ivory Coast', flag: '🇨🇮', confederation: 'CAF', group: 'D' },
    { name: 'Morocco', flag: '🇲🇦', confederation: 'CAF', group: 'G' },
    { name: 'Nigeria', flag: '🇳🇬', confederation: 'CAF', group: 'A' },
    { name: 'Senegal', flag: '🇸🇳', confederation: 'CAF', group: 'B' },
    { name: 'South Africa', flag: '🇿🇦', confederation: 'CAF', group: 'C' },
    { name: 'Tunisia', flag: '🇹🇳', confederation: 'CAF', group: 'L' },

    // CONCACAF (6 teams - including 3 hosts)
    { name: 'Canada', flag: '🇨🇦', confederation: 'CONCACAF', group: 'F' },
    { name: 'Costa Rica', flag: '🇨🇷', confederation: 'CONCACAF', group: 'E' },
    { name: 'Jamaica', flag: '🇯🇲', confederation: 'CONCACAF', group: 'I' },
    { name: 'Mexico', flag: '🇲🇽', confederation: 'CONCACAF', group: 'A' },
    { name: 'Panama', flag: '🇵🇦', confederation: 'CONCACAF', group: 'K' },
    { name: 'United States', flag: '🇺🇸', confederation: 'CONCACAF', group: 'B' },

    // OFC (1 team)
    { name: 'New Zealand', flag: '🇳🇿', confederation: 'OFC', group: 'H' },
];

// Groups Data
const groups = {
    A: ['Argentina', 'Nigeria', 'Mexico', 'Colombia'],
    B: ['Netherlands', 'Senegal', 'Spain', 'Australia', 'United States'],
    C: ['Greece', 'Italy', 'Iran', 'South Africa'],
    D: ['England', 'France', 'Ivory Coast'],
    E: ['Belgium', 'Czechia', 'Japan', 'Costa Rica'],
    F: ['Austria', 'China', 'Qatar', 'Canada'],
    G: ['Bosnia and Herzegovina', 'Ecuador', 'Morocco'],
    H: ['Croatia', 'Uruguay', 'Ghana', 'New Zealand'],
    I: ['Poland', 'Brazil', 'Egypt', 'Jamaica'],
    J: ['Germany', 'Portugal', 'Saudi Arabia'],
    K: ['Switzerland', 'Iraq', 'South Korea', 'Panama'],
    L: ['Turkey', 'Chile', 'Cameroon', 'Tunisia'],
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderTeams(teams);
    renderGroups();
    setupEventListeners();
});

// Render Teams
function renderTeams(teamsToRender) {
    const teamsGrid = document.getElementById('teams-grid');
    teamsGrid.innerHTML = '';

    if (teamsToRender.length === 0) {
        teamsGrid.innerHTML = '<p class="text-center" style="grid-column: 1/-1;">No teams found.</p>';
        return;
    }

    teamsToRender.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.innerHTML = `
            <div class="team-flag">${team.flag}</div>
            <h4>${team.name}</h4>
            <div class="team-confederation">${team.confederation}</div>
            <div class="team-group">Group ${team.group}</div>
        `;
        teamsGrid.appendChild(teamCard);
    });
}

// Render Groups
function renderGroups() {
    const groupsGrid = document.getElementById('groups-grid');
    groupsGrid.innerHTML = '';

    Object.keys(groups).sort().forEach(groupLetter => {
        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';

        const groupTeams = groups[groupLetter];
        const teamsList = groupTeams.map(teamName => {
            const team = teams.find(t => t.name === teamName);
            return `
                <li class="group-team">
                    <span class="group-team-flag">${team ? team.flag : '🏳️'}</span>
                    <span class="group-team-name">${teamName}</span>
                </li>
            `;
        }).join('');

        groupCard.innerHTML = `
            <div class="group-title">Group ${groupLetter}</div>
            <ul class="group-teams">${teamsList}</ul>
        `;

        groupsGrid.appendChild(groupCard);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);

            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Schedule Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterSchedule(filter);

            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Team Search
    const teamSearch = document.getElementById('team-search');
    const confederationFilter = document.getElementById('confederation-filter');

    teamSearch.addEventListener('input', function() {
        filterTeams();
    });

    confederationFilter.addEventListener('change', function() {
        filterTeams();
    });
}

// Show Section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Filter Schedule
function filterSchedule(filter) {
    const scheduleCards = document.querySelectorAll('.schedule-card');

    scheduleCards.forEach(card => {
        if (filter === 'all') {
            card.classList.remove('hidden');
        } else if (filter === 'group') {
            if (card.getAttribute('data-stage') === 'group') {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        } else if (filter === 'knockout') {
            if (card.getAttribute('data-stage') === 'knockout') {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

// Filter Teams
function filterTeams() {
    const searchValue = document.getElementById('team-search').value.toLowerCase();
    const confederationValue = document.getElementById('confederation-filter').value;

    const filteredTeams = teams.filter(team => {
        const matchesSearch = team.name.toLowerCase().includes(searchValue);
        const matchesConfederation = confederationValue === '' || team.confederation === confederationValue;
        return matchesSearch && matchesConfederation;
    });

    renderTeams(filteredTeams);
}