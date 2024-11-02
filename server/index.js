const express = require("express");
const app = express();
const cors = require("cors");
const {
  initializeFirebaseApp,
  postData,
  getAllData,
  getData,
  updateData,
  deleteData,
  registerUser,
  loginUser,
  wishlistUser,
  cartUser,
} = require("./firebase");

const PORT = 3001;
initializeFirebaseApp();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { email, password, username, address, phoneNumber } = req.body;
  try {
    const user = await registerUser(email, password, username, address, phoneNumber);
    return res.json({ message: "User registered successfully!", user });
  } catch (error) {
    return res.status(400).json({ message: error.message }); 
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await loginUser(email, password);
  if (user) {
    return res.json({ message: "User logged in successfully!", user });
  } else {
    return res.status(400).json({ message: "Login failed." });
  }
});

app.post("/wishlist/post/:id", async (req, res) => {
  console.log("POST /wishlist/post/:id called with id:", req.params.id);
  const userId = req.params.id;

  const { wishlist } = req.body;

  try {
    const response = await wishlistUser(userId, wishlist);
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/wishlist/get/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const wishlistItems = await getDocs(collection(firestoreDB, `users/${userId}/wishlist`));
    const wishlist = wishlistItems.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return res.json(wishlist);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post("/cart/post/:id", async (req, res) => {
  console.log("POST /cart/post/:id called with id:", req.params.id);
  const userId = req.params.id;

  const { cart } = req.body;
  if (!cart) {
    return res.status(400).json({ error: "Cart is required." });
  }

  try {
    const response = await cartUser(userId, cart);
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/cart/get/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const cartItems = await getDocs(collection(firestoreDB, `users/${userId}/cart`));
    const cart = cartItems.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post("/create/:category", async (req, res) => {
  const category = req.params.category;
  await postData(req.body, category);
  return res.json({ message: "Data uploaded successfully!" });
});

app.get("/read/:category", async (req, res) => {
  const category = req.params.category;
  const data = await getAllData(category);

  return res.json(data);
});

app.get("/read/:category/:id", async (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  const data = await getData(category, id);

  return res.json(data);
});

app.post("/update/:category/:id", async (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  await updateData(category, id, req.body);
  return res.json({ message: "Data edited successfully!" });
});

app.post("/delete/:category/:id", async (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  await deleteData(category, id);
  return res.json({ message: "Data deleted successfully!" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
