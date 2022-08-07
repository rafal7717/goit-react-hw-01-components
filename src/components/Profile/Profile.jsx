import PropTypes from 'prop-types';
import styles from './Profile.module.scss';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  const {
    profile,
    profile__description,
    profile__avatar,
    profile__name,
    profile__tag,
    profile__location,
    profile__stats,
    profile__stats_item,
    profile__stats_quantity,
    profile__stats_label,
  } = styles;
  return (
    <section>
      <div className={profile}>
        <div className={profile__description}>
          <img
            src={avatar}
            alt="User avatar"
            className={profile__avatar}
            width="100"
            height="100"
          />
          <p className={profile__name}>{username}</p>
          <p className={profile__tag}>@{tag}</p>
          <p className={profile__location}>{location}</p>
        </div>

        <ul className={profile__stats}>
          <li className={profile__stats_item}>
            <span className={profile__stats_label}>Followers</span>
            <span className={profile__stats_quantity}>
              {followers ? followers : 0}
            </span>
          </li>
          <li className={profile__stats_item}>
            <span className={profile__stats_label}>Views</span>
            <span className={profile__stats_quantity}>{views ? views : 0}</span>
          </li>
          <li className={profile__stats_item}>
            <span className={profile__stats_label}>Likes</span>
            <span className={profile__stats_quantity}>{likes ? likes : 0}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
