const ObjectStateForm = () => {
  const [form, setForm] = useState({
    // instead of using multiple smaller staten objects, we canm use a single big object
    username: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // e.target.name will get replaced with
    // value in the name field of the form
    // e.target.name we can use like this because the field name in the object and the value of the
    // name property of the form
  };
  return (
    <form>
      <input onChange={handleChange} type="text" name="username" />
      <input onChange={handleChange} type="text" name="email" />
      <input onChange={handleChange} type="text" name="age" />
      <input onChange={handleChange} type="text" name="password" />
      <button>submit</button>
    </form>
  );
};

export default ObjectStateForm;
