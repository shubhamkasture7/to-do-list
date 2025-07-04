import { Button } from "@mui/material";
import { signInWithGoogle } from "../firebase"; // Correct import

const LoginPage = ({ onLogin }) => {
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle(); // Call the function
      onLogin(user); // Pass user data to the parent component
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="login-page">
      <h1>Welcome to the Todo App</h1>
      <Button variant="contained" onClick={handleGoogleLogin}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default LoginPage;