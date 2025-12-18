import Card from "./components/Card";


const App = () => {
  const students = [
    {
      id: 1,
      name: "suraj kelaginamani",
      number: "8010383695",
      profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aarav"
    },
    {
      id: 2,
      name: "sakshi kelaginamani",
      number: "9021573472",
      profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Riya"
    },
    {
      id: 3,
      name: "Kunal Deshmukh",
      number: "9699969043",
      profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Kunal"
    },
    {
      id: 4,
      name: "Sneha Kulkarni",
      number: "9012345678",
      profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sneha"
    },
    {
      id: 5,
      name: "Rohit Jadhav",
      number: "9090909090",
      profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Rohit"
    },
    {
      id: 6,
      name: "Pooja Chavan",
      number: "9345678123",
      profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Pooja"
    },
    {
      id: 7,
      name: "Aditya Joshi",
      number: "9765432109",
      profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aditya"
    },
    {
      id: 8,
      name: "Neha Pawar",
      number: "9887766554",
      profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Neha"
    },
    {
      id: 9,
      name: "Omkar More",
      number: "9556677889",
      profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Omkar"
    },
    {
      id: 10,
      name: "Kavya Naik",
      number: "9665544332",
      profilePic: "https://api.dicebear.com/7.x/adventurer/svg?seed=Kavya"
    }
  ];

  return (
    <div>
      <h1>Hello welcome to my page</h1>

      <div className="card-container">
        {students.map((student) => (
          <Card
            key={student.id}
            name={student.name}
            number={student.number}
            img={student.profilePic}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
