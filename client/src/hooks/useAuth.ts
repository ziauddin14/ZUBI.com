import { useAppContext } from '@/context/AppContext';
import { User } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export function useAuth() {
  const { state, dispatch } = useAppContext();
  const { toast } = useToast();

  const login = (email: string, password: string) => {
    // Simple validation for demo purposes
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return false;
    }

    const user: User = {
      id: Date.now().toString(),
      email,
      name: email.split('@')[0]
    };

    dispatch({ type: 'SET_USER', payload: user });
    toast({
      title: "Welcome back!",
      description: "You have been successfully logged in.",
    });
    return true;
  };

  const signup = (name: string, email: string, password: string, confirmPassword: string) => {
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return false;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return false;
    }

    const user: User = {
      id: Date.now().toString(),
      email,
      name
    };

    dispatch({ type: 'SET_USER', payload: user });
    toast({
      title: "Account created!",
      description: "Your account has been created successfully.",
    });
    return true;
  };

  const logout = () => {
    dispatch({ type: 'SET_USER', payload: null });
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    login,
    signup,
    logout
  };
}
