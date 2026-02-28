// Updated login flow to fetch role from profiles
function handleLogin(credentials) {
    // Perform login with credentials
    const user = login(credentials);
    // Fetch user role based on profile
    const role = fetchRoleFromProfile(user.id);

    // Conditional routing based on role
    if (role === 'Client') {
        navigateToClientScreens();
    } else if (role === 'Legacy') {
        navigateToLegacyDashboard();
    } else {
        throw new Error('Invalid role');
    }
}