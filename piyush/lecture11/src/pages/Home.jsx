import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";

function Home() {
  const { getData, getImagesUrl } = useFirebase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData().then(async (snapshot) => {
      const dataList = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const data = doc.data();
          const imageUrl = await getImagesUrl(data.imageURL);
          return { id: doc.id, ...data, imageUrl };
        })
      );
      setBooks(dataList);
    });
  }, []);

  return (
    <div>
      <h1>Home</h1>

      {books.map((book) => (
        <div key={book.id} className="border-2 w-fit p-10 rounded-lg">
          <h3>{book.name}</h3>
          <h3>{book.price}</h3>
          <img src={book.imageUrl} alt={book.name} width="100" />
        </div>
      ))}
    </div>
  );
}

export default Home;
