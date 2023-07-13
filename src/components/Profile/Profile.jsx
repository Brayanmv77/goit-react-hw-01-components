export default function Profile({ profile }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={profile.avatar} alt="User avatar" className="avatar" />
        <p className="name">{profile.username}</p>
        <p className="tag">{profile.tag}</p>
        <p className="location">{profile.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{profile.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{profile.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{profile.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
