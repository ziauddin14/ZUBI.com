import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return."
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days, while expedited shipping takes 2-3 business days. Free shipping is available on orders over $50."
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination."
  },
  {
    id: 4,
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay."
  },
  {
    id: 6,
    question: "Can I cancel my order?",
    answer: "Orders can be cancelled within 2 hours of placement if they haven't been processed yet. Please contact customer service as soon as possible."
  },
  {
    id: 7,
    question: "Do you offer price matching?",
    answer: "Yes, we offer price matching on identical items from authorized retailers. Contact us with proof of the lower price and we'll match it."
  },
  {
    id: 8,
    question: "How do I create an account?",
    answer: "Click the 'Sign Up' button in the top navigation, fill out your information, and verify your email address to complete registration."
  }
];

export function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleFAQ = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-foreground">
        Frequently Asked Questions
      </h1>
      
      <div className="space-y-4">
        {faqData.map((faq) => {
          const isOpen = openItems.includes(faq.id);
          
          return (
            <Card key={faq.id} className="overflow-hidden">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full text-left p-6 font-semibold text-foreground hover:bg-muted/50 transition-colors justify-between"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0" />
                  )}
                </Button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-muted-foreground">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 text-foreground">
          Still have questions?
        </h3>
        <p className="text-muted-foreground mb-6">
          Can't find the answer you're looking for? Please chat with our friendly team.
        </p>
        <Button size="lg">
          Contact Support
        </Button>
      </div>
    </div>
  );
}
