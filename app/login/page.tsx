export default function loginPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // submit logic
  };

  return (
    <form>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="text-black"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="text-black"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
