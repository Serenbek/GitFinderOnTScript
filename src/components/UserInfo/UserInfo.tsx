import { LocalGithubUser } from "../../types";
import styles from "./UserInfo.module.scss";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";
import { InfoItem, InfoItemProps } from "../InfoItem";

interface UserInfoProps
  extends Pick<LocalGithubUser, "blog" | "company" | "location" | "twitter"> {}

const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  const items: InfoItemProps [] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: "",
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};

export default UserInfo;
