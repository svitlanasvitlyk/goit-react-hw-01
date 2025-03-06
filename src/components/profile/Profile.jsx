import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.image} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.tag}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.listHeading}>Followers</span>
          <span className={styles.listQuantity}>{stats.followers}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listHeading}>Views</span>
          <span className={styles.listQuantity}>{stats.views}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listHeading}>Likes</span>
          <span className={styles.listQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
