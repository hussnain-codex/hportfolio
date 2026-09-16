const portfolio = {
    name: 'Hussnain Naeem',
    title: 'Web Developer & Designer',
    skills: ['HTML', 'CSS', 'JavaScript', 'C++', 'Responsive Design'],
    projects: [
        { name: 'Portfolio Website', type: 'Frontend' },
        { name: 'Student System', type: 'C++' },
        { name: 'Interactive UI', type: 'JavaScript' }
    ],
    achievements: ['Clean UI', 'Fast Learning', 'Problem Solving']
};

const messageBox = document.getElementById('messageBox');
const highlights = document.getElementById('highlights');
const skillsBox = document.getElementById('skillsBox');

function greetUser() {
    const message = `Hello! I'm ${portfolio.name}, a ${portfolio.title}.`;
    messageBox.innerHTML = `<h3>${message}</h3><p>Focused on building modern, user-friendly web experiences.</p>`;
}

function renderHighlights() {
    highlights.innerHTML = portfolio.projects.map(project => `
        <div class="card">
            <strong>${project.name}</strong>
            <p>${project.type}</p>
        </div>
    `).join('');
}

function renderSkills() {
    skillsBox.innerHTML = portfolio.skills.map(skill => `<span class="pill">${skill}</span>`).join('');
}

function toggleTheme() {
    const isDark = document.body.style.background.includes('071126');
    const nextBackground = isDark
        ? 'linear-gradient(135deg, #f8fafc, #e2e8f0)'
        : 'linear-gradient(135deg, #071126, #0f172a)';

    document.body.style.background = nextBackground;
    document.body.style.color = isDark ? '#0f172a' : '#e2e8f0';
}

function showSkills() {
    const list = portfolio.achievements.map(item => `<li>${item}</li>`).join('');
    messageBox.innerHTML = `<h3>Core Strengths</h3><ul>${list}</ul>`;
}

document.getElementById('greetBtn').addEventListener('click', greetUser);
document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);
document.getElementById('showSkillsBtn').addEventListener('click', showSkills);

greetUser();
renderHighlights();
renderSkills();
