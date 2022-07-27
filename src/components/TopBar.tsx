import { useNavigate } from "react-router-dom";
import styles from "./TopBar.module.css";
import { ReactComponent as SettingsIcon } from 'iconoir/icons/settings.svg'
import { ReactComponent as FAQIcon } from 'iconoir/icons/question-mark-circle.svg'
import { ReactComponent as HistoryIcon } from 'iconoir/icons/book-stack.svg'
import { ReactComponent as GithubIcon } from 'iconoir/icons/github-outline.svg'
import { ReactComponent as IssueIcon } from 'iconoir/icons/chat-bubble-warning.svg'


export function TopBar() {
	const navigate = useNavigate();
	const params = new URLSearchParams(window.location.search);

	return <div className={styles.topBar}>
		{/* <a href="https://discord.com/invite/HFfu6sZ" target="_blank" rel="noreferrer">
			<img className={styles.icon} src="discord_logo.svg" alt="Discord link" />
		</a> */}
		<a href="https://github.com/jy1263/rotmg-dps-calculator/issues/new/choose" target="_blank" rel="noreferrer">
			<IssueIcon className={styles.icon} title="Submit an Issue" />
		</a>

		<a href="https://github.com/jy1263/rotmg-dps-calculator" target="_blank" rel="noreferrer">
			<GithubIcon className={styles.icon} title="GitHub Repository" />
		</a>

		<div onClick={() => navigate("changelog")}>
			<HistoryIcon className={`${styles.icon}`} title="Changelog" />
		</div>

		<div onClick={() => navigate("help")}>
			<FAQIcon className={`${styles.icon}`} title="FAQ" />
			{/* <img className={`${styles.icon} ${styles.invert}`} src="help_icon.svg" alt="FAQ" /> */}
		</div>

		<div onClick={() => navigate("settings")}>
			<SettingsIcon className={`${styles.icon}`} title="Settings" />
		</div>

		<div className={styles.dropdown}>
			<select value={params.get("config") || undefined} title="config" name="config" onChange={(e) => { 
				const val = e.target.value;
				Boolean(val.length) ? params.set("config", val) : params.delete("config");
				window.location.search = params.toString();
			}}>
				<option value="">Production</option>
				<option value="testing.json">Testing</option>
			</select>
		</div>

		<div className={styles.title}>
			{window.location.hostname}
		</div>
	</div>
}