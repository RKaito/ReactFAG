import React from "react";
import styled from "styled-components";

interface CardProps {
  user: {
    avatar_url: string;
    name: string;
    bio: string;
    html_url: string;
  };
}

const Card = styled.div`
  padding: 24px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Bio = styled.p`
  color: #4b5563;
  text-align: center;
`;

const Button = styled.a`
  margin-top: 16px;
  padding: 8px 24px;
  background-color: #3b82f6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;

export function CardStyled({ user }: CardProps) {
  return (
    <Card>
      <Avatar src={user.avatar_url} alt={user.name} />
      <Name>{user.name}</Name>
      <Bio>{user.bio || "Nenhuma bio disponível."}</Bio>
      <Button href={user.html_url} target="_blank" rel="noopener noreferrer">
        Ver Perfil no GitHub
      </Button>
    </Card>
  );
}
