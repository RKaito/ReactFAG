import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGitHubUser } from "../services/api";
import { CardTailwind } from "../components/CardTailwind";

export function VersaoTailwind() {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <CardTailwind user={user} />
    </div>
  );
}
