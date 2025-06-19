import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, AlertTriangle, CreditCard, Scale, Globe } from 'lucide-react';

export function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the ZUBI website, you accept and agree to be bound by these Terms of Service",
        "These terms apply to all visitors, users, and customers of our website",
        "If you do not agree with any part of these terms, you must not use our website",
        "We reserve the right to update these terms at any time without prior notice",
        "Continued use of the website constitutes acceptance of modified terms"
      ]
    },
    {
      icon: Shield,
      title: "User Responsibilities",
      content: [
        "You must provide accurate and complete information when creating an account",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You must not use the website for any unlawful or prohibited activities",
        "You agree not to interfere with the proper functioning of the website",
        "You must not attempt to gain unauthorized access to our systems or data"
      ]
    },
    {
      icon: Globe,
      title: "Acceptable Use Policy",
      content: [
        "Use the website only for legitimate shopping and browsing purposes",
        "Do not post or transmit any harmful, offensive, or inappropriate content",
        "Respect intellectual property rights of ZUBI and third parties",
        "Do not engage in any activity that could harm our reputation or operations",
        "Comply with all applicable local, national, and international laws"
      ]
    },
    {
      icon: CreditCard,
      title: "Purchase Conditions",
      content: [
        "All purchases are subject to availability and acceptance by ZUBI",
        "Prices are subject to change without notice until payment is processed",
        "We reserve the right to refuse or cancel orders at our discretion",
        "Payment must be made in full before products are shipped",
        "All sales are final unless otherwise specified in our return policy"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations of Liability",
      content: [
        "ZUBI provides the website and services 'as is' without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability shall not exceed the amount paid for the specific product or service",
        "We do not guarantee uninterrupted or error-free operation of the website",
        "Users assume all risks associated with the use of our website and services"
      ]
    },
    {
      icon: Scale,
      title: "Legal Jurisdiction",
      content: [
        "These terms are governed by the laws of Pakistan",
        "Any disputes shall be resolved in the courts of Karachi, Pakistan",
        "If any provision of these terms is found invalid, the remaining provisions remain in effect",
        "These terms constitute the entire agreement between you and ZUBI",
        "No waiver of any term shall be deemed a waiver of any other term"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Scale className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our website and services.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 animate-slide-up">
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to ZUBI (ZU Business Industries). These Terms of Service ("Terms") govern your use of our 
              website and services. By using our website, you agree to comply with and be bound by these terms. 
              Please review them carefully and contact us if you have any questions.
            </p>
          </CardContent>
        </Card>

        {/* Terms Sections */}
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

        {/* Intellectual Property */}
        <Card className="mt-8 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Shield className="h-6 w-6 text-primary mr-3" />
              Intellectual Property Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, 
                and software, is the property of ZUBI or its content suppliers and is protected by 
                international copyright and trademark laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works of any content 
                without our express written permission.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mt-8 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <AlertTriangle className="h-6 w-6 text-primary mr-3" />
              Termination
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We reserve the right to terminate or suspend your account and access to our website 
                at any time, without prior notice, for conduct that we believe violates these Terms 
                or is harmful to other users, us, or third parties.
              </p>
              <p>
                Upon termination, your right to use the website will cease immediately, but these 
                Terms will remain in effect regarding your prior use of the website.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8 animate-slide-up">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Questions About These Terms?</h3>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us:
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