import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SummaryInfoContainer,
  SummaryInfoHeader,
  SummaryIcons,
  SummaryContainer,
  Avatar,
} from "./styles";
import { githubUserApi } from "../../lib/axios";
import { useEffect, useState } from "react";

interface UserDataProps {
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
  html_url: string;
  avatar_url: string;
}

export function Summary() {
  const [userData, setUserData] = useState<UserDataProps | null>(null);

  async function fetchUserData() {
    try {
      const response = await githubUserApi.get("gabschlemper");
      setUserData(response.data as UserDataProps);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <SummaryContainer>
      <div>
        <Avatar src={userData?.avatar_url} alt="" />
      </div>

      <SummaryInfoContainer>
        <SummaryInfoHeader>
          <span>{userData?.name}</span>
          <a href={userData?.html_url} target="_blank">
            <div>Github</div>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </SummaryInfoHeader>
        <p>{userData?.bio}</p>
        <SummaryIcons>
          <span>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" />
            <p>{userData?.login}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} color="#3A536B" />
            <p>{userData?.company}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} color="#3A536B" />
            <p>{userData?.followers} seguidores</p>
          </span>
        </SummaryIcons>
      </SummaryInfoContainer>
    </SummaryContainer>
  );
}
