const Form = ({
  password1,
  password2,
  submit,
  errorMessage,
  setName,
  setEmail,
  setPassword1,
  setPassword2,
  setSubmit,
  setErrorMessage,
}) => {
  return (
    <section className={!submit || errorMessage ? "" : "hidden"}>
      <header>
        <h1>Create account</h1>
      </header>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (password1.length < 8) {
            alert("Votre mot de passe doit posséder 8 caractères minimum");
            setErrorMessage("password is too short");
          } else if (password1 !== password2) {
            alert("Vos 2 mots de passe ne sont pas identiques");
            setErrorMessage("password is not confirmed");
          } else {
            setErrorMessage("");
          }
        }}
      >
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            placeholder="Prénom Nom"
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            placeholder="nom@mail.com"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="password1">Password :</label>
          <input
            type="password"
            placeholder="Tapez votre mot de passe ici"
            name="password1"
            onChange={(event) => {
              setPassword1(event.target.value);
            }}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="password2">Confirm your password :</label>
          <input
            type="password"
            placeholder="Re-tapez votre mot de passe ici"
            name="password2"
            onChange={(event) => {
              setPassword2(event.target.value);
            }}
          />
        </div>
        <div>
          {" "}
          <button
            type="submit"
            onClick={() => {
              setSubmit("OK");
            }}
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
