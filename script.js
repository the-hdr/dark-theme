function toggleTheme()
{
    const root = document.documentElement;

    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
}

const root = document.documentElement;
root.className = "light";
document.querySelector('.toggle-button').addEventListener('click', toggleTheme);