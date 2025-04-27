import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGitHubUser } from "../services/api";
import { CardStyled } from "../components/CardStyled";

export function VersaoStyled() {
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState<any>(null);

  const username = searchParams.get("user") || "";

  useEffect(() => {
    if (username) {
      fetchGitHubUser(username).then(setUser);
    }
  }, [username]);

  if (!user) return <p>Carregando...</p>;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6",
      }}
    >
      <CardStyled user={user} />
    </div>
  );
}
