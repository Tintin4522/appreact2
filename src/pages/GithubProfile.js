import { useEffect, useState } from 'react';



const GitHubProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github-john-doe');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Erreur de chargement du profil GitHub:', error);
      }
    };

    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github-john-doe/repos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Erreur de chargement du profil GitHub:', error);
      }
    };

    fetchProfileData();
    fetchRepositories();
  }, []);

  if (!profileData || repositories.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gitProfil">
        <h1>{profileData.name}</h1>
        <img src="img/Github-profil.png" alt="représentation humoristique d'un chat" className="img-fluid" />
        <p>{profileData.bio}</p>
        <p>Abonnés: {profileData.followers}</p>
        <p>Abonnements: {profileData.following}</p>
        <p>Créé le: {profileData.created_at}</p>
        <p>Modifié le: {profileData.updated_at}</p>
        <h2>URL Repositories:</h2>
        <ul>
            {repositories.map(repo => (
            <p key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
            </p>
            ))}
        </ul>
    </div>
  );
};

export default GitHubProfile;

