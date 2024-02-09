import React from "react";

interface ErrorProps {
  error: string;
}

export function ErrorMessage({ error }: ErrorProps) {
  return <p className="text-center text-red-600 ">{error}</p>;
}
