const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  getDocs,
  getDoc,
  collection,
  query,
} = require("firebase/firestore");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");

let app;
let firestoreDB;
let auth;

const firebaseConfig = {
  apiKey: "AIzaSyDHelwXXrAMhytact6B3zCS7LyEDcJS-Wo",
  authDomain: "raudlatulirfan-c7999.firebaseapp.com",
  projectId: "raudlatulirfan-c7999",
  storageBucket: "raudlatulirfan-c7999.appspot.com",
  messagingSenderId: "546842381619",
  appId: "1:546842381619:web:4afc62d57234b3996a8246",
  measurementId: "G-JRGN04FFXP",
};

const initializeFirebaseApp = () => {
  try {
    app = initializeApp(firebaseConfig);
    firestoreDB = getFirestore();
    auth = getAuth();
    return app;
  } catch (error) {
    console.log("Firebase Error: ", error);
  }
};

const registerUser = async (email, password, username, address, phoneNumber) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    const userData = {
      username: username,
      address: address,
      phoneNumber: phoneNumber
    };

    await setDoc(doc(firestoreDB, "users", uid), userData);
    
    return userCredential;
  } catch (error) {
    console.log("Error in registering user: ", error);
  }
};

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.log("Error in logging in user: ", error);
  }
};

const wishlistUser = async (userId, wishlist) => {
  try {
    const wishlistCollection = collection(firestoreDB, `users/${userId}/wishlist`);
    await addDoc(wishlistCollection, wishlist);
    return { message: "Wishlist item added successfully!" };
  } catch (error) {
    console.log("Error in adding wishlist item: ", error);
  }
};

const cartUser = async (userId, cart) => {
  try {
    const cartCollection = collection(firestoreDB, `users/${userId}/cart`);
    await addDoc(cartCollection, cart);
    return { message: "cart item added successfully!" };
  } catch (error) {
    console.log("Error in adding cart item: ", error);
    throw error;
  }
};


const addKaligraphyItem = async (data) => {
  try {
    const document = await addDoc(collection(firestoreDB, "kaligraphyItem"), data);
    return document.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

const addReviewToKaligraphyItem = async (itemId, reviewData) => {
  try {
    const reviewsRef = collection(firestoreDB, "kaligraphyItem", itemId, "review");
    const document = await addDoc(reviewsRef, reviewData);
    return document.id; 
  } catch (error) {
    console.error("Error adding review: ", error);
  }
};

const postData = async (data, collectionName) => {
  try {
    const document = await addDoc(collection(firestoreDB, collectionName), data);
    return document;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

const getAllData = async (collectionName) => {
  try {
    const collectionRef = collection(firestoreDB, collectionName);
    const data = [];
    
    let q;
    
    q = query(collectionRef);

    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    
    return data;
  } catch (error) {
    console.log("Error in getting data: ", error);
  }
};

const getData = async (collectionName, id) => {
  try {
    const document = await getDoc(doc(firestoreDB, collectionName, id))
    return document.data();
  } catch (error) {
    console.log("Error in getting data: ", error);
  }
};

const updateData = async (collectionName, id, data) => {
  try {
    const document = doc(firestoreDB, collectionName, id);
    let dataUpdated = await setDoc(document, data);
    return dataUpdated;
  } catch (error) {
    console.log("Error in uploading data: ", error);
  }
};

const deleteData = async (collectionName, id) => {
  try {
    const document = doc(firestoreDB, collectionName, id);
    let dataDeleted = await deleteDoc(document);
    return dataDeleted;
  } catch (error) {
    console.log("Error in deleting data: ", error);
  }
};

module.exports = {
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
  addKaligraphyItem,
  addReviewToKaligraphyItem,
};
