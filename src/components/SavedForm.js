const SavedForm = ({
  errorMessage,
  submit,
  name,
  email,
  password1,
  setSubmit,
}) => {
  if (!errorMessage && submit) {
    return (
      <section className="results">
        <h1>Results</h1>
        <div className="infos">
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Password : {password1}</p>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setSubmit("");
            }}
          >
            Edit your information
          </button>
        </div>
      </section>
    );
  } else {
    return "";
  }
};

export default SavedForm;
