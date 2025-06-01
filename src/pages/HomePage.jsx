import { FaChalkboardTeacher, FaTools, FaBriefcase } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          OPEN EDUCATIONAL DEVELOPMENT RESEARCH & WELFARE SOCIETY
        </div>
        <ul className="flex gap-4 text-sm">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Programs</a></li>
          <li><a href="#" className="hover:underline">Placement</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-100 text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Youth Through Education & Skills
        </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join us in our mission to uplift the youth of Sundernagar through quality education, vocational training, and job placements.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">Join Us</button>
          <button className="bg-white border border-blue-700 text-blue-700 px-6 py-2 rounded hover:bg-blue-100">Explore Programs</button>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-white px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Our Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <FaChalkboardTeacher className="text-blue-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>Enhancing foundational and advanced education for underprivileged youth.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <FaTools className="text-blue-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
            <p>Providing hands-on training and technical skills to boost employability.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <FaBriefcase className="text-blue-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Placement</h3>
            <p>Connecting skilled youth with career opportunities and growth.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4">
        © {new Date().getFullYear()} OPEN EDUCATIONAL DEVELOPMENT RESEARCH & WELFARE SOCIETY, SUNDARNAGAR
      </footer>
    </div>
  );
}

