import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = (version: "tailwind" | "styled") => {
    if (!username) return;
    navigate(`/${version}?user=${username}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <input
        type="text"
        placeholder="Digite o nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded w-64"
      />
      <div className="flex gap-4">
        <button
          onClick={() => handleSearch("tailwind")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Ver versão Tailwind
        </button>
        <button
          onClick={() => handleSearch("styled")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Ver versão Styled
        </button>
      </div>
    </div>
  );
}
