'use client';

import { useFormState } from 'react-dom';
import { useActionState } from 'react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { ActionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

const FormContainer = ({
  action,
  children,
}: {
  action: ActionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state?.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
