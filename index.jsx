import React, { useState, useEffect } from 'react';

// Main App Component
export default function App() {
    const [user, setUser] = useState(null);
    const [page, setPage] = useState('dashboard'); // dashboard, subject, leaderboard

    // Mock user login
    useEffect(() => {
        setUser({
            name: 'Priya Sharma',
            level: 5,
            points: 1250,
            profilePic: 'https://placehold.co/100x100/a855f7/ffffff?text=P'
        });
    }, []);

    const navigateTo = (pageName) => setPage(pageName);

    return (
        <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
            <div className="container mx-auto p-4 max-w-4xl">
                <Header user={user} />
                <Navbar navigateTo={navigateTo} activePage={page} />
                <main className="mt-6">
                    {page === 'dashboard' && <Dashboard />}
                    {page === 'subject' && <SubjectView />}
                    {page === 'leaderboard' && <Leaderboard />}
                </main>
                <Footer />
            </div>
        </div>
    );
}

// Header Component
const Header = ({ user }) => {
    if (!user) return null;
    return (
        <header className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold text-purple-700">Gyanodaya</h1>
                <p className="text-gray-500">Welcome back, {user.name}!</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="text-right">
                    <p className="font-semibold">{user.points} Points</p>
                    <p className="text-sm text-yellow-500">Level {user.level}</p>
                </div>
                <img src={user.profilePic} alt="Profile" className="w-14 h-14 rounded-full border-2 border-purple-500" />
            </div>
        </header>
    );
};

// Navbar Component
const Navbar = ({ navigateTo, activePage }) => {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
        { id: 'subject', label: 'Subjects', icon: '📚' },
        { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
    ];

    return (
        <nav className="mt-6 bg-white rounded-xl shadow-md p-2 flex justify-around">
            {navItems.map(item => (
                <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`flex-1 text-center p-3 rounded-lg transition-colors ${activePage === item.id ? 'bg-purple-100 text-purple-700 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="block text-sm mt-1">{item.label}</span>
                </button>
            ))}
        </nav>
    );
};

// Dashboard Component
const Dashboard = () => {
    const dailyChallenge = { title: 'Daily Math Quiz', points: 50 };
    const recentActivity = [
        { subject: 'Science', achievement: 'Badge: "Molecule Master"' },
        { subject: 'History', achievement: 'Completed "Ancient Civilizations"' },
    ];

    return (
        <div>
            <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Daily Challenge</h2>
                <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r-lg flex justify-between items-center">
                    <div>
                        <p className="font-semibold">{dailyChallenge.title}</p>
                        <p className="text-sm text-yellow-700">Earn {dailyChallenge.points} extra points!</p>
                    </div>
                    <button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors">Start</button>
                </div>
            </div>

            <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <ul className="space-y-3">
                    {recentActivity.map((activity, index) => (
                        <li key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <span className="text-lg">{activity.subject === 'Science' ? '🔬' : '📜'}</span>
                            <div>
                                <p className="font-semibold">{activity.subject}</p>
                                <p className="text-sm text-gray-500">{activity.achievement}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// SubjectView Component
const SubjectView = () => {
    const subjects = [
        { name: 'Mathematics', icon: '🔢', progress: 75, color: 'blue' },
        { name: 'Science', icon: '🔬', progress: 50, color: 'green' },
        { name: 'History', icon: '📜', progress: 90, color: 'orange' },
        { name: 'English', icon: '🔤', progress: 30, color: 'red' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects.map(subject => (
                <div key={subject.name} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-4">
                        <span className={`text-4xl p-3 bg-${subject.color}-100 rounded-full`}>{subject.icon}</span>
                        <div>
                            <h3 className="text-lg font-bold">{subject.name}</h3>
                            <p className="text-sm text-gray-500">You've completed {subject.progress}%</p>
                        </div>
                    </div>
                    <div className="mt-4 bg-gray-200 rounded-full h-2.5">
                        <div className={`bg-${subject.color}-500 h-2.5 rounded-full`} style={{ width: `${subject.progress}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};


// Leaderboard Component
const Leaderboard = () => {
    const players = [
        { rank: 1, name: 'Rohan Patel', points: 1500, avatar: 'https://placehold.co/50x50/22c55e/ffffff?text=R' },
        { rank: 2, name: 'Priya Sharma', points: 1250, avatar: 'https://placehold.co/50x50/a855f7/ffffff?text=P', isCurrentUser: true },
        { rank: 3, name: 'Amit Singh', points: 1100, avatar: 'https://placehold.co/50x50/3b82f6/ffffff?text=A' },
        { rank: 4, name: 'Sunita Devi', points: 950, avatar: 'https://placehold.co/50x50/f97316/ffffff?text=S' },
        { rank: 5, name: 'Vikram Kumar', points: 800, avatar: 'https://placehold.co/50x50/ef4444/ffffff?text=V' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Top Learners 🏆</h2>
            <div className="space-y-3">
                {players.map(player => (
                    <div key={player.rank} className={`flex items-center p-3 rounded-lg ${player.isCurrentUser ? 'bg-purple-100 border-2 border-purple-400' : 'bg-gray-50'}`}>
                        <span className="text-lg font-bold w-8">{player.rank}</span>
                        <img src={player.avatar} alt={player.name} className="w-12 h-12 rounded-full mx-4" />
                        <span className="font-semibold flex-grow">{player.name}</span>
                        <span className="font-bold text-purple-600">{player.points} pts</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="text-center text-gray-500 text-sm mt-8 pb-4">
            <p>&copy; 2025 Gyanodaya. Empowering Rural Minds.</p>
        </footer>
    );
};
