// import { Mail, MapPin, Phone, Send } from "lucide-react";
// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   try {
//     const response = await fetch('https://arlmdzfzstnuayxqhsft.supabase.co/rest/v1/contact_messages', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybG1kemZ6c3RudWF5eHFoc2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNDA3NjUsImV4cCI6MjA4OTkxNjc2NX0.UYzkbxlVixZ0VD2L_i86pYzWTr6Pcd2elNcungnVeds'
//       },
//       body: JSON.stringify(formData)
//     });
//     if (response.ok) {
//       setSubmitted(true);
//       setFormData({ name: '', email: '', message: '' });
//       setTimeout(() => setSubmitted(false), 3000);
//     }
//   } catch (error) {
//     console.error('Error submitting form:', error);
//   } finally {
//     setLoading(false);
//   }
// };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setSubmitted(true);
//         setFormData({ name: "", email: "", message: "" });
//         setTimeout(() => setSubmitted(false), 3000);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-slate-50">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
//           Get In Touch
//         </h2>
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold mb-6 text-slate-900">
//               Let's Connect
//             </h3>
//             <p className="text-slate-700 mb-8 leading-relaxed">
//               I'm always open to discussing new projects, creative ideas, or
//               opportunities to be part of your vision. Feel free to reach out if
//               you want to collaborate or just have a chat!
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="bg-emerald-500 p-3 rounded-lg">
//                   <Mail className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-slate-900">Email</p>
//                   <a
//                     href="mailto:aalokgupta4545@gmail.com"
//                     className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
//                   >
//                     aalokgupta4545@gmail.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="bg-emerald-500 p-3 rounded-lg">
//                   <MapPin className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-slate-900">Location</p>
//                   <p className="text-slate-600">Available for remote work</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="bg-emerald-500 p-3 rounded-lg">
//                   <Phone className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-slate-900">Availability</p>
//                   <p className="text-slate-600">Open to opportunities</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-semibold text-slate-900 mb-2"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Your name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-semibold text-slate-900 mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
//                   placeholder="your.email@example.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-semibold text-slate-900 mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
//                   placeholder="Your message..."
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
//               >
//                 <Send className="w-5 h-5" />
//                 {loading ? "Sending..." : "Send Message"}
//               </button>
//               {submitted && (
//                 <p className="text-emerald-600 text-center font-semibold">
//                   Message sent successfully!
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xjgpvqee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20  bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left */}
        {/* <div>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-slate-600">
            Feel free to contact me for projects or collaboration.
          </p>
        </div> */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a
                  href="mailto:aalokgupta4545@gmail.com"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  aalokgupta4545@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <Phone className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <a
                  href="tel:+1234567890"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  +91 8808142859
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-slate-400">Lucknow, Uttar Pradesh</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-800 rounded-xl">
            <h4 className="font-semibold mb-4">Availability</h4>
            <p className="text-slate-400">
              Currently available for freelance projects and full-time
              opportunities. Response time: Usually within 24 hours.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              // className="w-full px-4 py-3 border rounded-lg"
              className="w-full px-4 py-3 bg-white text-black border border-slate-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              // className="w-full px-4 py-3 border rounded-lg"
              className="w-full px-4 py-3 bg-white text-black border border-slate-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              // className="w-full px-4 py-3 border rounded-lg"
              className="w-full px-4 py-3 bg-white text-black border border-slate-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 text-white py-3 rounded-lg flex justify-center items-center gap-2"
            >
              <Send className="w-5 h-5" />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="text-green-600 text-center">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
