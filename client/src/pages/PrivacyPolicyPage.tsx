import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, Cookie, Database, Users } from 'lucide-react';

export function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email address)",
        "Product preferences and shopping behavior on our website",
        "Device information including IP address, browser type, and operating system",
        "Location data if you enable location services",
        "Customer service interactions and feedback"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "To process and fulfill your orders and transactions",
        "To provide customer support and respond to your inquiries",
        "To personalize your shopping experience and product recommendations",
        "To send important updates about your orders and account",
        "To improve our website functionality and user experience"
      ]
    },
    {
      icon: Lock,
      title: "Data Storage and Security",
      content: [
        "All personal data is stored securely using industry-standard encryption",
        "We use localStorage for temporary data storage on your device",
        "Payment information is processed through secure, encrypted channels",
        "Regular security audits and updates to protect your information",
        "Limited access to personal data on a need-to-know basis"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "Information may be shared with trusted service providers who assist in operations",
        "Legal compliance: We may disclose information when required by law",
        "Business transfers: Information may be transferred in case of merger or acquisition",
        "With your consent: We may share information when you explicitly agree"
      ]
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      content: [
        "We use cookies to enhance your browsing experience",
        "Essential cookies for website functionality and security",
        "Analytics cookies to understand how you use our website",
        "Preference cookies to remember your settings and choices",
        "You can control cookie settings through your browser preferences"
      ]
    },
    {
      icon: Eye,
      title: "Your Rights and Choices",
      content: [
        "Access: Request a copy of the personal information we hold about you",
        "Correction: Request correction of inaccurate or incomplete information",
        "Deletion: Request deletion of your personal information",
        "Portability: Request transfer of your data to another service",
        "Opt-out: Unsubscribe from marketing communications at any time"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how ZUBI collects, uses, and protects your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 animate-slide-up">
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              At ZUBI (ZU Business Industries), we are committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy describes how we collect, use, store, and share 
              information when you use our website and services. By using our website, you agree to the practices 
              described in this policy.
            </p>
          </CardContent>
        </Card>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="animate-slide-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <section.icon className="h-6 w-6 text-primary mr-3" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* localStorage Disclaimer */}
        <Card className="mt-8 animate-slide-up bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Database className="h-6 w-6 text-primary mr-3" />
              LocalStorage Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses localStorage technology to store certain information locally on your device, 
              including your shopping cart, preferences, and session data. This information remains on your 
              device and is not transmitted to our servers unless you choose to create an account or make a 
              purchase. You can clear this data at any time through your browser settings.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8 animate-slide-up">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Questions About This Policy?</h3>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: zu37216@gmail.com</p>
              <p>Phone: +92 3198998086</p>
              <p>Address: House No L-XXX, Korangi No 03, Karachi, Pakistan</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}