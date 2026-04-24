import useForm from "../hooks/useForm.js";

export default function MyForm() {
  const [formValues, handleInputChange] = useForm({ name: "", email: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        placeholder="Namn"
      />
      <input
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button type="submit">Skicka</button>
    </form>
  );
}
