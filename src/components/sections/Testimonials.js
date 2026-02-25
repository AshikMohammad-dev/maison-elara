import { useEffect, useState } from "react";

import { db } from "../../firebase/firebase";

import {
  collection,
  onSnapshot
} from "firebase/firestore";

function Testimonials() {

  // Firebase testimonials
  const [testimonials, setTestimonials] = useState([]);

  const [loading, setLoading] = useState(true);


  // ============================
  // FETCH FROM FIREBASE
  // ============================
  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "testimonials"),
      (snapshot) => {

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setTestimonials(data);
        setLoading(false);
      },
      (error) => {
        console.error("Testimonials error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();

  }, []);


  // ============================
  // UI
  // ============================
  return (

    <section className="testimonials">

      <div className="container">

        <h2 className="section-title">
          Client Love
        </h2>


        {loading ? (

          <div className="empty-state">
            <p>Loading testimonials...</p>
          </div>

        ) : testimonials.length === 0 ? (

          <div className="empty-state">
            <p>No testimonials yet.</p>
          </div>

        ) : (

          <div className="testimonial-grid">

            {testimonials.map((item) => (

              <div
                className="testimonial-card"
                key={item.id}
              >

                <p>“{item.text}”</p>

                <h4>
                  — {item.name}
                </h4>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  );
}

export default Testimonials;