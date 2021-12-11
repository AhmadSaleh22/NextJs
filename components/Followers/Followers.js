import FollowersList from '../FollowersList/FollowersList'
import Header from '../Header/Header'
import styles from '../../styles/Followers.module.css'
export default function Followers() {
    return (
        <div className={styles.followers}>
            <Header title="Followers" />
            <FollowersList />
        </div>
    )
}
