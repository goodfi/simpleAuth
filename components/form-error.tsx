import React from 'react';
import { TriangleAlert } from 'lucide-react';

interface FormErorProps {
  message?: string;
}

const FormError = ({ message }: FormErorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15  p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <TriangleAlert className="h-4 w-4" />
      <p className="">{message}</p>
    </div>
  );
};

export default FormError;
