import CardWrapper from '../CardWrapper';

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcom back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      Login form
    </CardWrapper>
  );
};
