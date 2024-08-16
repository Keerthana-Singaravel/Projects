document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        var link = this.querySelector('.card-link');
        if (link) {
            window.location.href = link.href;
        }
    });
});




const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Firestore
  const db = firebase.firestore();

  // Form submission handler
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Enter Your Name"]').value;
    const email = document.querySelector('input[placeholder="Enter Your email"]').value;
    const message = document.querySelector('input[placeholder="Enter Your Message"]').value;

    // Add a new document in collection "contacts"
    db.collection("contacts").add({
        name: name,
        email: email,
        message: message,
        submissionDate: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Message sent successfully!");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("An error occurred while sending your message.");
    });
  });