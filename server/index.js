// Import funtions
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const {
	initializeFirebaseApp,
	registerUser,
	loginUser,
	postData,
	getAllData,
	getData,
	updateData,
	deleteData,
	signOutUser,
} = require("./firebase");
require("dotenv").config();

// Express setup
const app = express();
const PORT = 3001;

initializeFirebaseApp();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
	const token = req.headers["authorization"];
	if (!token) {
		return res.status(403).send("A token is required for authentication");
	}
	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).send("Invalid Token");
		}
		req.user = decoded;
		next();
	});
};

// Authentication routes
app.post("/register", async (req, res) => {
	const { email, password, username, address, phoneNumber } = req.body;
	try {
		const user = await registerUser(
			email,
			password,
			username,
			address,
			phoneNumber
		);
		return res.json({ message: "User registered successfully!", user });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.post("/login", async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await loginUser(email, password);
		const token = jwt.sign(
			{ uid: user.user.uid, email: user.user.email },
			process.env.JWT_SECRET,
			{
				expiresIn: "1h",
			}
		);
		return res.json({ message: "Login successful!", token });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.post("/logout", async (req, res) => {
	try {
		await signOutUser();
		return res.json({ message: "Logout successful!" });
	} catch (error) {
		return res.status(500).json({ message: "Failed to logout." });
	}
});

app.get("/protected", authenticateToken, (req, res) => {
	return res.json({ message: "This is a protected route" });
});

app.get("/user", authenticateToken, (req, res) => {
	return res.json({ user: req.user });
});

// CRUD routes
// Create data
app.post("/data/:collectionName/:userId/order", async (req, res) => {
	const { collectionName, userId } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/order`;
	const data = req.body;
	try {
		const document = await postData(data, fullCollectionName);
		return res.json({ message: "Data added successfully!", document });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.post("/data/:collectionName/:userId/cart", async (req, res) => {
	const { collectionName, userId } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/cart`;
	const data = req.body;
	try {
		const document = await postData(data, fullCollectionName);
		return res.json({ message: "Data added successfully!", document });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.post("/data/:collectionName/:userId/sent", async (req, res) => {
	const { collectionName, userId } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/sent`;
	const data = req.body;
	try {
		const document = await postData(data, fullCollectionName);
		return res.json({ message: "Data added successfully!", document });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.post("/data/:collectionName", async (req, res) => {
	const { collectionName } = req.params;
	const data = req.body;
	try {
		const document = await postData(data, collectionName);
		return res.json({ message: "Data added successfully!", document });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

// Read all data

app.get("/data/:collectionName/:userId/order", async (req, res) => {
	const { collectionName, userId } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/order`;
	try {
		const data = await getAllData(fullCollectionName);
		return res.json(data);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.get("/data/:collectionName/:userId/review", async (req, res) => {
	const { collectionName, userId } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/review`;
	try {
		const data = await getAllData(fullCollectionName);
		return res.json(data);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.get("/data/:collectionName/:userId/wishlist", async (req, res) => {
	const { collectionName, userId } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/wishlist`;
	try {
		const data = await getAllData(fullCollectionName);
		return res.json(data);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.get("/data/:collectionName/:userId/cart", async (req, res) => {
	const { collectionName, userId } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/cart`;
	try {
		const data = await getAllData(fullCollectionName);
		return res.json(data);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});
app.get("/data/:collectionName/:userId/process", async (req, res) => {
	const { collectionName, userId } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/sent`;
	try {
		const data = await getAllData(fullCollectionName);
		console.log(data);
		return res.json(data);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.get("/data/:collectionName", async (req, res) => {
	const { collectionName } = req.params;
	try {
		const data = await getAllData(collectionName);
		return res.json(data);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

// Read single data
app.get("/data/:collectionName/:id", async (req, res) => {
	const { collectionName, id } = req.params;
	try {
		const data = await getData(collectionName, id);
		return res.json(data);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

// Update data
app.put("/data/:collectionName/:userId/process/:id", async (req, res) => {
	const { collectionName, userId, id } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/sent`;
	const data = req.body;
	try {
		const document = await updateData(fullCollectionName, id, data);
		return res.json({ message: "Data updated successfully!", data });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.put("/data/:collectionName/:userId/cart/:id", async (req, res) => {
	const { collectionName, userId, id } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/cart`;
	const data = req.body;
	try {
		const document = await updateData(fullCollectionName, id, data);
		return res.json({ message: "Data updated successfully!", document });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.put("/data/:collectionName/:id", async (req, res) => {
	const { collectionName, id } = req.params;
	const data = req.body;
	try {
		const document = await updateData(collectionName, id, data);
		return res.json({ message: "Data updated successfully!", document });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

// Delete data
app.delete("/data/:collectionName/:userId/cart/:id", async (req, res) => {
	const { collectionName, userId, id } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/cart`;
	try {
		const document = await deleteData(fullCollectionName, id);
		return res.json({ message: "Data deleted successfully!", document });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.delete("/data/:collectionName/:userId/order/:id", async (req, res) => {
	const { collectionName, userId, id } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/order`;
	try {
		const document = await deleteData(fullCollectionName, id);
		return res.json({ message: "Data deleted successfully!", document });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.delete("/data/:collectionName/:userId/process/:id", async (req, res) => {
	const { collectionName, userId, id } = req.params;
	const fullCollectionName = `${collectionName}/${userId}/sent`;
	try {
		const document = await deleteData(fullCollectionName, id);
		return res.json({ message: "Data deleted successfully!", document });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.delete("/data/:collectionName/:id", async (req, res) => {
	const { collectionName, id } = req.params;
	try {
		const document = await deleteData(collectionName, id);
		return res.json({ message: "Data deleted successfully!", document });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
