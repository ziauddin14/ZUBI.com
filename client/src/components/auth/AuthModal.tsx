import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';

interface AuthModalProps {
  type: 'login' | 'signup' | null;
  open: boolean;
  onClose: () => void;
}

export function AuthModal({ type, open, onClose }: AuthModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const { login, signup } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let success = false;
    if (type === 'login') {
      success = login(formData.email, formData.password);
    } else if (type === 'signup') {
      success = signup(formData.name, formData.email, formData.password, formData.confirmPassword);
    }
    
    if (success) {
      onClose();
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!type) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {type === 'login' ? 'Sign In' : 'Sign Up'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'signup' && (
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              required
            />
          </div>
          
          {type === 'signup' && (
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                required
              />
            </div>
          )}
          
          <Button type="submit" className="w-full">
            {type === 'login' ? 'Sign In' : 'Sign Up'}
          </Button>
          
          <p className="text-center text-sm text-muted-foreground">
            {type === 'login' ? "Don't have an account? " : "Already have an account? "}
            <Button
              type="button"
              variant="link"
              className="p-0 h-auto text-primary"
              onClick={() => {
                const newType = type === 'login' ? 'signup' : 'login';
                onClose();
                setTimeout(() => {
                  // This would need to be handled by parent component
                }, 100);
              }}
            >
              {type === 'login' ? 'Sign up' : 'Sign in'}
            </Button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
