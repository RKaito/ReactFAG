import React from "react";

interface CardProps {
  user: {
    avatar_url: string;
    name: string;
    bio: string;
    html_url: string;
  };
}

export function CardTailwind({ user }: CardProps) {
  return (
    <div className="p-6 rounded-xl shadow-lg bg-white flex flex-col items-center gap-4">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-24 h-24 rounded-full"
      />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600 text-center">
        {user.bio || "Nenhuma bio disponível."}
      </p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Ver Perfil no GitHub
      </a>
    </div>
  );
}
