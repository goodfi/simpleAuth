import React from 'react';
import { CheckCircleIcon } from 'lucide-react';

interface FormSuccesProps {
  message?: string;
}

const FormSucces = ({ message }: FormSuccesProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15  p-4 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircleIcon className="h-4 w-4" />
      <p className="">{message}</p>
    </div>
  );
};

export default FormSucces;
